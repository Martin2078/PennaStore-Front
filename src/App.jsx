import { useEffect, useState } from 'react'
import Card from './components/Card.jsx'
import carrito from './assets/carrito.png'
import axios from 'axios'
import ShoppingCart from './components/ShoppingCart.jsx'
function App() {
  const [products,setProducts]=useState([])
  const [page,setPage]=useState(1)
  const [open,setOpen]=useState(false)
  const [render,setRender]=useState(false)
  const [shoppingCartData,setShoppingCartData]=useState()

  async function getProducts() {
   const res= await axios.get(`http://localhost:8080/getProducts?page=${page}`)
   setProducts(res.data.paginatedProducts)
  }
  async function getShoppingCart() {
    const res= await axios.get(`http://localhost:8080/shopping-cart`)
    setShoppingCartData(res.data.shoppingCart)
   
   }
  
   
   useEffect(()=>{
     getProducts()
    },[page])
    
    useEffect(()=>{
      getShoppingCart()
    },[render])


  return (
    <div className='w-screen min-h-screen flex flex-col'>
     {open && <ShoppingCart setOpen={setOpen} shoppingCartData={shoppingCartData}/>}
     <header className='w-full h-[10vh] border-2 flex justify-between items-center px-10'>
        <h1 className='text-4xl font-bold'>Penna Store</h1>
        <button onClick={()=>setOpen(true)} className='w-[10vw] h-[5vh] rounded-2xl shadow-xl hover:shadow-none p-1 border flex items-center justify-center gap-3'>
            <p>{shoppingCartData?.products ? shoppingCartData.products.length : 0}</p>
            <img className='w-[2vw]' src={carrito} alt="" />
        </button>
     </header>
     <div  className='w-screen min-h-[80vh] flex flex-wrap justify-center items-start gap-x-10 p-10'>
     {products && products.map((product)=>{
      return <Card shoppingCartData={shoppingCartData} id={product.id} name={product.name} image={product.image} setRender={setRender} />
     })}
     </div>

     <div className='w-full h-[10vh] flex items-center justify-center'>
        <span className='w-1/6 h-1/3 rounded-lg border shadow-lg shadow-[#666] flex items-center justify-center gap-10'>
            <button onClick={()=>{page!=1 && setPage(1)}} className={`text-xl font-bold  ${page!=1 ? 'hover:text-blue-600' : 'text-blue-600' }`}>1</button>
            <button onClick={()=>{page!=2 && setPage(2)}} className={`text-xl font-bold ${page!=2 ? 'hover:text-blue-600' : 'text-blue-600' }`}>2</button>
        </span>
     </div>
    </div>

  )
}

export default App
