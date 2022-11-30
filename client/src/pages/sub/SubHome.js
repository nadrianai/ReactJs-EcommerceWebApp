import React, {useState, useEffect} from 'react'
import ProductCard from '../../component/cards/ProductCard'
import { useParams } from 'react-router-dom'
import { getSub } from '../../functions/sub'

const SubHome = () => {
    const {slug} = useParams()
    const [sub, setSub] = useState('')
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    

    useEffect(()=>{
        setLoading(true)
        getSub(slug)
            .then(res => {
                console.log(res.data)
                setProducts(res.data.products)
                setSub(res.data.sub)
                setLoading(false)
            })
    }, [])
  return (
    <div className="container-fluid">
          {loading ?  (
            <h4 className='text-danger text-center p-3 mt-5 mb-5 display-4 jumbotron'>Loading...</h4>
          ) : (
            <>
            <h4 className='text-center p-3 mt-5 mb-5 display-4 jumbotron' style={{"backgroundColor":"rgb(237, 237, 237)"}}>
              {products.length} Products in {sub.name} subcategory
            </h4>
            <div className='row'>
              {products.map((prod, index) => {
                return (
                  <div className='col-md-4' key={index} >
                    <ProductCard product={prod}></ProductCard>
                  </div>
                )
              })}
            </div>

            </>
          )}
    </div>
  )
}

export default SubHome
