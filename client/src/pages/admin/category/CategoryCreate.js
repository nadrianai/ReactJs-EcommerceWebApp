import React, {useState, useEffect} from 'react'
import AdminNav from '../../../component/nav/AdminNav'
import {toast}  from 'react-toastify'
import { useSelector } from 'react-redux'
import { createCategory, getCategories, removeCategory } from '../../../functions/category'
import { Link } from 'react-router-dom'
import {EditOutlined, DeleteOutlined} from '@ant-design/icons'
import CategoryForm from '../../../component/forms/CategoryForm'
import LocalSearch from '../../../component/forms/LocalSearch'

const CategoryCreate = () => {
    const [name, setName] = useState('')
    const [categories, setCategories] = useState([])
    const [keyword, setKeyword] = useState('')

    let {user} = useSelector((state)=>({...state}))

    useEffect(()=>{
        loadCategories()
    }, [])


    const handleRemove = async (slug, name) =>{
        if(window.confirm(`Are you sure you want to delete ${name} category?`)){
            removeCategory(slug, user.token)
                .then(res=>{
                    toast.error(`${res.data.name} deleted succesfully!`)
                    setCategories(categories.filter(item => item.name !== name))
                })
                .catch(err=>{
                    toast.error("There was an error deleting this category!")

                })
        }
    }


    const  loadCategories = () =>{
        getCategories().then(c=>{
            setCategories(c.data)
        })
        .catch((err)=>{
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        createCategory({name}, user.token)
            .then(res =>{
                setName("")
                toast.success(`${res.data.name} category created!`)
                setCategories(categories => [...categories, res.data])
            })
            
            .catch((err)=>{
                console.log(err)
                toast.error("Category create failed!")
            })
    }

    

    const searched = (keyword) => (c) => c.name.toLowerCase().includes(keyword)



  return (
    <div className="container-fluid mt-5">
        <div className="row">
            <div className="col-md-2">
              <AdminNav></AdminNav>
            </div>
            <div className="col">
              <h4>Create category</h4>
              <CategoryForm handleSubmit={handleSubmit}
                            name ={name}
                            setName={setName}
              />
              
              <hr className='col-md-8'/>
              <LocalSearch keyword={keyword}
                            setKeyword={setKeyword}
              />
              {categories.filter(searched(keyword)).map((cat, index)=>{
                return (
                    
                    <div  key ={index} className='col-md-8 alert alert-secondary'>
                        <span >{`${index+1}. ${cat.name}`}</span>{`   `}
                         <span  className='ml-3 float-right' 
                                style={{"cursor":"pointer"}}
                                onClick={() => handleRemove(cat.slug, cat.name)}
                         
                            ><DeleteOutlined className='text-danger'/></span>{`   `}
                         <Link to={`/admin/category/${cat.slug}`}>
                            <span className=' float-right' ><EditOutlined className='text-warning'/></span>
                        </Link>
                    </div>
                )
              })}
            </div>
        </div>
    </div>

    )
}

export default CategoryCreate