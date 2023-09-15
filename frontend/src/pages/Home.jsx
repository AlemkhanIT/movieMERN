import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import Spinner from '../components/Spinner'
import {AiOutlineEdit} from "react-icons/ai"
import {BsInfoCircle} from "react-icons/bs"
import {MdOutlineAddBox, MdOutlineDelete} from "react-icons/md"
import Table from '../components/home/Table'
import Card from '../components/home/Card'

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showCard, setShowCard] = useState(false);
    useEffect(()=>{
        setLoading(true);
        axios
            .get('http://localhost:5555/movies')
            .then((res)=>{
                console.log(res.data.data)
                setMovies(res.data.data);
                setLoading(false);
            })
            .catch((e)=>{
                console.log(e);
                setLoading(false);
            })
    },[])
    return (
        <div className='p-4'>
            <div className='flex justify-center items-center gap-x-3'>
                <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg' onClick={()=>setShowCard(false)}>
                    Table
                </button>
                <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg' onClick={()=>setShowCard(true)}>
                    Cards
                </button>
            </div>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl my-8'>Movies List</h1>
                <Link to='/movies/create'>
                    <MdOutlineAddBox className='text-sky-800 text-4xl'/>
                </Link>
            </div>
            {loading ? (<Spinner/>) : 
                showCard ? (<Card movies={movies}/>) : (<Table movies={movies}/>)}
        </div>
    )
}

export default Home