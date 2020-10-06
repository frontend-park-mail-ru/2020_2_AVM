package main

import (
	"fmt"
	"github.com/labstack/echo"
	"github.com/lithammer/shortuuid"
	"net/http"
	"time"
)

func (h *Handler) Login(c echo.Context) (err error) {
	log := new(Login)
	expiration := time.Now().Add(10 * time.Hour)
	if err = c.Bind(log); err != nil{
		return c.JSON(http.StatusBadRequest, log)
	}
	password := ""
	for _, profile := range h.Profiles {
		if profile.Login == log.Login {
			password = profile.Password
		}
	}
	if log.Password == password {
		id := shortuuid.New()
		h.logInIds[id] = log.Login
		cookie := http.Cookie{
			Name:    "session_id",
			Value: id,
			Expires: expiration,
			HttpOnly: true,
		}
		c.SetCookie(&cookie)
	} else {
		return c.JSON(http.StatusBadRequest, log)
	}
	fmt.Println(log)
	return c.JSON(http.StatusOK, log)
}

func (h *Handler) Logout(c echo.Context) (err error) {
	cookie, err := c.Cookie("session_id")
	if err == http.ErrNoCookie {
		return c.JSON(http.StatusBadRequest, "bad")
	}
	delete(h.logInIds, cookie.Value)
	cookie.Expires = time.Now().AddDate(0, 0, -1)
	c.SetCookie(cookie)

	return c.JSON(http.StatusOK, "ok")

}