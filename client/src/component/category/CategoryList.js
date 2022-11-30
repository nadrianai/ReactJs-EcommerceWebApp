import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { getCategories } from '../../functions/category'

const CategoryList = () => {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(()=> {
        setLoading(true)
        getCategories()
            .then(c=>{
                setCategories(c.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
  return (
    <>
    <h4 className="text-center p-3 mt-5 mb-5 display-3 jumbotron mr-0" style={{"backgroundColor":"#EDEDED"}}>
            Categories
        </h4> 
    <div className="container pb-5">
    
        <div className="row">
                   
        {loading ? (
                <h4 className="text-danger text-center">Loading...</h4>
            ):(
            <>
            {
                categories.map((cat, index) =>{
                    return(
                        <div key ={index} className="col-md-2 btn btn-outlined btn-lg btn-block btn-raise ml-3 mr-3 mb-3">
                            <Link to={`/category/${cat.slug}`}>{cat.name} </Link>
                        </div>
                    )
                })
            }
            </>
            )}
        </div>
    </div>

    </>
    
  )
}

export default CategoryList
