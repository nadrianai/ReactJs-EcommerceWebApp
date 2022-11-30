import React, {useState, useEffect} from 'react'
import auth from '../../firebase'
import {toast} from 'react-toastify'
import { getAuth, sendSignInLinkToEmail } from "firebase/auth"
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';


const Register = () => {
    const [email, setEmail] = useState('')
    let {user} = useSelector(state=>({...state}))
    let history = useHistory()
   
    useEffect(()=>{
        if(user && user.token){
            history.push('/')
        }
    },[user,history])

    const handleSubmit = async(e) =>{
        e.preventDefault()
        const actionCodeSettings  ={
            apiKey: "AIzaSyC1Vb38sBkYYB3VmoKKA95_d_bHT4T_tDc",
            url:process.env.REACT_APP_REGISTER_REDIRECT_URL,
            handleCodeInApp:true,
            // dynamicLinkDomain: 'http://localhost:3000/register/complete'
        }
        const auth = getAuth();
        await sendSignInLinkToEmail(auth, email, actionCodeSettings )
        .then(()=>{
            toast.success(`Email is sent to ${email}.Click the link to complete registration.`)
            //save user email in local storage
            window.localStorage.setItem('emailForRegistration', email )
            //clear the satet
            setEmail('') 
        })
        .then(()=>{
            history.push('/login')
        })
        .catch((err)=>{
            console.log(err)
            toast.error(err.message)
        })
       
    }

    const registerForm =() =>{
        return(
           <form onSubmit={handleSubmit}>
                <input type="email" 
                    className='form-control mb-3' 
                    value ={email} 
                    onChange={e=> setEmail(e.target.value)}
                    autoFocus
                    placeholder='Your email'
                    />
                <button tyle="submit" className='btn btn-raised'> Register</button>
           </form>
        )
        
    }
  return (
    <div className='container p-5'>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h4>
                    Register
                </h4>
                {registerForm()}

            </div>
        </div>
    </div>
  )
}

export default Register