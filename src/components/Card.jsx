import React, { useEffect, useState } from 'react'
import añadirCarrito from '../assets/añadirCarrito.png'
import quitarCarrito from '../assets/quitarCarrito.png'
import axios from 'axios'

const Card = ({ id, name, image, shoppingCartData, setRender }) => {

  async function createShoppingCart() {
    const info = {
      id: 223,
      products: [{
        id,
        name,
        image
      }],
      state: 'pending'
    }
    axios.post(`http://localhost:8080/shopping-cart`, info)
      .then(() => {
        setRender(prev => !prev)
      })

  }

  async function addProduct() {
    const idCarrito = 223
    const data = {
      id,
      name,
      image
    }

    const res = await axios.put(`http://localhost:8080/shopping-cart/${idCarrito}`, data)
    
    if (res.status === 201) {
      createShoppingCart()
    } else {
      setRender(prev => !prev)
    }

  }
  async function deleteProduct() {
    await axios.delete(`http://localhost:8080/shopping-cart/${shoppingCartData.id}/${id}`)
      .then(() => { setRender(prev => !prev) })
  }



  return (
    <span key={id} className='w-[16vw] h-[30vh] rounded-lg relative shadow-md shadow-black '>
      {shoppingCartData?.products.find(((product) => { return product.id == id })) ?
        <button onClick={() => deleteProduct()} className='absolute top-1 right-1'>
          <img className='w-[2vw] hover:w-[1.9vw]' src={quitarCarrito} alt="" />
        </button>
        :
        <button onClick={() => addProduct()} className='absolute top-1 right-1'>
          <img className='w-[2vw] hover:w-[1.9vw]' src={añadirCarrito} alt="" />
        </button>
      }

      <img className='w-full h-3/4 object-contain rounded-lg' src={image} alt="" />
      <span className='w-full h-1/4 flex justify-center items-center'>
        <h4 className='text-xl font-semibold'>{name}</h4>
      </span>
    </span>
  )
}

export default Card