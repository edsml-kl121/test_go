package main

import (
	"os"

	routes "server/routes"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	// "time"
)

func main() {

	port := os.Getenv("PORT")

	if port == "" {
		port = "5000"
	}

	router := gin.New()
	// router.Use(cors.New(cors.Config{
	// 	AllowOrigins:     []string{"https://foo.com"},
	// 	AllowMethods:     []string{"PUT", "PATCH"},
	// 	AllowHeaders:     []string{"Origin"},
	// 	ExposeHeaders:    []string{"Content-Length"},
	// 	AllowCredentials: true,
	// 	AllowOriginFunc: func(origin string) bool {
	// 		return origin == "https://github.com"
	// 	},
	// 	MaxAge: 12 * time.Hour,
	// }))
	// router.Use(gin.Logger())
	router.Use(gin.Logger())

	router.Use(cors.Default())

	routes.AuthRoutes(router)
	routes.UserRoutes(router)

	router.GET("/api-1", func(c *gin.Context) {
		c.JSON(200, gin.H{"success": "Access granted for api-1"})
	})
	router.GET("/api-2", func(c *gin.Context){
		c.JSON(200, gin.H{"success": "Access granted for api-2"})
	})


	routes.OrderRoutes(router)
	router.Run(":" + port)
}

// https://medium.com/geekculture/full-stack-application-with-go-gin-react-and-mongodb-37b63ef71133