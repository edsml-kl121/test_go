package routes

import(
	controllers "server/controllers"
	// "server/middleware"
	"github.com/gin-gonic/gin"
)


func OrderRoutes(incomingRoutes *gin.Engine) {
	// these are the endpoints
	//C
	incomingRoutes.POST("/order/create", controllers.AddOrder)
	//R
	incomingRoutes.GET("/waiter/:waiter", controllers.GetOrdersByWaiter)
	incomingRoutes.GET("/orders", controllers.GetOrders)
	incomingRoutes.GET("/order/:id/", controllers.GetOrderById)
	//U
	incomingRoutes.PUT("/waiter/update/:id", controllers.UpdateWaiter)
	incomingRoutes.PUT("/order/update/:id", controllers.UpdateOrder)
	//D
	incomingRoutes.DELETE("/order/delete/:id", controllers.DeleteOrder)
}