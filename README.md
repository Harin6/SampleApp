# NODE TEST

  This Node.js based back-end application includes two versions of the API that parses the HTTP post data in the form of a JSON object.

### BUILD SYSTEM

  WebPack is the main build tool to concatenate, compress or minify the source code for faster loading/execution time when the application will be deployed to production.

### Commands

  ```
  npm start
  npm test
  ```

### The API urls:

  ```
  http://localhost:3000/api/v1/parse
  http://localhost:3000/api/v2/parse
  ```

### Payload Data

  ```
  POST Data = { "data": "JOHN0000MICHAEL0009994567" }
  ```

### The Response Data for EndPoints

  1. http://localhost:3000/api/v1/parse

  ```
  Response Data = { statusCode: 200, data: { firstName: "JOHN0000", lastName: "MICHAEL000", clientId: "9994567" }}
  ``` 

  2. http://localhost:3000/api/v2/parse

  ```
  Response Data =  { statusCode: 200, data: { firstName: "JOHN", lastName: "MICHAEL", clientId: "999-4567" } }
  ``` 

### Unit Testing 
   
  Jest unit testing used for each version of the API endpoints.
