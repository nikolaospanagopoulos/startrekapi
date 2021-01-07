import express from "express";
import dotenv from "dotenv";

//import colors package
import colors from 'colors'

//import error middleware
import {errorHandler} from './middleware/error.js'

// TODO: LOAD ENV VARIABLES
dotenv.config({ path: "./config/config.env" });

//import middleware
import morgan from "morgan";

//import database config
import { connectDB } from "./config/db.js";

//import routes
import movieRoutes from "./routes/movieRoutes.js";

//connect to database
connectDB();

const app = express();

//add body parser middleware
app.use(express.json())


//development middleware logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//mount routes
app.use("/api/v1/movies", movieRoutes);


//use error handler
app.use(errorHandler)


const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `server running in port ${PORT} in ${process.env.NODE_ENV} environment`.yellow.bold
  )
);

//handle unhandled promise rejections

process.on("unhandledRejection", (err, promise) => {
  console.log(`unhandled rejection : ${err.message}`.red);
  //close server exit process
  server.close(() => process.exit(1));
});
