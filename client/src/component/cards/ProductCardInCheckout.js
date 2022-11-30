import React from 'react'
import ModalImage from "react-modal-image"
import laptop from '../../images/eceeee4c021a62c1877e22203056558d.png'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import {
    CheckCircleOutlined, 
    CloseCircleOutlined,
    CloseOutlined
} from '@ant-design/icons'


const ProductCardInCheckout = ({p}) => {

    const colors = ['Black', 'Brown', 'Silver', 'White', 'Blue']
    let dispatch = useDispatch()

    const handleColorChange = (e) =>{
        // console.log(e.target.value)
        let cart = []
        if(typeof window !== undefined) {
            if(localStorage.getItem('cart')){
                cart = JSON.parse(localStorage.getItem('cart'))  //converts to JSON
            }
            cart.map((product, index)=>{
                if(product._id === p._id){
                    cart[index].color = e.target.value

                }
            })
            localStorage.setItem('cart', JSON.stringify(cart))
            dispatch({
                type: "ADD_TO_CART",
                payload: cart
            })
        }
    }

    const handleQuantityChange = (e) =>{
        let count = e.target.value < 1 ? 1 : e.target.value
        if(count > p.quantity){
            toast.error(`Maximum available quantity is : ${p.quantity}`)
            return // when is used like this it stops executing the rest of the function
        }

        let cart =[]
        if(typeof window !== undefined) {
            if(localStorage.getItem('cart')){
                cart = JSON.parse(localStorage.getItem('cart'))  //converts to JSON
            }
            cart.map((product, index) =>{
                if(product._id === p._id){
                    cart[index].count = count
                }
            })
            localStorage.setItem('cart', JSON.stringify(cart))
            dispatch({
                type: "ADD_TO_CART",
                payload: cart
            })
        }

    }
    
    const handleRemove = () =>{
        let cart = []
        if(typeof window !== undefined) {
            if(localStorage.getItem('cart')){
                cart = JSON.parse(localStorage.getItem('cart'))  //converts to JSON
            }
            cart.map((product, index)=>{
                if(product._id === p._id){
                    //delete item at given index, 1 is the number of items deleted
                    cart.splice(index, 1)
                }
            })
            localStorage.setItem('cart', JSON.stringify(cart))
            dispatch({
                type: "ADD_TO_CART",
                payload: cart
            })
        }
    }

  return (
   <tbody>
        <tr>
            <td>
                <div style={{'width':'100px', "height": "auto"}}>
                    {p.images.length>0 ? (
                        <ModalImage small={p.images[0].url} large={p.images[0].url}/>
                    ):(
                        <ModalImage small={laptop} large={laptop} />
                    )}
                </div>
            </td>
            <td>{p.title}</td>
            <td>${p.price}</td>
            <td>{p.brand}</td>
            <td>
                <select onChange={handleColorChange} name="color" id="" className='form-control'>
                    {p.color ? (
                        <option >{p.color}</option>
                    ):(
                        <option>Select</option>
                    )}
                    {colors.map((color , index) =>{
                        return(
                            <option value={color } key={index}>{color }</option>
                        )
                    })}
                </select>
            </td>
            <td className='text-center'> 
                <input type="number"
                        className='form-control'
                        value={p.count}
                        onChange={handleQuantityChange}
                />
            </td>
            {p.shipping === "Yes" ? (
                <td>
                    <CheckCircleOutlined className='text-success shippingButton'/>
                </td>
            ): (
                <td>
                    <CloseCircleOutlined className='text-danger shippingButton'/>
                </td>
            )}
            <td>
                <CloseOutlined onClick ={handleRemove} className='text-danger removeButton'/>
            </td>


        </tr>
    </tbody>

  )
}

export default ProductCardInCheckout
