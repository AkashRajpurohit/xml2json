package main

import (
	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

type Response struct {
	json string
}

func handler(request events.APIGatewayProxyRequest) (*events.APIGatewayProxyResponse, error) {
	params := request.QueryStringParameters

	_, ok := params["url"]

	if !ok {
		return &events.APIGatewayProxyResponse{
			StatusCode: 400,
			Body:       "Hello World!",
		}, nil
	}

	return &events.APIGatewayProxyResponse{
		StatusCode: 200,
		Headers:    map[string]string{"Content-Type": "application/json"},
		Body:       "{message: \"Hello World!\"}",
	}, nil
}

func main() {
	lambda.Start(handler)
}
