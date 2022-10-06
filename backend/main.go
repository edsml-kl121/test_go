package main

import (
	"os"

	routes "server/routes"
	// "github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {

	port := os.Getenv("PORT")

	if port == "" {
		port = "5000"
	}

	router := gin.New()
	router.Use(gin.Logger())

	// routes.AuthRoutes(router)
	// routes.UserRoutes(router)

	// router.GET("/api-1", func(c *gin.context) {
	// 	c.JSON(200, gin.H{"success": "Access granted for api-1"})
	// })
	// router.GET("/api-2", func(c *gin.context){
	// 	c.JSON(200, gin.H{"success": "Access granted for api-2"})
	// })

	// router.Use(cors.Default())

	routes.OrderRoutes(router)
	// // these are the endpoints
	// //C
	// router.POST("/order/create", routes.AddOrder)
	// //R
	// router.GET("/waiter/:waiter", routes.GetOrdersByWaiter)
	// router.GET("/orders", routes.GetOrders)
	// router.GET("/order/:id/", routes.GetOrderById)
	// //U
	// router.PUT("/waiter/update/:id", routes.UpdateWaiter)
	// router.PUT("/order/update/:id", routes.UpdateOrder)
	// //D
	// router.DELETE("/order/delete/:id", routes.DeleteOrder)

	//this runs the server and allows it to listen to requests.
	router.Run(":" + port)
}

// https://medium.com/geekculture/full-stack-application-with-go-gin-react-and-mongodb-37b63ef71133