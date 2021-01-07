//TODO: we create a class that extends the Error class so that we can pass the status code we want

class ErrorResponse extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}


export {ErrorResponse}