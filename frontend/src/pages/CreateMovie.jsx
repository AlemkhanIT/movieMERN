import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { useSnackbar } from 'notistack'

const CreateMovie = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const handleSave = () => {
        const data = {
            title,
            author,
            publishYear
        }
        setLoading(true);
        axios
            .post('http://localhost:5555/movies', data)
            .then(()=>{
                setLoading(false);
                enqueueSnackbar('Movie created successfully', {variant: 'success'});
                navigate('/');
            })
            .catch((e)=>{
                setLoading(false);
                console.log(e);
                enqueueSnackbar('Error', {variant: 'error'});
            });
    }

    return (
        <div className='p-4'>
            <BackButton/>
            <h1 className='text-3xl my-4'>Add the Movie</h1>
            {loading ? <Spinner/> : ''}
            <div className='flex flex-col p-4 max-w-[600px] border-2 border-sky-400 mx-auto'>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Title</label>
                    <input 
                    type="text" 
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    className="border-2 border-gray-500 p-2 w-full"/>
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Author</label>
                    <input 
                    type="text" 
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                    className="border-2 border-gray-500 p-2 w-full"/>
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Publish Date</label>
                    <input 
                    type="text" 
                    value={publishYear}
                    onChange={(e)=>setPublishYear(e.target.value)}
                    className="border-2 border-gray-500 p-2  w-full"/>
                </div>
                <button className='bg-sky-800 text-white p-2' onClick={handleSave}>
                    Save
                </button>
            </div>
        </div>
    )
}

export default CreateMovie