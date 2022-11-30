import React, { useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUserCart , emptyUserCart, saveUserAddress, applyCoupon} from '../functions/user'
import { toast } from 'react-toastify'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import {useHistory} from 'react-router-dom'


const Checkout = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const {user} = useSelector((state) => ({...state}))
    const [products, setProducts] = useState([])
    const [address, setAddress] = useState('')
    const [addressSaved, setAddressSaved] = useState(false)
    const [total, setTotal] = useState(0)
    const [coupon, setCoupon] = useState('')
    const [totalAfterDiscount, setTotalAfterDiscount] = useState('')
    const [discountError, setDiscountError] =  useState('')

    useEffect(()=>{
        if(user){
            getUserCart(user.token) 
            .then(res => {
                // console.log(res.data.products)
                setProducts(res.data.products)
                setTotal(res.data.cartTotal)
            })

        }
        
    },[user])


    const emptyCart = () =>{
        //remove from local storage
        if(typeof window !== undefined){
            localStorage.removeItem('cart')
        }
        //remove from redux
        dispatch({
            type:"ADD_TO_CART",
            payload:[]
        })

        //remove from backend
        emptyUserCart(user.token) 
            .then(res =>{
                setProducts([])
                setTotal(0)
                setTotalAfterDiscount(0)
                toast.succes("Cart is empty. Continue shopping!")
            })

    }
    const saveAddressToDb = () =>{
        saveUserAddress(address, user.token)
            .then(res => {
                if(res.data.ok){
                    setAddressSaved(true)
                    toast.success("Address Saved!")
                }
            })    
    }

    const applyDiscountCoupon = () =>{
        applyCoupon( coupon, user.token)
            .then(res =>{
                setTotalAfterDiscount( res.data)
                dispatch({
                    type:"COUPON_APPLIED",
                    payload:true
                })
                if(res.data.err) {
                    setDiscountError(res.data.err)
                    //update redux coupon applied
                    dispatch({
                        type:"COUPON_APPLIED",
                        payload:false
                    })
                }
            })
            
    }

  return (
    <div className='container-fluid p-5'>
        <div className='row p-6'>
                <div className="col-md-6">
                    <h4>
                        Delivery Address
                    </h4>
                    <br/>
                    <br/>
                    <ReactQuill theme="snow" value={address} onChange={setAddress}></ReactQuill>
                    <button className="btn btn-primary mt-2" onClick={saveAddressToDb}>
                        Save
                    </button>
                    <hr/>
                    <h4>Got Cupon? </h4>
                    <br/>
                    {discountError && <p className='bg-danger p-3' style={{"color":"white"}}>{discountError}</p>}
                    <input onChange={(e)=> {
                        setCoupon(e.target.value)
                        setDiscountError('')
                        }}
                            value={coupon}
                            type="text"
                            className='form-control'
                    
                    />

                    <button className='btn btn-primary mt-2' onClick={applyDiscountCoupon}>Apply</button>
                </div>
                <div className="col-md-6">
                    <h4>Order Summary</h4>
                    <hr/>
                    <p>Products {products.length}</p>
                    <hr/>
                    {products.map((p, i) => {
                        return(
                            <div key={i}>
                                <p>{p.title} ({p.color}) x {p.count} = {` $${p.price * p.count}`}</p>
                            </div>
                        )
                    })}
                    <hr/>
                    <p>Cart Total: {`$${total}`}</p>

                    {totalAfterDiscount > 0 && (
                        <p className='bg-success p-3' style={{"color":"white"}}>Discount applied: ${totalAfterDiscount}</p>
                    )}

                    <div className="row">
                        <div className="col-md-6">
                            <button 
                            className="btn btn-primary" 
                            disabled={!addressSaved || !products.length}
                            onClick={()=>history.push("/payment")}
                            >
                                Place Order
                            </button>
                        </div>
                        <div className="col-md-6">
                            <button className="btn btn-primary" disabled = {products.length < 1} onClick={emptyCart}>
                                Empty Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
   
  )
}

export default Checkout
