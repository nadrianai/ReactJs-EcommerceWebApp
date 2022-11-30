import React , {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {toast} from 'react-toastify'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { getCoupons, removeCoupon, createCoupon } from '../../../functions/coupon';
import {DeleteOutlined} from '@ant-design/icons'
import AdminNav from '../../../component/nav/AdminNav'



const CreateCoupon = () => {

    const {user} = useSelector((state) => ({...state}))

    const [startDate, setStartDate] = useState(new Date())
    const [name, setName] = useState('')
    const [expiry, setExpiry] = useState('')
    const [discount, setDiscount] = useState('')
    const [coupons, setCoupons] = useState([])

    useEffect(()=>{
      getCoupons().then(res => {
        setCoupons(res.data)
      })
    },[])


    const handleSubmit = (e) =>{
        e.preventDefault()
        createCoupon({name, discount, expiry}, user.token)
            .then((res) => {
              setName('')
              setExpiry('')
              setDiscount('')
              toast.success(`${name} coupon successfully created!`)
              getCoupons().then(res => {
                setCoupons(res.data)
              })
            })
    }

    const handleRemoveCoupon = (couponId) =>{
      if(window.confirm("Delete?")){
        removeCoupon(couponId, user.token)
          .then(res => {
            // console.log(res.data)
            toast.error(`Coupon "${res.data.name}" deleted.`)
            getCoupons().then(res => {
              setCoupons(res.data)
            })
          })
          .catch(err => {
            console.log(err)
          })
      }
    }


  return (
    <div className="container-fluid mt-5">
        <div className="row">
            <div className="col-md-2">
              <AdminNav></AdminNav>
            </div>
            <div className="col">
              <h4>Create Coupon</h4>
              <form action="" onSubmit = {handleSubmit}>
                <div className="form-group col-md-6">
                    <label  className="text-muted">Name</label>
                    <input 
                        type="text" 
                        className='form-control ' 
                        onChange={(e) => setName(e.target.value)} 
                        value={name}
                        autoFocus
                        required

                        />
                </div>
                <div className="form-group col-md-6">
                    <label  className="text-muted">Discount % </label>
                    <input 
                        type="number" 
                        className='form-control ' 
                        onChange={(e) => setDiscount(e.target.value)} 
                        value={discount}
                        required

                        />
                </div><div className="form-group col-md-6">
                    <label  className="text-muted">Expiry</label>
                    <DatePicker 
                        className='form-control' 
                        selected={new Date()} 
                        value={expiry} 
                        required 
                        onChange={(date) => setExpiry(date)}
                         />
                </div>
                <button className='btn btn-outline-primary' >Save</button>
              </form>
              <br/>
              {coupons.length > 0 ? (
                <div>
                  <h4>{coupons.length} Coupons</h4>
                  <table className='table table-boardered'> 
                    <thead className='thead-light'>
                      <tr>
                        <th scope="col">
                            Name
                        </th>
                        <th scope="col">
                            Expiry
                        </th>
                        <th scope="col">
                            Discount
                        </th>
                        <th scope="col">
                            Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {coupons.map((coupon, index) => {
                        return (
                          <tr key={index}>
                          <th scope="col">
                              {coupon.name}
                          </th>
                          <th scope="col">
                            {new Date(coupon.expiry).toLocaleDateString()}
                          </th>
                          <th scope="col">
                            {coupon.discount} %
                          </th>
                          <th scope="col">
                             <DeleteOutlined className="text-danger" style={{"cursor":"pointer"}} onClick={() => handleRemoveCoupon(coupon._id)}/>
                          </th>
                        </tr>
                        )
                        
                      })}

                    </tbody>
                  </table>

                </div>
              ): (
                <div>

                </div>

              )}
            </div>
        </div>
    </div>
  )
}

export default CreateCoupon
