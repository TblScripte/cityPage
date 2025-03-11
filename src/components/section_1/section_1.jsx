import React from 'react'

const Section_1 = ({name,description,img,reverse}) => {
  return (
    <div className={`flex mb-[60px] justify-between flex-wrap ${reverse ? "flex-row-reverse" : "flex-row"}`}>
        <div className='w-[50%]'>
            <h1 className='text-[#1178B2] text-[1.3rem] mb-[20px]'>{name}</h1>
            <p className='w-[85%]'>{description}</p>
            <button className='p-[15px_30px] mt-[25px] bg-[#07AF91] rounded-md text-white'>Узнать подробнее</button>
        </div>
        <img src={img} alt="" />
    </div>
  )
}

export default Section_1