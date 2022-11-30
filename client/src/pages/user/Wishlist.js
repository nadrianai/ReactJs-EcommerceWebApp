import React, {useState, useEffect} from 'react'
import UserNav from '../../component/nav/UserNav'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { getWishlist , removeFromWishlist} from '../../functions/user'
import {DeleteOutlined} from '@ant-design/icons'

const Wishlist = () => {

  const {user} = useSelector((state)=>({...state}))
  const [wishlist, setWishlist] = useState([])

  useEffect(()=>{
    loadWishlist()
  },[])

  const loadWishlist = () =>{
    getWishlist(user.token)
      .then(res=>{
        setWishlist(res.data.wishlist)
      })
  }
  const handleRemove = (productId) =>{
    removeFromWishlist(productId, user.token)
  }

  return (
    <div className="container-fluid mt-5">
        <div className="row">
            <div className="col-md-2">
              <UserNav></UserNav>
            </div>
            <div className="col">
              <h4>Wishlist</h4>
              {wishlist.map((p,i)=>{
                return (
                  <div key={i} className="alert alert secondary bg-light">
                      <Link to={`/product/${p.slug}`}>{p.title}</Link>
                      
                  </div>
                )
              })}
            </div>
        </div>
    </div>
  )
}

export default Wishlist