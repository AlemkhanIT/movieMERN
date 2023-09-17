import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'
import { useSnackbar } from 'notistack'

const DeleteMovie = () => {
    const [loading, setLoading] = useState(false);
    const {id} = useParams();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const handleDelete = ()=>{
        setLoading(true);
        axios
            .delete(`https://movie-storage-ebim.onrender.com/movies/${id}`)
            .then((res)=>{
                console.log(res)
                setLoading(false);
                enqueueSnackbar('Movie deleted successfully', {variant: 'success'});
                navigate('/');
            })
            .catch((e)=>{
                setLoading(false);
                console.log(e);
                enqueueSnackbar('Error', {variant: 'error'});
            });
    };
  return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'>Delete the Movie</h1>
            {loading ?  <Spinner/> : 
            <div className='flex flex-col max-w-[620px] items-center border-2 border-sky-800 rounded-xl p-6 mx-auto'>
                <h3 className='text-2xl'>Are you sure You want to delete this movie?</h3>
                <button onClick={handleDelete} className='bg-red-600 text-white m-3 p-3'>Yes, I want to delete it</button>
            </div>}
        </div>
  )
}

export default DeleteMovie