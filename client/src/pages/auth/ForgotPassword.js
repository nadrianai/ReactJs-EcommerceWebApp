import React, {useState, useEffect} from 'react'
import {auth} from '../../firebase'
import {toast} from 'react-toastify'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';


const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    
    let history = useHistory()
    let {user} = useSelector((state)=>({...state}))

    useEffect(()=>{
        if(user && user.token){
            history.push('/')
        }
    },[user,history])

    const handleSubmit = async(e) =>{
        e.preventDefault()
        setLoading(true)
        const config  ={
            apiKey: "AIzaSyC1Vb38sBkYYB3VmoKKA95_d_bHT4T_tDc",
            url:process.env.REACT_APP_FORGOT_PASS_REDIRECT,
            handleCodeInApp:true,
        }
        await auth.sendPasswordResetEmail(email, config)
            .then(()=>{
                setEmail('')
                setLoading(false)
                toast.success("Check your email for password reset link!")
            })
            .catch((err)=>{
                setLoading(false)
                console.log(err)
                toast.error(err.message)

            })

    }

  return (
    <div className='container col-md-6 offset-md-3 p-5'>
        
            {loading ? 
                <h4 className="text-danger">Loading...</h4>:
                <h4>Forgot Password</h4>
            }
            
        <form onSubmit={handleSubmit}>
            <input  type="email" 
                    className="form-control mb-3" 
                    value={email}
                    onChange = {(e) => setEmail(e.target.value)}
                    placeholder = "Your email here..."
                    autoFocus
                    />
            <button className="btn btn-raised"
                    disabled = {!email}
                >
                Submit

            </button>

        </form>

    </div>
  )
}

export default ForgotPassword