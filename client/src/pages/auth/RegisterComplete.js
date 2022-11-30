import React, {useState, useEffect} from 'react'
import { toast } from 'react-toastify'
import { auth } from '../../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import {createOrUpdateUser} from '../../functions/auth'

const RegisterComplete = (props) => {
    const [email, setEmail] = useState('')
    const [passowrd, setPassword] = useState('')

    let dispatch = useDispatch()
    let history = useHistory()

    useEffect(()=>{
        setEmail(window.localStorage.getItem('emailForRegistration'))
    }, [])


    const handleSubmit = async(e) =>{
        e.preventDefault()
        if(!email || !passowrd){
            toast.error('Email and password are required!')
            return
        }
        if(passowrd.length < 6){
            toast.error('Password must be at least 6 characters long!')
            return
        }
       try {
            const result = await auth.signInWithEmailLink(email, window.location.href)
            // console.log(result)
            if(result.user.emailVerified){
                window.localStorage.removeItem("emailForRegistration")
                let user = auth.currentUser
                await user.updatePassword(passowrd)
                const idTokenResult = await user.getIdToken()
                
                createOrUpdateUser(idTokenResult)
                    .then(res =>{
                        dispatch({
                            type:"LOGGED_IN_USER",
                            payload:{
                                email:res.data.email,
                                name:res.data.name,
                                token:idTokenResult,
                                role:res.data.role,
                                _id:res.data._id
                            }
                        })
                    })
                    .then(()=>{
                        history.push('/')
                    })
                    .catch(err =>{
                        console.log(err)
                    })          
             }
       } catch (error) {
            console.log(error)
            toast.error(error.message)
       }
    }

    const completeRegistrationForm =() =>{
        return(
           <form onSubmit={handleSubmit}>
                <input type="email" 
                    className='form-control mb-3 disabled' 
                    defaultValue={email} 
                    />
                 <input type="password" 
                    className='form-control mb-3' 
                    value ={passowrd} 
                    onChange={e=> setPassword(e.target.value)}
                    autoFocus
                    placeholder='Enter password here'
                    />
                <button tyle="submit" className='btn btn-raised'> Complete Registration </button>
           </form>
        )
        
    }
  return (
    <div className='container p-5'>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h4>
                Register Complete
                </h4>
                {completeRegistrationForm()}

            </div>
        </div>
    </div>
  )
}

export default RegisterComplete