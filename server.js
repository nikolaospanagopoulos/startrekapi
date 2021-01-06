import express from "express";
import dotenv from "dotenv";

//import routes
import movieRoutes from './routes/movieRoutes.js'


// TODO: LOAD ENV VARIABLES
dotenv.config({ path: "./config/config.env" });

const app = express();

//mount routes
app.use('/api/v1/movies',movieRoutes)


const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `server running in port ${PORT} in ${process.env.NODE_ENV} environment`
  )
);
 