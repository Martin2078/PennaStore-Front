import React from 'react'
import ShoppingCartCard from './ShoppingCartCard';

const ShoppingCart = ({setOpen,shoppingCartData}) => {
    

  return (
    <div className='w-[100vw] h-[100vh] bg-[#d3d3d362] flex justify-end absolute z-10'>
              <div className='h-full w-1/4 bg-white flex flex-col'>
                <span className='w-full h-[5vh] flex items-center justify-end px-5'>
                  <button className='text-4xl font-bold' onClick={()=>setOpen(false)}>x</button>
                </span>
                <span className='w-full h-[85vh] flex flex-col items-center py-10 px-5'>
                    {shoppingCartData?.products && shoppingCartData.products.map((product)=>{
                      return  <ShoppingCartCard data={product}/>
                    })}
                    
                </span>
                <span className='w-full h-[10vh]'>

                </span>
              </div>
      </div>
  )
}

export default ShoppingCart