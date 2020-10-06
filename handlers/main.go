package main

import (
"github.com/labstack/echo"
"github.com/labstack/echo/middleware"
"github.com/labstack/gommon/log"
)

func main() {
	e := echo.New()
	e.Logger.SetLevel(log.ERROR)
	e.Use(middleware.Logger())

	// Initialize handler
	h := NewHandler()
	// Routes
	e.POST("/article", h.CreateArticle)
	e.GET("/article/:author", h.ArticleByAuthor)
	e.POST("/signup", h.Signup)
	e.POST("/signin", h.Login)
	e.POST("/setting", h.ProfileEdit)
	// Start server
	e.Logger.Fatal(e.Start(":1323"))
}