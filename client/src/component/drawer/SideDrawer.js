import React from 'react'
import {Drawer, Button} from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import laptop from '../../images/eceeee4c021a62c1877e22203056558d.png'
import {Link} from 'react-router-dom'



const SideDrawer = () => {

    const dispatch = useDispatch()
    const {drawer, cart } = useSelector((state) => ({...state}))

    const imageStyle = {
        width: '100%',
        height: '125px',
        objectFit: 'contain'
    }

  return (
    <Drawer onClose={() =>{
        //hide drawer
         dispatch({
                type:"SET_VISIBLE",
                payload: false
            })
    }} 
    visible={drawer}
    className='text-center '
    title={`Cart / ${cart.length} products`}
    placement="right"
    closable={false}
    >

        {cart.map((prod, index) =>{
            return(
                <div className='row mb-3 mt-3 border border-dark'  key={index}>
                    <div className='col'>
                        {prod.images[0] ? ( 
                            <img src={prod.images[0].url} style={imageStyle}/>
                             
                        ) : ( 
                            <img src={laptop} style={imageStyle}/>

                        )}
                        <h6 className='bg-dark bg-gradient text-light'>{prod.title} x {prod.count}</h6>
                    </div>
                </div>
            )
        })}

        <Link className='btn btn-primary btn-raised btn-block' to={'/cart'} onClick={()=>{
            dispatch({
                type:"SET_VISIBLE", 
                payload: false
            })
        }}>Go To Cart</Link>

    </Drawer>
  )
}

export default SideDrawer
