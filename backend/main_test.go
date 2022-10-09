package main
import (
	// "context"
	"fmt"
	"bytes"
	"net/http"
	"reflect"
	// "log"
	// "time"
	// "server/models"
	// "server/database"
	"net/http/httptest"
	"server/controllers"
	"testing"
	"github.com/gin-gonic/gin"
	// "github.com/go-playground/validator/v10"
	// "go.mongodb.org/mongo-driver/bson"
	// "go.mongodb.org/mongo-driver/bson/primitive"
	// "go.mongodb.org/mongo-driver/mongo"
	// "github.com/stretchr/testify/assert"
)


func TestControllerGetAll(t *testing.T) {

	// Switch to test mode so you don't get such noisy output
	gin.SetMode(gin.TestMode)

	// Setup your router, just like you did in your main function, and
	// register your routes
	r := gin.Default()
	r.GET("/orders", controllers.GetOrders)

	// Create the mock request you'd like to test. Make sure the second argument
	// here is the same as one of the routes you defined in the router setup
	// block!
	req, err := http.NewRequest(http.MethodGet, "/orders", nil)
	if err != nil {
			t.Fatalf("Couldn't create request: %v\n", err)
	}

	// Create a response recorder so you can inspect the response
	w := httptest.NewRecorder()

	// Perform the request
	r.ServeHTTP(w, req)

	// Check to see if the response was what you expected
	if w.Code != http.StatusOK {
			t.Fatalf("Expected to get status %d but instead got %d\n", http.StatusOK, w.Code)
	}
}

func TestControllerNewOrder(t *testing.T) {

	// Switch to test mode so you don't get such noisy output
	gin.SetMode(gin.TestMode)

	// Setup your router, just like you did in your main function, and
	// register your routes
	r := gin.Default()
	r.POST("/order/create", controllers.AddOrder)

	// Create the mock request you'd like to test. Make sure the second argument
	// here is the same as one of the routes you defined in the router setup
	// block!
	jsonBody := []byte(`{"client_message": "hello, server!"}`)
	bodyReader := bytes.NewReader(jsonBody)
	req, err := http.NewRequest(http.MethodPost, "/order/create", bodyReader)

	// c.JSON(http.StatusOK, req)
	fmt.Println("error", err)
	if err != nil {
			t.Fatalf("Couldn't create request: %v\n", err)
	}

	// Create a response recorder so you can inspect the response
	w := httptest.NewRecorder()

	// Perform the request
	r.ServeHTTP(w, req)

	// Check to see if the response was what you expected
	if w.Code != http.StatusOK {
			t.Fatalf("Expected to get status %d but instead got %d\n", http.StatusOK, w.Code)
	}
}