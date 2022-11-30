import React from 'react'
import {CheckCircleOutlined, CloseCircleOutlined} from '@ant-design/icons'
import { lightboxStyles } from 'react-modal-image/lib/styles'



const Orders = ({orders, handleStatusChange}) => {
  return (
    <>
      {orders.map((order, index)=>{
        return (
         <div className=" mb-3" key={index}>
         <div  className="row p-5 mr-5 mb-5" style={{
          "backgroundColor":"lightgrey",
          "border":"grey"
         }}>
              <div className="col-md-8">
                <span><b>Order Id: </b></span>{order.paymentIntent.id}<br/>
                <span><b>Amount paid: </b></span>{order.paymentIntent.amount/100} {order.paymentIntent.currency}<br/>
                <span><b>Payment Status: </b></span>{order.paymentIntent.status}
                
              </div>
              <div className="col-md-4">
              Delivery Status
                <select onChange={e=> handleStatusChange(order._id, e.target.value)} 
                        className="form-control mt-3"
                        defaultValue={order.orderStatus}>
                    <option value="Not Processed">Not Processed</option>
                    <option value="Processing">Processing</option>
                    <option value="Dispatched">Dispatched</option>
                    <option value="Cancelled">Cancelled</option>
                    <option value="Completed">Completed</option>
                </select>
              </div>
              <br/>
              <table className='table table-bordered' style={{"marginTop":"30px"}}>
                      <thead className='thead-light'>
                        <tr>
                          <th scope="col">
                            Title
                          </th>
                          <th scope="col">
                            Count
                          </th>
                          <th scope="col">
                            Color
                          </th>
                     

                        </tr>
                      </thead>
                      <tbody>
                        {order.products.map((p, i)=>{
                          return(
                            <tr key={i}>
                              <td><b>{p.count} x {p.title}</b></td>
                              <td><b>{p.count}</b></td>
                              <td><b>{p.color}</b></td>

                            </tr>
                            

                          )
                        })}
                      </tbody>
                    </table>
          </div>
          
         </div>
          
        )
      })}
    </>
  )
}

export default Orders
