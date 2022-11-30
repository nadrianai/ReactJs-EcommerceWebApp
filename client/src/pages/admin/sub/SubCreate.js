import React, {useState, useEffect} from 'react'
import AdminNav from '../../../component/nav/AdminNav'
import {toast}  from 'react-toastify'
import { useSelector } from 'react-redux'
import { getCategories } from '../../../functions/category'
import { Link } from 'react-router-dom'
import {EditOutlined, DeleteOutlined} from '@ant-design/icons'
import CategoryForm from '../../../component/forms/CategoryForm'
import LocalSearch from '../../../component/forms/LocalSearch'
import { createSub, getSubs, removeSub } from '../../../functions/sub'

const SubCreate = () => {
    const [name, setName] = useState('')
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState('')
    const [subs, setSubs] = useState([])

    const [keyword, setKeyword] = useState('')

    let {user} = useSelector((state)=>({...state}))

    useEffect(()=>{
        loadCategories()
        loadSubs()
    }, [])


    const handleRemove = async (slug, name) =>{
        if(window.confirm(`Are you sure you want to delete ${name} subcategory?`)){
            removeSub(slug, user.token)
                .then(res=>{
                    toast.error(`${res.data.name} deleted succesfully!`)
                    setSubs(subs.filter(item => item.name !== name))
                })
                .catch(err=>{
                    toast.error("There was an error deleting this subcategory!")

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

    const  loadSubs = () =>{
      getSubs().then(s=>{
          setSubs(s.data)
      })
      .catch((err)=>{
      })
  }

    const handleSubmit = (e) =>{
        e.preventDefault()
        createSub({name, parent: category}, user.token)
            .then(res =>{
                setName("")
                toast.success(`${res.data.name} subcategory created!`)
                setSubs(subs => [...subs, res.data])
            })
            
            .catch((err)=>{
                console.log(err)
                toast.error("Subcategory create failed!")
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
              <h4>Create Subcategory</h4>

              <div className="form-group col-md-8">
                <label htmlFor="">Parent Category </label>
                <br/>
                <select name="category" onChange ={e => setCategory(e.target.value)}>
                  <option value="" > Select</option>
                  {categories.length > 0 && categories.map((cat, index) =>{
                    return (
                      <option key={index} value = {cat._id}>{cat.name}</option>
                    )
                  })}
                </select>

              </div>
              <CategoryForm handleSubmit={handleSubmit}
                            name ={name}
                            setName={setName}
              />
              
              <hr className='col-md-8'/>
              <LocalSearch keyword={keyword}
                            setKeyword={setKeyword}
              />
              {subs.filter(searched(keyword)).map((sub, index)=>{
                return (
                    <div  key ={index} className='col-md-8 alert alert-secondary'>
                        <span >{`${index+1}. ${sub.name}`}</span>{`   `}
                         <span  className='ml-3 float-right' 
                                style={{"cursor":"pointer"}}
                                onClick={() => handleRemove(sub.slug, sub.name)}
                         
                            ><DeleteOutlined className='text-danger'/></span>{`   `}
                         <Link to={`/admin/sub/${sub.slug}`}>
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

export default SubCreate