import React, {useState, useEffect} from 'react'
import AdminNav from '../../../component/nav/AdminNav'
import {toast}  from 'react-toastify'
import { useSelector } from 'react-redux'
import { getSub, updateSub } from '../../../functions/sub'
import { useHistory, useParams } from 'react-router-dom'
import CategoryForm from '../../../component/forms/CategoryForm'

const SubUpdate = () => {
    const [name, setName] = useState('')
    const [parent, setParent] = useState('')

    let {user} = useSelector((state)=>({...state}))
    let history = useHistory()
    let {slug} = useParams()

    useEffect(()=>{
        loadSub()
    }, [])


    const  loadSub = () =>{
       getSub(slug)
        .then(res =>{
            setName(res.data.name)
            setParent(res.data.parent)

        })
        .catch(err =>{
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        updateSub(slug, {name, parent}, user.token)
            .then(res =>{
                toast.success("Subcategory updated!")
                history.push("/admin/sub")
            })
            .catch(err =>{
                toast.error("There was an error updating this subcategory!")
            })
        
    }

  return (
    <div className="container-fluid mt-5">
        <div className="row">
            <div className="col-md-2">
              <AdminNav></AdminNav>
            </div>
            <div className="col">
              <h4>Update Subcategory</h4>
              <CategoryForm handleSubmit={handleSubmit}
                            name ={name}
                            setName={setName}/>
              <hr className='col-md-8'/>
            </div>
        </div>
    </div>

    )
}

export default SubUpdate