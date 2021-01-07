import {ErrorResponse} from '../utils/errorResponse.js'

export const errorHandler = (err,req,res,next) => {
    let error = {...err}
    error.message = err.message
    console.log(err.stack.red)


    //mongoose bad object id

    if(err.name === 'CastError') {
        const message = `Resource not found with id of ${err.value}`
        error = new ErrorResponse(message,404)
    }

    res.status(error.statusCode || 500).json({
        success:false,
        error:error.message || 'Server Error'
    })
}