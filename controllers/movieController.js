//import Movie Model

import {Movie} from '../models/movieModel.js'


//description: gets all movies
//route: GET api/v1/movies
//access PUBLIC

const getMovies = async(req, res, next) => {
  const movies = await Movie.find({})
  res.status(200).json({success:true,count:movies.length,data:movies})
};

//description: gets movie by id
//route: GET api/v1/movies/:id
//access PUBLIC

const getMovie = async(req, res, next) => {
  try{
    const movie = await Movie.findById(req.params.id)

    if(!movie){
      return res.staus(400).json({success:false})
    }
    res.status(200).json({success:true,data:movie})
  }catch(err){
    next(err)
  }
  
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

const updateMovie = async (req, res, next) => {
  const movie = await Movie.findByIdAndUpdate(req.params.id,req.body,{
    new:true,
    runValidators:true
  }) 
  if(!movie){
    return res.status(400).json({success:false})
  }
  res.status(200).json({ success: true, data:movie });
};

//description: delete movie
//route: DELETE api/v1/movies/:id
//access ADMIN

const deleteMovie = async (req, res, next) => {
  try{
    const movie = await Movie.findByIdAndDelete(req.params.id)

    if(!movie){
      return res.status(400).json({success:false})
    }
    res.status(200).json({success:true,data:{}})
  }catch{

  }
  
};

export { getMovies, getMovie,updateMovie,createMovie,deleteMovie };
