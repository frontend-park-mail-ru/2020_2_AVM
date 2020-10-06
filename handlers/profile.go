package main

import (
	"github.com/labstack/echo"
	"net/http"
)

func (h *Handler) Signup(c echo.Context) (err error) {
	prof := new(Profile)
	if err = c.Bind(prof); err != nil {
		return
	}
	h.Profiles = append(h.Profiles, *prof)
	return c.JSON(http.StatusCreated, prof)

}

func (h *Handler) ProfileEdit(c echo.Context) (err error) {
	new_profile := Profile{}
	if err = c.Bind(&new_profile); err != nil {
		return
	}
	for i, profile := range h.Profiles {
		if profile.Id == new_profile.Id {
			h.Profiles[i] = new_profile
		}
	}

	return c.JSON(http.StatusOK, new_profile)
}
