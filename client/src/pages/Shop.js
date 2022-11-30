import React, {useEffect, useState} from 'react'
import { fetchProductsByFilter, getProducstByCart } from '../functions/product'
import { useSelector, useDispatch } from 'react-redux'
// import Search from '../component/forms/Search'
import ProductCard from '../component/cards/ProductCard'
import {Menu, Slider, Checkbox} from 'antd'
import {DollarOutlined, DownSquareOutlined, StarOutlined} from '@ant-design/icons'
import { getCategories } from '../functions/category'
import Star from '../component/forms/Star'
import {getSubs} from '../functions/sub'

const {SubMenu , ItemGroup} = Menu



const Shop = () => {
    const [products, setProducts] = useState([])
    const [categories,setCategories] = useState([])
    const [price, setPrice] =  useState([0, 0])
    const [loading, setLoading] = useState(false)
    const [ok, setOk] = useState(false)
    const [subs, setSubs] = useState([])
    const[star, setStar] =useState(0)
    const [sub, setSub] = useState('')
    const [categoryIds, setCategoryIds] = useState([])
    const [brands, setBrands] = useState(['Apple', 'Samsung', 'Microsoft', 'Lenovo', 'Assus', 'Toshiba', "Hewlett Packard"])
    const [colors, setColors] = useState(['Black', 'Brown', 'Silver', 'White', 'Blue'])
    const [shipping, setShipping] = useState('')
    const [brand, setBrand] = useState('')
    const [color, setColor] = useState('')



    const { search } = useSelector((state) => ({...state}))
    const {text} = search
    let dispatch = useDispatch()

    useEffect(()=>{
        loadAllProducts()
        getCategories()
            .then((res) => setCategories(res.data))
        getSubs()
            .then((res) => {
                setSubs(res.data)
            })
    }, [])

//1.load products by default on page load 
    const loadAllProducts = () =>{
        getProducstByCart()
            .then(res => {
                setProducts(res.data)
                setLoading(false)
            })
    }
//2. load products on user search input
    useEffect(()=>{
        const delayed= setTimeout(()=>{
            fetchProducts({query: text})
            if(!text){
                loadAllProducts()
            }
        }, 300)
        return () => clearTimeout(delayed)
    }, [text])

    const fetchProducts = (arg) =>{
        fetchProductsByFilter(arg)
        .then(res => {
            setProducts(res.data)
        })
    }
//3.Load products based on price range
    useEffect(()=>{
        fetchProducts({price})
        
    },[ok])
const handleSlider = (value) =>{
    dispatch({
        type:"SEARCH_QUERY",
        payload:{text: ""}
    })
    setCategoryIds([])
    setPrice(value)
    setStar('')
    setSub('')
    setColor('')
    setBrand('')
    setShipping('')
    setTimeout(()=>{
        setOk(!ok)
    }, 300)
}

    //4.load products based on category
    //show categories in a list checkbox
    const showCategories = () => categories.map((c) => <div key={c._id}>
        <Checkbox key={c._id} onChange={handleCheck} className='pb-2 pl-4 pr-4' value={c._id} name="category" checked={categoryIds.includes(c._id)}>{c.name}</Checkbox>
        <br/>
    </div>)

    const handleCheck = (e) =>{
        dispatch({
            type:"SEARCH_QUERY",
            payload:{text: ""}
        })
        setPrice([0,0])
        setSub('')
        setStar('')
        setBrand('')
        setColor('')
        setShipping('')
        let inTheState = [...categoryIds]
        let justChecked = e.target.value
        let foundInTheState = inTheState.indexOf(justChecked) //true or -1 
        if(foundInTheState === -1){
            inTheState.push(justChecked)
        }else{
            inTheState.splice(foundInTheState, 1)
        }
        // console.log(inTheState)
        setCategoryIds(inTheState)
        fetchProducts({category: inTheState})
    }

    //5. show product by star rating
    const showStars = () =>(
        <div className='pr-4 pl-4 pb-4'>
            <Star starClick={handleStarClick} numberOfStars={5} />
            <Star starClick={handleStarClick} numberOfStars={4} />
            <Star starClick={handleStarClick} numberOfStars={3} />
            <Star starClick={handleStarClick} numberOfStars={2} />
            <Star starClick={handleStarClick} numberOfStars={1} />

        </div>
    )

    const handleStarClick = (num) =>{
        dispatch({
            type:"SEARCH_QUERY",
            payload:{text: ""}
        })
        setPrice([0,0])
        setSub('')
        setCategoryIds([])
        setBrand('')
        setColor('')
        setShipping('')
        setStar(num)
        fetchProducts({stars: num})

    }
//6.show products by sub category
    const showSubs = () =>subs.map((s) => <div key={s._id} onClick={()=>handleSub(s)} className="pl-1 m-1 mb-3 badge badge-light "
                style={{"backgroundColor":"lightgrey", "cursor":"pointer"}}
            >{s.name}
        </div>)
    const handleSub = sub =>{
        // console.log(sub)
        setSub(sub)
        dispatch({
            type:"SEARCH_QUERY",
            payload:{text: ""}
        })
        setBrand('')
        setPrice([0,0])
        setCategoryIds([])
        setStar('')
        setColor('')
        setShipping('')
        fetchProducts({sub})



    }
//7.brand

    const handleBrand = (e) => {
        setSub('')
        dispatch({
            type:"SEARCH_QUERY",
            payload:{text: ""}
        })
        setPrice([0,0])
        setCategoryIds([])
        setStar('')
        setColor('')
        setBrand(e.target.value)
        setShipping('')
        fetchProducts({brand: e.target.value})
    }

//8.color
    const handleColor = (e) =>{
        setSub('')
        dispatch({
            type:"SEARCH_QUERY",
            payload:{text: ""}
        })
        setPrice([0,0])
        setCategoryIds([])
        setStar('')
        setBrand("")
        setShipping('')
        setColor(e.target.value)
        fetchProducts({color: e.target.value})
    }
    //9.shipping
    const handleShipping = (e) =>{
        setSub('')
        dispatch({
            type:"SEARCH_QUERY",
            payload:{text: ""}
        })
        setPrice([0,0])
        setCategoryIds([])
        setStar('')
        setBrand("")
        setColor('')
        setShipping(e.target.value)
        fetchProducts({shipping: e.target.value})
    }
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-3'>
            <h4 className='mt-4'> Search/Filter</h4>
            <hr/>
            <Menu defaultOpenKeys = {['1', '2', '3', '4', '5', '6', '7']} mode="inline">
                {/* price */}
                <SubMenu key="1" title ={<span className='h6'><DollarOutlined/> <span>Price</span></span>}>
                    <div className=''>
                        <Slider 
                            className='ml-4 mr-4'
                            tipFormatter={(v) => `$${v}`}
                            range 
                            value={price}
                            onChange={handleSlider}
                            max = "4999"
                        />
                    </div>
                </SubMenu>
                {/* category */}
                <SubMenu key="2" title ={<span className='h6'><DownSquareOutlined/> <span>Categories</span></span>}>
                    <div className='mt-3 '>
                        {showCategories()}
                        
                    </div>
                </SubMenu>
                {/* stars */}

                <SubMenu key="3" title ={<span className='h6'><StarOutlined/><span>Rating</span></span>}>
                    <div className='mt-3'>
                        {showStars()}
                        
                    </div>
                </SubMenu>
                {/* subcategory */}
                <SubMenu key="4" title ={<span className='h6'><DownSquareOutlined/> <span>Subcategories</span></span>}>
                    <div className='mt-3 pl-3'>
                        {showSubs()}
                        
                    </div>
                </SubMenu>

                {/* brands */}
                <SubMenu key="5" title ={<span className='h6'><DownSquareOutlined/> <span>Brand</span></span>}>
                    <div className='mt-3 '>
                        {brands.map((b, index) => {
                            return(
                                <div key={index}>
                                    <Checkbox 
                                    key={index}
                                    onChange={handleBrand} 
                                    className='pb-2 pl-4 pr-4' 
                                    value={b} 
                                    name={b} 
                                    checked={b === brand}>
                                        {b}
                                    </Checkbox>
                                    <br/>
                                </div>
                            )
                        })}
                        
                    </div>
                </SubMenu>
                {/* colors */}
                <SubMenu key="6" title ={<span className='h6'><DownSquareOutlined/> <span>Color</span></span>}>
                    <div className='mt-3 '>
                        {colors.map((c, index) => {
                            return(
                                <div key={index}>
                                    <Checkbox 
                                    key={index}
                                    onChange={handleColor} 
                                    className='pb-2 pl-4 pr-4' 
                                    value={c} 
                                    name={c} 
                                    checked={c === color}>
                                        {c}
                                    </Checkbox>
                                    <br/>
                                </div>
                            )
                        })}
                        
                    </div>
                </SubMenu>
            
             {/* shipping */}
             <SubMenu key="7" title ={<span className='h6'><DownSquareOutlined/> <span>Shipping</span></span>}>
                    <div className='mt-3 '>
                        <Checkbox className='pn-2 pl-4 pr-4' onChange={handleShipping} value="Yes" checked={shipping === "Yes"}>
                            Yes 
                        </Checkbox>
                        <Checkbox className='pn-2 pl-4 pr-4' onChange={handleShipping} value="No" checked={shipping === "No"}>
                            No 
                        </Checkbox>
                    </div>
            </SubMenu>
        </Menu>




        </div>
        <div className='col-md-9'>
            {loading ? (
                <h4 className='text-danger'>Loading...</h4>
            ): (
                <React.Fragment>
                    <h4 className='text-danger mt-4'>Products</h4>
                    <div className='row'>
                        {products.map((product, index) =>{
                            return(
                                <div key={index} className="col-md-4">
                                    <ProductCard product={product}></ProductCard>
                                </div>
                            )
                        })}
                    </div>
                </React.Fragment>
                
            )}
        </div>
      </div>
    </div>
  )
}

export default Shop
