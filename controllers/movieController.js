//import Movie Model

import {Movie} from '../models/movieModel.js'


//description: gets all movies
//route: GET api/v1/movies
//access PUBLIC

const getMovies = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all movies" });
};

//description: gets movie by id
//route: GET api/v1/movies/:id
//access PUBLIC

const getMovie = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all movies" });
};

//description: create movie
//route: POST api/v1/movies
//access PUBLIC

const createMovie =async (req, res, next) => {
  const movie = await Movie.create(req.body)
  res.status(201).json({ success: true, data:movie });
};

//description: update movie
//route: PUT api/v1/movies/:id
//access PUBLIC

const updateMovie = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all movies" });
};

//description: delete movie
//route: DELETE api/v1/movies/:id
//access ADMIN

const deleteMovie = (req, res, next) => {
  res.status(201).json({ success: true, msg: "Show all movies" });
};

export { getMovies, getMovie,updateMovie,createMovie,deleteMovie };
