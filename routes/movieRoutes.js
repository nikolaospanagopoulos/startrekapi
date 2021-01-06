import express from "express";
//import controller functions
import {
  getMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
} from "../controllers/movieController.js";

const router = express.Router();

router.route("/").get(getMovies).post(createMovie);

router.route("/:id").get(getMovie).put(updateMovie).delete(deleteMovie);

export default router;
