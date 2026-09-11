import React from 'react'

const Card = (props) => {

  return (
    <div>
      <a href={props.elem.url} target='_blank' rel='noopener noreferrer'>
        <div className='h-64 w-64 overflow-hidden rounded-xl bg-zinc-800'>
          <img className='h-full w-full object-cover' src={props.elem.download_url} alt={props.elem.author} />
        </div>
        <h2 className='font-bold text-lg mt-2 text-center text-gray-200 truncate max-w-[256px]'>{props.elem.author}</h2>
      </a>
    </div>
  )
}

export default Card