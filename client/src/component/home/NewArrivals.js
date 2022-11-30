import React, {useEffect, useState} from 'react'
import ProductCard from '../cards/ProductCard'
import { getProducts, getProductsCount} from '../../functions/product'
import {Pagination} from 'antd'
import UserNav from '../nav/UserNav'


const NewArrivals = () => {

  const [products, setProducts] = useState([])
  const [ loading, setLoading ] = useState([])
  const [page, setPage] = useState(1)
  const [productsCount, setProductsCount] = useState(0)
  const total = parseInt((productsCount / 3) * 10)

  //sort, order, limit
  const loadAllProducts = () =>{
    setLoading(true)
    getProducts('createdAt', 'desc', page)
      .then(res => {
        setProducts(res.data)
        setLoading(false)
      })
  }

  useEffect(() =>{
    loadAllProducts()
  }, [page])

  useEffect(()=>{
    getProductsCount()
      .then((res)=>{
        setProductsCount(res.data)
      })
  },[])

  return (
    
    <div>
    <div className="container">
      <div className="row">
        {products.map((product, index) =>{
          return (
            <div className='col-md-4' key= {index}>
                <ProductCard product={product}/>
            </div>
          )
        })}
      </div>
    </div>
    <div className="row">
      <nav className="col-md-4 offset-md-4 text-center pt-2 p-5">
          <Pagination 
            defaultCurrent={page} 
            total={total}     
            onChange = { (value) => setPage(value)}


          />
      </nav>
    </div>
    
    
    </div>
  )
}

export default NewArrivals