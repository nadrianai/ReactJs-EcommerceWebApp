import React, {useState} from 'react'
import {Card, Tooltip} from 'antd'
import {EyeOutlined, ShoppingCartOutlined} from '@ant-design/icons'
import {Link} from 'react-router-dom'
import laptop from '../../images/eceeee4c021a62c1877e22203056558d.png'
import {showAverage} from '../../functions/rating'
import  _ from 'lodash'
import {useSelector, useDispatch} from 'react-redux'

const {Meta} = Card


const ProductCard = ({product}) => {
    const [tooltip, setTooltip] = useState('Click to add')

    const dispatch =  useDispatch()
    const {user, cart} = useSelector((state)=>({...state}))

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




    const {title, description, images, slug, price} = product

  return (
    <>
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
    <Card className = "mb-3" cover ={
        <img src={images && images.length ? images[0].url : laptop} 
        style={{"height": "250px", "objectFit":"contain"}}
        />
    }
        actions = {[
            <Link to={`/product/${slug}`}>
                <EyeOutlined className='text-warning'/> <br/> View Product
            </Link>
            ,
            <Tooltip title={tooltip}  >
                <a onClick={handleAddToCart} disabled={product.quantity < 1}>
                <ShoppingCartOutlined className="text-danger" /> <br/> 
                    {product.quantity<1 ? "Out of stock" : "Add to cart"}
                </a>
            </Tooltip>
           
             
        ]}
    >
        <Meta title={`${title} - ${price}$`} description={`${description} && ${description.substring(0, 40)}...`}>
        </Meta>


    </Card>
    </>
    
  )
}

export default ProductCard