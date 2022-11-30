import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router'
import {getRelated, productStar, readProduct} from '../functions/product'
import {Card, Tabs, Tooltip} from 'antd'
import { Link } from 'react-router-dom'
import {HeartOutlined, ShoppingCartOutlined, StarOutlined} from '@ant-design/icons'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import laptop from '../images/eceeee4c021a62c1877e22203056558d.png'
import { findById } from '../functions/category';
import { getSubById } from '../functions/sub'
import slugify from 'react-slugify'
import StarRatings from 'react-star-ratings'
import RatingModal from '../component/modal/RatingModal'
import { useSelector } from 'react-redux'
import { showAverage } from '../functions/rating'
import ProductCard from '../component/cards/ProductCard'
import  _ from 'lodash'
import { useDispatch} from 'react-redux'
import { addToWishlist } from '../functions/user'
import { toast } from 'react-toastify'


const {Meta} = Card
const {TabPane} = Tabs

const Product = () => {
    const [product, setProduct] = useState()
    const [category, setCategory] = useState()
    const [subs, setSubs] = useState([])
    const [star, setStar] = useState(0)
    const [relatedProds, setRelated] = useState([])

    const [tooltip, setTooltip] = useState('Click to add')

    const {slug} = useParams()
    const dispatch =  useDispatch()
    const {user} = useSelector((state) => ({...state}))

    const handleAddToCart = () =>{
        //create cart array
        let cart = []
        if(typeof window !== "undefined"){
            //if cart is in localStorage, GET it
            if(localStorage.getItem('cart')){
                cart = JSON.parse(localStorage.getItem('cart'))  //converts to JSON
            }
            //push new product to cart
            cart.push({
                ...product, 
                count:1
            })
            //remove duplicates
            let unique = _.uniqWith(cart, _.isEqual)
            //save to local storage
            localStorage.setItem('cart', JSON.stringify(unique)) //converts to string
            // console.log(unique)
            //show tooltip
            setTooltip("Added")
            //add to redux state
            dispatch({
                type:"ADD_TO_CART",
                payload: unique
            })
             //show cart items in side drawer
             dispatch({
                type:"SET_VISIBLE",
                payload: true
            })
        }
    
    }

    useEffect(()=>{
        loadSingleProduct()
    }, [slug])

    useEffect(()=>{
        if(!product){
            console.log("Waiting...")
        }else{
            loadCategoryById()
            loadSubsById()
            
    }
    }, [product])

    useEffect(()=>{

        if(user ){
            if(product){
                if(product.ratings){
                    let productRatings = product.ratings
                    let userIdToString = user._id.toString()


                    let existingRatingObject = productRatings.find(
                        (ele)=>ele.postedBy.toString() === userIdToString
                        )  
                    if(existingRatingObject !== undefined){
                        setStar(existingRatingObject.star)

                    }
                }
            }
            
        }
                

        
       
        
    }, [user, product])

    const loadSingleProduct = () => {
        readProduct(slug).
            then((res) =>{
                setProduct(res.data)
                getRelated(res.data._id)
                    .then(res => {
                        setRelated(res.data)
                    })
                    .catch(err =>{
                        console.log(err)
                    })
                
            })
            .catch(err => {
                console.log(err)
            })
    }

    const loadCategoryById = () =>{
        findById(product.category)
            .then(res=> {
                setCategory(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    let arr  = []
    

    const loadSubsById = () =>{
       product.subs.map((sub,index) => {
        getSubById(sub)
            .then((res) => {
                
                const slugVar = slugify(res.data)
                let subObj = {
                    "slug":slugVar,
                    "name":res.data
                }
                arr.push(subObj)

            })
            .then(()=>{
                setSubs(arr)
            })
            .catch(err => {
                console.log(err)
            })
       })

    }


    const onStartClick = (newRating, name) =>{
        setStar(newRating)
        if(product){
            productStar(product._id, newRating, user.token)
            .then(res => {
                // console.log(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
        }
        // console.log(newRating, star)
        
    }

    const handleAddToWishlist = (e) =>{
        e.preventDefault()
        addToWishlist(product._id, user.token) 
            .then(res =>{
                toast.success("Added to wishlist!")
                
            })
    }


  return (
    <>
    <div className='product-wrapper pt-5 pb-5'>
    <>       
        <div className="col-md-7 float-left" >
            {!product ?  (
                <h4 className='text-danger'>Loading...</h4>
            ): (
                <>
                    {
                        product.images.length > 0 ? (
                            <div>
                            <Carousel 
                                showArrows={true} 
                                autoPlay 
                                infiniteLoop
                                
                                
                                >
                                {product.images.map((img, index)=>{
                                return (
                                    <div key={index}>
                                        <img src={img.url}
                                            style={{"objectFit":"contain"}}
                                        ></img>
                                    </div>
                                    
                                )
                                
                                })}
                            </Carousel>
                            <Tabs type="card">
                                    <TabPane tab="Description" key="1" >
                                        {product.description && product.description}
                                    </TabPane>
                                    <TabPane tab="More" key="2" >
                                        Feel free to reach customer service for more info about this product
                                    </TabPane>
                            </Tabs>
                            
                            </div>
                        ): (
                            <div>
                            <Card cover ={
                                <img    src={laptop} 
                                        style={{"height": "450px", "objectFit":"contain"}}
                                        className="mb-3"
                                />
                            }
                            ></Card>
                            <Tabs type="card">
                                    <TabPane tab="Description" key="1" >
                                        {product.description && product.description}
                                    </TabPane>
                                    <TabPane tab="More" key="2" >
                                        Feel free to reach customer service for more info about this product
                                    </TabPane>
                            </Tabs>
                            
                            </div>
                        )
                    }
        

                
                </>
            )}
            
        </div>
        <div className="col-md-5 float-right">
            <Card  
            actions = {[
                <Tooltip title={tooltip}  >
                    <a>     
                        <ShoppingCartOutlined onClick={handleAddToCart}>className= 'text-succes' ></ShoppingCartOutlined>
                        <br/>
                        Add to Cart
                    </a> 
                </Tooltip>,
                    <>
                        <a onClick={handleAddToWishlist}>
                            <HeartOutlined className='text-info'></HeartOutlined>
                            <br/>
                            Add to Wishlist
                        </a>
                    </>,
                    <div>
                        {product ? (
                            <>
                            <RatingModal>
                                <StarRatings
                                    name={product._id}
                                    numberOfStars = {5}
                                    rating = {star}
                                    changeRating = {onStartClick }
                                    isSelectable = {true}
                                    starRatedColor = "red"
                                    />
                            </RatingModal>
                            </>
                        ) : (
                            <>
                           
                            <h3 className='text-danger'>Loading...</h3>

                            </>
                        )}
                    </div>
        
                   


                
            ]}
            
            >
                { !product ? (
                    <Meta 
                        title="Loading ... "
                        description ="Loading ..."
                >

                </Meta>              
                ):(
                    <>
                    <Meta 
                        title={product.title}
                        description = {product.description}
                    >
                    </Meta> 
                    {product && product.ratings && product.ratings.length > 0 ? 
                        showAverage(product) :
                        (
                            <>
                           <div className='pt-3 pb-3'>
                                No ratings yet
                           </div>
                            </>
                        )
                    }
                    <br  />
                    <div className="mb-3">
                    </div>
                    
                    <ul className="list-group">
                        <li className="list-group-item">
                            Price <span className='label label-default label-pill pull-xs-right float-right'>{product.price}</span>
                        </li>
                        {category ? (
                            <li className="list-group-item">
                            Category <span className='label label-default label-pill pull-xs-right float-right'>
                            <Link to ={`/category/${category.slug}`}>
                                {category.name}
                            </Link>
                            </span>
                        </li>
                        ): (
                            <li className="list-group-item">
                            Category <span className='label label-default label-pill pull-xs-right float-right'>
                            <Link to ={``}>
                                Loading...
                            </Link>
                            </span>
                        </li>                       ) }

                        {subs ? (
                            <li className="list-group-item">
                            Subcategories
                                {subs.map((sub, index) =>{
                                    return (
                                        <span key={index}>
                                        <Link className='label label-default label-pill pull-xs-right float-right'  to = {`/sub/${sub.slug}`} > {`| ${sub.name} |`} </Link>
                                        </span>
                                        )
                                })}
                        </li>
                        ) : (
                            <li className="list-group-item">
                            Subs <span className='label label-default label-pill pull-xs-right float-right'>Loading...</span>
                        </li>
                        )}
                        
                        <li className="list-group-item">
                            Shipping <span className='label label-default label-pill pull-xs-right float-right'>{product.shipping}</span>
                        </li>
                        <li className="list-group-item">
                            Color <span className='label label-default label-pill pull-xs-right float-right'>{product.color}</span>
                        </li>
                        <li className="list-group-item">
                            Brand <span className='label label-default label-pill pull-xs-right float-right'>{product.brand}</span>
                        </li>
                        <li className="list-group-item">
                            Quantity <span className='label label-default label-pill pull-xs-right float-right'>{parseInt(product.quantity) - parseInt(product.sold)}</span>
                        </li>
                        <li className="list-group-item">
                            Sold <span className='label label-default label-pill pull-xs-right float-right'>{product.sold}</span>
                        </li>
                    </ul>   

                    </>
                                    
                ) }
                
                

            </Card>
        </div>
    </>
    </div>
    <div className="row">
        <div className="col text-center pt-5 pb-5">
            <hr/>
                <h4>Related products</h4>
            <hr/>
            <div className="container">
                <div className="row">

                </div>
            </div>
            {relatedProds.length > 0 ? (
                <>
                {
                    relatedProds.map((prod,index) => {
                        return (
                             <div className='col-md-4 float-left' key= {index}>
                                <ProductCard product={prod}/>
                            </div>
                        )
                    })
                }

                </>
            ): (
                <h6 >No products found</h6>
            )}
                
            
        </div>
    </div>
    
    </>
    
  )
}

export default Product