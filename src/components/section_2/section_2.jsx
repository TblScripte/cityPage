import React from 'react'

const Section_2 = ({name,img,description}) => {
  return (
    <div className='p-[20px_10px] mb-[50px] w-[350px] shadow-md rounded-md text-center'>
        <img src={img} alt="" className='w-[30%] m-auto' />
        <h1 className='font-bold mb-[10px] mt-[10px]'>{name}</h1>
        <p className='w-[80%] m-auto'>{description}</p>
    </div>
  )
}

export default Section_2