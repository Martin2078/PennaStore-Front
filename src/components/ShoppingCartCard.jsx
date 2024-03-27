import React from 'react'

const ShoppingCartCard = ({data}) => {
  return (
    <div className='w-full h-[10vh] rounded-lg shadow-lg flex items-center justify-between'>
        <span className='w-1/3 h-full p-1'>
        <img className='h-full' src={data.image} alt="" />
        </span>
        <span className='w-2/3 h-full flex items-center justify-center'>
            <p className='text-xl font-bold'>{data.name}</p>
        </span>
    </div>
  )
}

export default ShoppingCartCard