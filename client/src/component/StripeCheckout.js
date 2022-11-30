import React, {useState, useEffect} from 'react'
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import { useSelector, useDispatch } from 'react-redux'
import { createPaymentIntent } from '../functions/stripe'
import {Link} from 'react-router-dom'
import {Card} from 'antd'
import {DollarOutlined, CheckOutlined} from '@ant-design/icons'
import Laptop from '../images/eceeee4c021a62c1877e22203056558d.png'
import { createOrder, emptyUserCart } from '../functions/user'


const StripeCheckout = () => {

    const dispatch = useDispatch()
    const {user, coupon} = useSelector((state) => ({...state}))

    const [succeeded, setSucceeded ] = useState(false)
    const [error, setError ] = useState(null)
    const [processing, setProcessing ] = useState(false)
    const [disabled, setDisabled ] = useState(true)
    const [clientSecret, setClientSecret ] = useState("")

    const [cartTotal, setCartTotal] = useState(0)
    const [totalAfterDiscount, setTotalAfterDiscount] = useState(0)
    const [payable, setPayable] = useState(0)

    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) =>{
        e.preventDefault()
        setProcessing(true)
        
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method:{
                card: elements.getElement(CardElement),
                billing_details:{
                    name: e.target.name.value
                }
            }
        })

        if(payload.error){
            setError(`Payment failed ${payload.error.message}`)
            setProcessing(false)
        }else{
            //create order and save in db for admin to process
            createOrder(payload, user.token)
                .then(res => {
                    if(res.data.ok){
                        //empty cart from local storage
                        if(typeof window !== undefined){
                            localStorage.removeItem('cart')
                        }
                        //empty cart from redux
                        dispatch({
                            type:"ADD_TO_CART",
                            payload: []
                        })
                        //reset coupon to false 
                        dispatch({
                            type:"COUPON_APPLIED",
                            payload: false
                        })
                        //empty cart from db
                        emptyUserCart(user.token)
                    }
                    //console.log(res.data)
                })
            //empty user cart from redux store and local storage

            //console.log(JSON.stringify(payload, null, 4))
            setError(null)
            setProcessing(false)
            setSucceeded(true)

        }

    }
    const cartStyle = {
        style: {
          base: {
            color: "#32325d",
            fontFamily: "Arial, sans-serif",
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
              color: "#32325d",
            },
          },
          invalid: {
            color: "#fa755a",
            iconColor: "#fa755a",
          },
        },
      }

    const  handleChange = (e) =>{
        //listen for changes in the card el and display any errors as the customer types details
        setDisabled(e.empty)
        setError(e.error ? e.error.message : " ")
      }

    useEffect(()=>{
        if(user) {
            let {token } = user
            createPaymentIntent(token, coupon)
                .then(res => {
                    //console.log(res.data)
                    setClientSecret(res.data.clientSecret)
                    setCartTotal(res.data.cartTotal)
                    setTotalAfterDiscount(res.data.totalAfterDiscount)
                    setPayable(res.data.payable)
                })
        }
       
    }, [user])


  return (
    <div>
       { !succeeded && <div> 
        {coupon && totalAfterDiscount !== undefined ? (
            <p className='alert alert-success'> 
                {`Total after discount: $${totalAfterDiscount.toFixed(2)}`}
            </p>
        ):(
            <p className='alert alert-danger'>No coupon applied</p>
        )}
       </div>}

        <div className="text-center pb-5">
            <Card 

                cover={<img src={Laptop} style={{"height":"125px", "objectFit":"cover"}}/>}
                actions = {[
                    <>
                        <DollarOutlined className="text-info" /> <br/> Total: $ {cartTotal}
                    </>,
                    <>
                        <CheckOutlined className="text-info" /> <br/> Total payable: $ {(payable/100).toFixed(2)}
                    </>
                ]}
            />
        </div>

        <form 
            id="payment-form" 
            className='stripe-form' 
            onSubmit={handleSubmit}
            
            >
            <CardElement id="card-element" options={cartStyle} onChange={handleChange} >
                
            </CardElement>
            <button 
                    className="stripe-button mt-3"
                    disabled={processing || disabled || succeeded} >
                    <span id="button-text">
                        {processing ? (
                            <div className="spinner" id="spinner"></div>  
                        ): (
                            <div>Pay</div>
                        )}
                    </span>
                </button>
                <br/>
                {error ?  (
                    <div className="card-error" role="alert">{error}</div>
                ):(
                    <div></div>
                )}
                <br/>
                <p className={succeeded ? 'result-message alert alert-success' : 'result-message-hidden'}>Payment succesful!
                    <Link to="/user/history"> View your orders here!</Link>
                </p>
        </form>
        
      
    </div>
  )
}

export default StripeCheckout
