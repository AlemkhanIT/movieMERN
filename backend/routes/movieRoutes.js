import express from "express"
import { Movie } from "../models/movieModel.js";

const router = express.Router();

//Route for save movie
router.post('/', async (req,res)=>{
    try{
        if (
        !req.body.title ||
        !req.body.author ||
        !req.body.publishYear
        ){
            return res.status(400).send(
                {
                    message:"Send all required fields: title, author, publishYear"
                });
        }
        const newMovie = {
            title: req.body.title,
            author: req.body.author,
            publishYear:req.body.publishYear
        }
        const movie = await Movie.create(newMovie);
        return res.status(201).send(movie); 
    }
    catch (e) {
        console.log(e.message);
        res.status(500).send({message: e.message});
    };
});

//Route for getting all
router.get('/', async (req,res) =>{
    try{
        const movies = await Movie.find({});
        return res.status(200).json({
            count: movies.length,
            data: movies
        });
    } catch (e) {
        console.log(e.message);
        res.status(500).send({message: e.message});
    }
});

//Route for getting one movie
router.get('/:id', async (req,res) =>{
    try{
        const {id} = req.params;
        const movie = await Movie.findById(id);
        return res.status(200).json(movie);
    } catch (e) {
        console.log(e.message);
        res.status(500).send({message: e.message});
    }
});

//Route for updating (editing)
router.put('/:id', async (req,res)=>{
    try{
        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
            ){
                return res.status(400).send(
                    {
                        message:"Send all required fields: title, author, publishYear"
                    });
            }
        
        const {id} = req.params;
        const result = await Movie.findByIdAndUpdate(id, req.body);
        if(!result) {
            return res.status(400).json({message:"Movie does not exist"});
        }
        return res.status(200).send({message:"Movie is updated"}); 
    } catch (e) {
        console.log(e.message);
        res.status(500).send({message: e.message});
    }
});

//Route for deleting
router.delete('/:id', async (req,res)=>{
    try{
        const {id}=req.params;
        const result = await Movie.findByIdAndDelete(id);
        if(!result){
            return res.status(400).json({message:"Movie does not exist"});
        }
        return res.status(200).send({message:"Movie deleted"}); 
    } catch (e){
        console.log(e.message);
        res.status(500).send({message: e.message});
    }
});

export default router;