import { Link } from 'react-router-dom'
import {AiOutlineEdit} from "react-icons/ai"
import {BsInfoCircle} from "react-icons/bs"
import {BiUserCircle} from "react-icons/bi"
import {MdOutlineDelete} from "react-icons/md"
import {PiBookOpenText} from "react-icons/pi"
import SingleCard from './SingleCard'


const Card = ({movies}) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {movies.map((item,index)=>(
            <SingleCard key={item._id} movie={item} index={index}/>
        ))}
    </div>
  )
}

export default Card