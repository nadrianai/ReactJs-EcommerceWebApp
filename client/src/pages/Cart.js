import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link, useHistory} from 'react-router-dom'
import ProductCardInCheckout from '../component/cards/ProductCardInCheckout'
import { userCart } from '../functions/user'

const Cart = () => {

    const {cart, user } = useSelector((state)=> ({...state}))
    const dispatch =  useDispatch()
    const history = useHistory()

    const getTotal = () =>{
        let arr = 0
        for (let i = 0; i < cart.length; i++) {
            arr += (cart[i].price * cart[i].count)
        }
        return (arr)
    }

    const showCartItems = () =>(
            <table className='table table-bordered'>
                <thead className='thead-light'>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Color</th>
                        <th scope="col">Count</th>
                        <th scope="col">Shipping</th>
                        <th scope="col">Remove</th>

                    </tr>
                </thead>
                {cart.map((prod, index) => (
                    <ProductCardInCheckout key={index}  p={prod}/>
                )
                )}
            </table>

    )

    const saveOrderToDb = () =>{
        userCart(cart, user.token)
            .then(res => {
                console.log(res.data)
                if(res.data.ok){
                    history.push('/checkout')
                }
            })
            
    }

  return (
    <div className='container-fluid p-5'>
      <div className='row'>
      {cart.length < 2 ? (
        <>
            <h4>Cart/ {cart.length} Product</h4>
            <hr/>
        </>
        
      ):(
        <>
            <h4>Cart/ {cart.length} Products</h4>
            <hr/>
        </>
       
      )} 

      <div className='row'>
        <div className='col-md-8'>
            {cart.length < 1 ? (
                <h4><Link to="/shop">  There are no products in cart. Continue Shopping!</Link></h4>
            ):(
            <>
                {showCartItems()}
            </>
            )}
        </div>
        <div className='col-md-4'>
        <h4>Order Summary</h4>
        <hr/>
        <p>Products</p>
        {cart.map((c,i) => {
            return (
                <div key={i}>
                    <p> {c.title} x {c.count} = ${ c.count * c.price }</p>
                </div>
            )
        })}
        <hr></hr>
        <div><p>Total ${getTotal()}</p></div>
        <hr></hr>

        {
            user ? (
                <button 
                    className='btn btn-sm btn-primary mt-2' 
                    onClick={saveOrderToDb}
                    disabled={!cart.length}
                    >
                        Proceed to Checkout
                    </button>
            ) : (
                <button className='btn btn-sm btn-rised mt-2'><Link  to ={{
                    pathname:'/login',
                    state: {from:  'cart'}
                }}>
                Login to Checkout
                </Link></button>
            )
        }
        </div>

      </div>
    
      </div>
    </div>
  )
}

export default Cart
