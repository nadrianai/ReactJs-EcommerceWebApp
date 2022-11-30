import axios from 'axios'


export const createPaymentIntent = async(authoken, coupon) =>{
    return await axios
            .post(`${process.env.REACT_APP_API}/create-payment-intent`, 
            {couponApplied: coupon},
            {
                headers:{
                    authoken //send in the headers 
                }
            })
            
}
