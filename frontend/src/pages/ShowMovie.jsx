import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'

const ShowMovie = () => {
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(false);
    const {id} = useParams();
    useEffect(()=>{
        setLoading(true);
        axios
            .get(`https://movie-storage-ebim.onrender.com/movies/${id}`)
            .then((res)=>{
                setMovie(res.data);
                setLoading(false);
            })
            .catch((e)=>{
                console.log(e.message);
                setLoading(false);
            });
    },[]);
    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'>Show Movie</h1>
            {loading ? (
                <Spinner />
            ) : (
                <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>ID</span>
                        <span>{movie._id}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Title</span>
                        <span>{movie.title}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Author</span>
                        <span>{movie.author}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Publish Date</span>
                        <span>{movie.publishYear}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Created Time</span>
                        <span>{new Date(movie.createdAt).toString()}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
                        <span>{new Date(movie.updatedAt).toString()}</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ShowMovie