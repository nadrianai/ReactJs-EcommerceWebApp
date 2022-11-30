import axios from 'axios'

export const getCoupons = async(authoken) =>{
    return await axios
            .get(`${process.env.REACT_APP_API}/coupons`)
            
}

export const removeCoupon = async(couponId, authoken) =>{
    return await axios
            .delete(`${process.env.REACT_APP_API}/coupon/${couponId}`, 
            {
                headers:{
                    authoken //send in the headers 
                }
            })
            
}

export const createCoupon = async(coupon, authoken) =>{
    return await axios
            .post(`${process.env.REACT_APP_API}/coupon`, {coupon}, {
                headers:{
                    authoken //send in the headers 
                }
            })
            
}