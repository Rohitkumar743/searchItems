import React from 'react'

const ResultCard = ({item}) => {
  return (
    <div className='relative w-[18vw]  h-80 bg-white rounded-xl overflow-hidden '>
        <a target='blank' className='h-full' href={item.url}>
            {item.type == 'photo' ? <img className='h-full w-full object-cover object-center' src={item.src} alt="" /> : ""}
            {item.type == 'video'? <video className='h-full w-full object-cover object-center' autoPlay loop muted src={item.src} /> : ''}
            {item.type == 'gif' ? <img className='h-full w-full object-cover object-center' src={item.src} alt="" /> : ""}
        </a>
        <div id='bottom' className='absolute flex justify-between gap-3 items-center bottom-0 w-full px-4 py-5 text-white'>
            <h2 className='text-lg font-semibold capitalize h-14 overflow-hidden'>{item.title}</h2>
            <button className='bg-indigo-700 text-white active:scale-95 rounded px-3 py-1 font-medium cursor-pointer'>Save</button>
        </div>
    </div>
  )
}

export default ResultCard