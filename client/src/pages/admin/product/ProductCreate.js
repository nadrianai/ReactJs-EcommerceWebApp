import React, {useState, useEffect} from 'react'
import AdminNav from '../../../component/nav/AdminNav'
import {toast}  from 'react-toastify'
import { useSelector } from 'react-redux'
import { createProduct } from '../../../functions/product'
import { getCategories, getCategorySubs } from '../../../functions/category'
import {Select} from 'antd'
import FileUpload from '../../../component/forms/FileUpload'


const {Option} = Select 

const ProductCreate = () => {

  useEffect(()=>{
    loadCategories()
  }, [])


  const {user} = useSelector((state)=> ({...state}))

  const initialState = {
    title:'',
    description:'',
    price:'',
    category:'',
    categories:[],
    subs:[],
    shipping:'',
    quantity:'',
    images:[],
    colors:['Black', 'Brown', 'Silver', 'White', 'Blue'],
    brands:['Apple', 'Samsung', 'Microsoft', 'Lenovo', 'Assus', 'Toshiba', "Hewlett Packard"],
    color:'',
    brand:''
    }

  const [values, setValues] = useState(initialState)
  const [subOptions, setSubOptions] = useState([])
  const [showSub, setShowSub] = useState(false)


  const {title, description, price, category,categories, subs, shipping, quantity, images, colors, brands, color, brand} = values

  const loadCategories = () =>{
    getCategories()
    .then((c)=>  {
      setValues({...values, categories: c.data})
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    createProduct(values, user.token)
      .then(res=>{
        toast.success(`${values.title} succesfully added to database!`)
        window.location.reload()
      })
      .catch(err=>{
        console.log(err)
        toast.error(err.response.data.err)
      })
  }
 
  const handleChange = (e) =>{
    setValues({...values, [e.target.name]: e.target.value})
  }

  const handleCategoryChange = (e) =>{
    e.preventDefault()
    setValues({...values, subs:[], category:e.target.value})
    getCategorySubs(e.target.value)
      .then(res => {
        // console.log(res.data)
        setSubOptions(res.data)
      })
  }

  return (
    <div className='container-fluid'>
        <div className="row">
            <div className="col-md-2">
                <AdminNav/>
            </div>
                <div className="col-md-8">
                    <h4>  Poduct Create </h4>
                    <hr/>
                    <div className="p-3">
                      <FileUpload values= {values} setValues={setValues}/>
                    </div>
                    <hr/>
                    <form onSubmit = {handleSubmit}>
                      <div className="form-group">
                        <label>Title</label>
                        <input  type="text"  
                                name="title" 
                                className='form-control' 
                                value = {title} 
                                onChange= {handleChange}
                                required
                                />
                      </div>

                      <div className="form-group">
                        <label>Description</label>
                        <input  type="text"  
                                name="description" 
                                className='form-control' 
                                value = {description} 
                                onChange= {handleChange}
                                required
                                />
                      </div>

                      <div className="form-group">
                        <label>Price</label>
                        <input  type="number"  
                                name="price" 
                                className='form-control' 
                                value = {price} 
                                onChange= {handleChange}
                                required
                                />
                        </div>

                        <div className="form-group">
                          <label>Shipping</label>
                          <select name="shipping" className='form-control' onChange = {handleChange} required>
                            <option value="Please Select">Please Select</option>
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                          </select>
                        </div>

                        <div className="form-group">
                          <label>Quantity</label>
                          <input  type="number"  
                                  name="quantity" 
                                  className='form-control' 
                                  value = {quantity} 
                                  onChange= {handleChange}
                                  required
                                  />
                        </div>
                        
                        <div className="form-group">
                          <label>Color</label>
                          <select name="color" className='form-control' onChange = {handleChange} required>
                            <option value="Please Select">Please Select</option>
                            {
                              colors.map((color, index) => {
                                return (
                                  <option value={color} key={index} >{color}</option>
                                )
                              })
                            }
                          </select>
                        </div>

                        <div className="form-group">
                          <label>Brand</label>
                          <select name="brand" className='form-control' onChange = {handleChange} required>
                            <option value="Please Select">Please Select</option>
                            {
                              brands.map((brand, index) => {
                                return (
                                  <option value={brand} key={index} >{brand}</option>
                                )
                              })
                            }
                          </select>
                        </div>
                           
                        <div className="form-group">
                          <label>Category</label>
                          <select name="category" className='form-control' onChange = {handleCategoryChange} required>
                            <option value="Please Select">Please Select</option>

                            {categories.map((cat, index)=>{
                              return (
                                <option value={cat._id} key={index} >{cat.name}</option>
                              )
                            })}

                          </select>
                        </div>

                          {subOptions.length > 0  && 
                            <div className="form-group">
                              <label>Sub Categories</label>
                              <Select mode="multiple" 
                                      style={{width:'100%'}} 
                                      placeholder="Please Select" 
                                      value= {subs}
                                      onChange={(value) => setValues({...values, subs: value})}>
                                  {subOptions.map((cat, index)=>{
                                  return (
                                    <Option value={cat._id} key={index} >{cat.name}</Option>
                                  )
                                })}

                              </Select>
                        
                            </div>}
                        

                        <button className="btn btn-outline-info">
                            Save
                        </button>





                    </form>
                </div>
        </div>
    </div>
  )
}

export default ProductCreate