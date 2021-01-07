import mongoose from 'mongoose'

const MovieSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Please add a title'],
        unique:true,
        trim:true,
        maxlength:[60,'title cannot be more than 60 characters']
    },
    slug:String,
    description:{
        type:String,
        required:[true,'Please add a description'],
        maxlength:[600,'description cannot be more than 60 characters']
    },
    wikipedia_link:{
        type:String,
        match:[/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,'Please use a valid wikipedia link']
    },
    box_office:{
        type:String,
        required:true
    },
    budget:{
        type:String,
        required:true
    },
    release_date:{
        type:String,
        required:true
    },
    actors:{
        type:[String],
        required:true
    },
    director:{
        type:String,
        required:true
    },
    story_by:{
        type:String,
        required:true
    }

})

const Movie = mongoose.model('Movie',MovieSchema)

export {Movie}