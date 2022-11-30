import axios from 'axios'

export const userCart = async(cart, authoken) =>{
    return await axios.post(`${process.env.REACT_APP_API}/user/cart`, {cart}, {
        headers:{
            authoken
        }
    })
} 

export const getUserCart = async( authoken) =>{
    return await axios.get(`${process.env.REACT_APP_API}/user/cart`,{
        headers:{
            authoken
        }
    })
}

export const emptyUserCart = async( authoken) =>{
    return await axios.delete(`${process.env.REACT_APP_API}/user/cart`,{
        headers:{
            authoken
        }
    })
}

export const saveUserAddress = async(address, authoken) =>{
    return await axios.post(`${process.env.REACT_APP_API}/user/address`, {address}, {
        headers:{
            authoken
        }
    })
} 

export const applyCoupon = async(coupon, authoken) =>{
    return await axios.post(`${process.env.REACT_APP_API}/user/cart/coupon`, {coupon}, {
        headers:{
            authoken
        }
    })
} 

export const createOrder = async(stripeResponse, authoken) =>{
    return await axios.post(`${process.env.REACT_APP_API}/user/order`, {stripeResponse}, {
        headers:{
            authoken
        }
    })
} 


export const getUserOrders = async( authoken) =>{
    return await axios.get(`${process.env.REACT_APP_API}/user/orders`,{
        headers:{
            authoken
        }
    })
}

export const getWishlist = async( authoken) =>{
    return await axios.get(`${process.env.REACT_APP_API}/user/wishlist`,{
        headers:{
            authoken
        }
    })
}

export const removeFromWishlist = async(productId, authoken) =>{
    return await axios.put(`${process.env.REACT_APP_API}/user/wishlist/:productId`,
    {},
    {
        headers:{
            authoken
        }
    })
}

export const addToWishlist = async(productId, authoken) =>{
    return await axios.post(`${process.env.REACT_APP_API}/user/wishlist`,
    {productId},
    {
        headers:{
            authoken
        }
    })
}