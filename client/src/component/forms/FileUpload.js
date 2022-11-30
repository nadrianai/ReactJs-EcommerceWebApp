import React from 'react'
import Resizer from 'react-image-file-resizer'
import axios from 'axios'
import { useSelector } from 'react-redux'
import {toast}  from 'react-toastify'
import { Avatar, Badge } from 'antd'
const FileUpload = ({values, setValues}) => {

    const {user} = useSelector((state)=> ({...state}))

    const handleImageRemove =(public_id) =>{
        console.log(public_id)
        axios.post(`${process.env.REACT_APP_API}/removeimages`, {public_id}, 
           { headers: {
                authoken: user ? user.token : ""
            }}
        )
        .then(res=>{
            console.log(res.data)
            const {images} = values
            let filteredImages = images.filter((item)=>{
                return item.public_id !== public_id
            })
            setValues({...values, images:filteredImages})
        })
        .catch(err =>{
            console.log(err)
        })
    }
    const fileUploadAndResize = (e) =>{
       // console.log(e.target.files)
       //resize 
       let files = e.target.files
       let allUploadedFiles =  values.images

       if(files){
        for (let i =0; i < files.length; i++){
            Resizer.imageFileResizer(files[i], 720, 720, 'JPEG', 100, 0, (uri)=>{
                // console.log(typeof uri)
                axios.post(`${process.env.REACT_APP_API}/uploadimages`, {image:uri}, {
                    headers:{
                        authoken: user ? user.token : ""
                    }
                })
                .then(res =>{
                    console.log(res.data)
                    allUploadedFiles.push(res.data)

                    setValues({...values, images:  allUploadedFiles})
                })
                .catch(err=>{
                    console.log(err)
                    toast.error(err.message)

                })
            }, 
            "base64"
              )

        }
       }
       //send back to server to upload to cloudinary
       //set url to images[] in the parent component - ProductCreate
    }

  return (
    <React.Fragment>
        <div className="row">
            {values.images && values.images.map((image, index)=>{
                return (
                    <a className="col" key={image.public_id} onClick={()=> handleImageRemove(image.public_id)}>
                        <Badge count="X"  >
                            <Avatar  src={image.url} size={80} className="ml-3" shape="square" />
                        </Badge>

                    </a>
                    
                    
                )
            })}
        </div>
        <div className="row">
            <label className="btn btn-primary btn-raised">Choose File
            <input type="file" multiple hidden  accept="images/*" onChange={fileUploadAndResize}/>
        </label>
    </div>

    </React.Fragment>
    
  )
}

export default FileUpload