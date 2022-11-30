import React, {useState, useEffect} from 'react'
import AdminNav from '../../../component/nav/AdminNav'
import {toast}  from 'react-toastify'
import { useSelector } from 'react-redux'
import { getCategory, updateCategory } from '../../../functions/category'
import { useHistory, useParams } from 'react-router-dom'
import CategoryForm from '../../../component/forms/CategoryForm'

const CategoryUpdate = () => {
    const [name, setName] = useState('')

    let {user} = useSelector((state)=>({...state}))
    let history = useHistory()
    let {slug} = useParams()

    useEffect(()=>{
        loadCategory()
    }, [])


    const  loadCategory = () =>{
       getCategory(slug)
        .then(res =>{
            setName(res.data.name)
        })
        .catch(err =>{
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        updateCategory(slug, {name}, user.token)
            .then(res =>{
                toast.success("Category updated!")
                history.push("/admin/category")
            })
            .catch(err =>{
                toast.error("There was an error updating this category!")
            })
        
    }

  return (
    <div className="container-fluid mt-5">
        <div className="row">
            <div className="col-md-2">
              <AdminNav></AdminNav>
            </div>
            <div className="col">
              <h4>Update category</h4>
              <CategoryForm handleSubmit={handleSubmit}
                            name ={name}
                            setName={setName}/>
              <hr className='col-md-8'/>
            </div>
        </div>
    </div>

    )
}

export default CategoryUpdate