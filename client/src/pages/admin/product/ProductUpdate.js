import React, {useState, useEffect} from 'react'
import AdminNav from '../../../component/nav/AdminNav'
import {toast}  from 'react-toastify'
import { useSelector} from 'react-redux'
import {Select} from 'antd'
import { readProduct, updateProduct } from '../../../functions/product'
import {useParams} from 'react-router'
import { getCategories, getCategorySubs } from '../../../functions/category'
import FileUpload from '../../../component/forms/FileUpload'
import { useHistory } from 'react-router'



const {Option} = Select 

const ProductUpdate = () => {
    
    useEffect(()=>{

        readProductPage(slug.slug)  
        loadCategories()

    }, [])

    const initialState = {
        title:'',
        description:'',
        price:'',
        category:[],
        subs:[],
        shipping:'',
        quantity:'',
        images:[],
        colors:['Black', 'Brown', 'Silver', 'White', 'Blue'],
        brands:['Apple', 'Samsung', 'Microsoft', 'Lenovo', 'Assus'], 
        color:'',
        brand:''
        }
    let slug = useParams()
    let history = useHistory()

    const [values, setValues] = useState(initialState)
    const [categories, setCategories] =  useState([])
    const [subOptions, setSubOptions] = useState([])
    const [arrayOfSubs, setArrayOfSubIds] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("")



    const {title, description, price ,category, subs, shipping, quantity, images, colors, brands, color, brand} = values

    const {user} = useSelector((state)=> ({...state}))


    const handleCategoryChange = (e) =>{
        e.preventDefault()
        setValues({...values, subs:[], category:e.target.value})
        setSelectedCategory(e.target.value)
        getCategorySubs(e.target.value)
          .then(res => {
            setSubOptions(res.data)
          })

          if(values.category === e.target.value){

            readProductPage()
        }          

            setArrayOfSubIds([])
      }

    const readProductPage = (slug) =>{
        readProduct(slug)
            .then(res => {
                //1 load single product
                setValues({...values, ...res.data})
                //2 load single product category subs
                getCategorySubs(res.data.category)
                    .then(p =>{
                        setSubOptions(p.data)
                    })
                //3 prepare array of sub ids to show as default subs values in antd design select
                let arr = []
                res.data.subs.map(s =>{
                        arr.push(s)
                })
                setArrayOfSubIds(() => arr)
            })
            .catch(err =>{
                console.log(err)
            })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        values.subs = arrayOfSubs
        values.category = selectedCategory ? selectedCategory : values.category
        updateProduct(slug.slug, values, user.token)
            .then(res => {
                history.push('/admin/products')
            })
            .catch(err => {
                console.log(err)
                toast.error(err.message)
            })
        
    }

    const handleChange = (e) =>{
        setValues({...values, [e.target.name]: e.target.value})
    }
 
    const loadCategories = () =>{
        getCategories()
        .then((c)=>  {
          setCategories(c.data)
        })
      }

   

  return (
    <div className='container-fluid'>
        <div className="row">
            <div className="col-md-2">
                <AdminNav/>
            </div>
            <div className="col-md-8">
            <div className="col-md-8">
                    <h4>  Poduct Update </h4>
                    <hr/>
                    <div className="p-3">
                      <FileUpload values= {values} setValues={setValues}/>
                    </div>
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
                          <select  value={shipping} name="shipping" className='form-control' onChange = {handleChange} required>
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
                          <select value={color} name="color" className='form-control' onChange = {handleChange} required>
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
                          <select value={brand} name="brand" className='form-control' onChange = {handleChange} required>
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
                            {/* <option >{category ? category.name : "Please Select"}</option> */}

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
                                      value= {arrayOfSubs}
                                      onChange={(value) => setArrayOfSubIds(value)}>
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
    </div>
  )
}

export default ProductUpdate