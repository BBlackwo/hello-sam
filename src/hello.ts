import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult
} from 'aws-lambda';

class MyEvent implements APIGatewayProxyEvent {
  body: string;
  headers: { [name: string]: string; };
  multiValueHeaders: { [name: string]: string[]; };
  httpMethod: string;
  isBase64Encoded: boolean;
  path: string;
  pathParameters: { [name: string]: string; };
  queryStringParameters: { [name: string]: string; };
  multiValueQueryStringParameters: { [name: string]: string[]; };
  stageVariables: { [name: string]: string; };
  requestContext: import("aws-lambda").APIGatewayEventRequestContext;
  resource: string;

  // Custom prop
  name: string;
}

export const handler: APIGatewayProxyHandler = async (
  event: MyEvent
): Promise<APIGatewayProxyResult> => {
  console.log('event :', event);
  return {
    body: JSON.stringify({ message: `Hello, ${event.name}` }),
    statusCode: 200
  };
};