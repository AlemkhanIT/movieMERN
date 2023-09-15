import React from 'react'

const Spinner = () => {
  return (
    <div className='flex justify-center items-center h-full mx-auto my-auto'>
        <div className='animate-ping w-16 h-16 rounded-full bg-sky-600'></div>
    </div>
  )
}

export default Spinner