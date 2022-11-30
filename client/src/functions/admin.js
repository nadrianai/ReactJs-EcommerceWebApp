import axios from 'axios'

export const getOrders = async(authoken) =>{
    return await axios
            .get(`${process.env.REACT_APP_API}/admin/orders`, {
                headers:{
                    authoken //send in the headers 
                }
            })
            
}

export const changeStatus = async(orderId, orderStatus, authoken) =>{
    return await axios
            .put(`${process.env.REACT_APP_API}/admin/order-status`,
            {
                orderId, orderStatus
            },
            {
                headers:{
                    authoken //send in the headers 
                }
            })
            
}