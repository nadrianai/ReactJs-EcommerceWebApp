import React, {useEffect, useState} from 'react'
import AdminNav from '../../component/nav/AdminNav'
import AdminProductCard from '../../component/cards/AdminProductCard'
import { getOrders, changeStatus } from '../../functions/admin'
import { useSelector, useDispatch } from 'react-redux'
import {toast} from 'react-toastify'
import Orders from '../../component/order/Orders'

const AdminDashboard = () => {

  const {user} = useSelector((state)=>({...state}))
  const [orders, setOrders] = useState([])
  // const [orderId, setOrderId] = useState('')
  // const [orderStatus, setOrderStatus] = useState([])



  useEffect(()=>{

    loadOrders()

  },[])

  const loadOrders = () =>{
    getOrders(user.token)
      .then(res => {
        setOrders(res.data)
      })
  }

  const handleStatusChange = (orderId, orderStatus) =>{
    changeStatus(orderId, orderStatus, user.token)
      .then(res => {
        toast.success("Status updated")
        loadOrders()
      })
  }


  return (
    <React.Fragment>
      <div className="container-fluid mt-5">
        <div className="row">
            <div className="col-md-2">
              <AdminNav></AdminNav>
            </div>
            <div className="col">

            <h4>
              Admin Dashboard
            </h4>
            <Orders orders={orders} handleStatusChange={handleStatusChange}/>
            

            
            </div>
        </div>
    </div>

    </React.Fragment>
    
  )
}

export default AdminDashboard