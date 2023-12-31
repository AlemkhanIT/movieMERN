import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { useSnackbar } from 'notistack'


const EditMovie = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();
    const {enqueueSnackbar} = useSnackbar();

    useEffect(()=>{
        setLoading(true);
        axios.get(`https://movie-storage-ebim.onrender.com/movies/${id}`)
        .then((res)=>{
            setTitle(res.data.title);
            setAuthor(res.data.author);
            setPublishYear(res.data.publishYear);
            setLoading(false);
        }).catch((e)=>{
            setLoading(false);
            console.log(e);
            enqueueSnackbar('Error', {variant: 'error'});
        })
    }, []);
    const handleEdit = () => {
        const data = {
            title,
            author,
            publishYear
        }
        setLoading(true);
        axios
            .put(`http://localhost:5555/movies/${id}`, data)
            .then(()=>{
                setLoading(false);
                enqueueSnackbar('Movie updated successfully', {variant: 'success'});
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
            <h1 className='text-3xl my-4'>Edit the Movie</h1>
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
                <button className='bg-sky-800 text-white p-2' onClick={handleEdit}>
                    Save
                </button>
            </div>
        </div>
    )
}

export default EditMovie