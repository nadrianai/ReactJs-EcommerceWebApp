import React, {useEffect, useState} from 'react'
import UserNav from '../../component/nav/UserNav'
import {getUserOrders} from '../../functions/user'
import { useSelector, useDispatch } from 'react-redux'
import {CheckCircleOutlined, CloseCircleOutlined} from '@ant-design/icons'
import {toast} from 'react-toastify'

const History = () => {
  let {user} = useSelector((state)=> ({...state})) 
  const [orders, setOrders] = useState([])

  useEffect(() => {
    getUserOrders(user.token)
      .then(res=>setOrders(res.data))
  }, [user]);

  return (
    <div className="container-fluid mt-5">
        <div className="row">
            <div className="col-md-2">
              <UserNav></UserNav>
            </div>
            <div className="col">
              <h4 className="ml-5 p-3">{orders.length > 0 ? "User purchase orders" : "No puschase orders"}</h4>
              {orders.map((order, index) =>{
                return(
                  <div key={index} className="m-5 p-3 card" >
                    <table className='table table-bordered'>
                      <thead className='thead-light'>
                        <tr>
                          <th scope="col">
                            Title
                          </th>
                     

                        </tr>
                      </thead>
                      <tbody>
                        {order.products.map((p, i)=>{
                          return(
                            <tr key={i}>
                              <td><b>{p.count} x {p.title}</b></td>

                            </tr>
                            

                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                )
              })}
            </div>
        </div>
    </div>

    )
}

export default History