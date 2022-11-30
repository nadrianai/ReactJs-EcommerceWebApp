import React, {useEffect, useState} from 'react'
import { getProducstByCart, removeProduct } from '../../../functions/product'
import AdminNav from '../../../component/nav/AdminNav'
import AdminProductCard from '../../../component/cards/AdminProductCard'
import { useSelector } from 'react-redux'
import {toast} from 'react-toastify'

const AllProducts = () => {

    let {user} = useSelector((state)=>({...state}))

  const [products, setProducts] = useState([])

  useEffect(()=>{
    loadAllProducts()
  }, [])


  const loadAllProducts = () =>{
    getProducstByCart(100)
    .then(res=>{
      setProducts(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  }

  const handleRemove = (slug) =>{
    let answer = window.confirm('Delete?')
    if(answer){
        removeProduct(slug, user.token )
            .then(res => {
                loadAllProducts()
            })
            .catch(err => {
                toast.error(err.response.data)
                console.log(err)
            })
    }
}

  return (
    <React.Fragment>
      <div className="container-fluid mt-5">
        <div className="row">
            <div className="col-md-2">
              <AdminNav />
            </div>
            <div className="col">

            <h4>
              All Products 
            </h4>
            <div className="col">
              <div className="row">
                {
                  products.map((prod, index ) =>{
                    return (
                      <div className="col-md-4 p-b-2 mb-3 mt-3" key={index}>
                        <AdminProductCard product={prod} handleRemove = {handleRemove} />
                      </div>

                    )
                  })
                }
              </div>
              
            </div>
            

            
            </div>
        </div>
    </div>

    </React.Fragment>
    
  )
}

export default AllProducts