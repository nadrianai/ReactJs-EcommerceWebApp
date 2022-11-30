import React from 'react'
import {Card} from 'antd'
import laptop from '../../images/eceeee4c021a62c1877e22203056558d.png'
import {EditOutlined, DeleteOutlined}  from '@ant-design/icons'
import { Link } from 'react-router-dom'

const {Meta} = Card

const AdminProductCard = ({product, handleRemove}) => {

    const {title, description, images, slug} = product

  return (
    <Card 
    cover ={
        <img src={images && images.length ? images[0].url : laptop} 
        style={{"height": "250px", "objectFit":"contain"}}
        />
    }
        actions = {[
            <Link to={`/admin/products/${slug}`}>
                <EditOutlined className='text-warning'/>
            </Link>
            ,
             <DeleteOutlined className="text-danger" onClick={()=> handleRemove(slug)}/>
        ]}
    >
        <Meta title={title} description={`${description} && ${description.substring(0, 4)}...`}>

        </Meta>
    </Card>
  )
}

export default AdminProductCard