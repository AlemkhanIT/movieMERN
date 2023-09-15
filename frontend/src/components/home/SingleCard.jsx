import { Link } from 'react-router-dom'
import {AiOutlineEdit} from "react-icons/ai"
import {BsInfoCircle} from "react-icons/bs"
import {BiUserCircle} from "react-icons/bi"
import {MdOutlineDelete} from "react-icons/md"
import {PiBookOpenText} from "react-icons/pi"

const SingleCard = ({movie, index}) => {
  return (
    <div
            key={movie._id}    
            className='border-2 rounded-lg border-gray-500 px-4 py-2 m-4 hover:shadow-xl relative'>
                <h2 className='absolute top-2 right-2 rounded-lg bg-red-200 px-4 py-1'>{movie.publishYear}</h2>
                <h4 className='my-2 text-gray-500'>{index+1}</h4>
                <div className='flex justify-start items-center gap-x-2'>
                    <PiBookOpenText className='text-red-400 text-2xl'/>
                    <h2 className='my-1'>{movie.title}</h2>
                </div>
                <div className='flex justify-start items-center gap-x-2'>
                    <BiUserCircle className='text-red-400 text-2xl'/>
                    <h2 className='my-1'>{movie.author}</h2>
                </div>
                <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
                    <Link to={`/movies/details/${movie._id}`}>
                        <BsInfoCircle className='text-2xl text-green-800 hover:text-black' />
                    </Link>
                    <Link to={`/movies/edit/${movie._id}`}>
                        <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
                    </Link>
                    <Link to={`/movies/delete/${movie._id}`}>
                        <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
                    </Link>
                </div>
            </div>
  )
}

export default SingleCard