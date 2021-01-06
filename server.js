import express from "express";
import dotenv from "dotenv";

// TODO: LOAD ENV VARIABLES
dotenv.config({ path: "./config/config.env" });

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `server running in port ${PORT} in ${process.env.NODE_ENV} environment`
  )
);
 