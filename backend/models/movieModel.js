import mongoose from "mongoose";

const movieSchema = mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        author:{
            type:String,
            required:true
        },
        publishYear:{
            type:String,
            required:true
        }
    },
    {
        timestamps: true
    }
);

export const Movie = mongoose.model('Movie', movieSchema);