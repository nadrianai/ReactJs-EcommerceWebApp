import React, {useState, useEffect} from 'react'
import {auth, googleAuthProvider} from '../../firebase'
import {toast} from 'react-toastify'
import {Button} from 'antd'
import { MailOutlined, GoogleOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {createOrUpdateUser} from '../../functions/auth' 



const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState('')

    let dispatch = useDispatch()
    let history = useHistory()
    let {user} = useSelector((state)=>({...state}))

    const redirectBasedOnRole = (res) =>{
        let intended = history.location.state
        if(intended){
            history.push(intended.from)
        }else{
            if(res.data.role === "subscriber"){
                history.push("/user/history")
            }else{
                history.push("/admin/dashboard")
            }
        }
        
       
    }

    useEffect(()=>{
        // let intended = history.location.state
        // if(intended){
        //     return
        // }else{
        //     if(user && user.token ){
        //         if(user.role === "subscriber"){
        //             history.push("/user/history")
        //         }else{
        //             history.push("/admin/dashboard")
        //         }
        // }
       

        // }
    }, [user, history])


    const handleSubmit = async(e) =>{
        e.preventDefault()
        setLoading(true)
        return await auth
        .signInWithEmailAndPassword(email, password)
        .then((result)=>{
            const {user} =  result

            user.getIdTokenResult().then((idToken)=>{
                const token = idToken.token
                createOrUpdateUser(token)
                .then(res => {

                    console.log(res.data._id)
                    redirectBasedOnRole(res)
                    dispatch({
                    type:"LOGGED_IN_USER",
                    payload:{
                        email:res.data.email,
                        name:res.data.name,
                        token:token,
                        role:res.data.role,
                        _id:res.data._id
                    }
                })
                })
                
            })
        })
        .catch((err)=>{
            setLoading(false)
            console.log(err)
            toast.error(err.message)
        })
    }
    const googleLogin = async() =>{
        auth
        .signInWithPopup(googleAuthProvider)
        .then(async(result) =>{ 
            const {user} = result
            const idTokenResult =await user.getIdTokenResult()

            createOrUpdateUser(idTokenResult.token)
            .then(res=>{
                dispatch({
                    type:"LOGGED_IN_USER",
                    payload:{
                        _id:res.data._id,
                        email:res.data.email,
                        name:res.data.name,
                        token:idTokenResult.token,
                        role:res.data.role,
                        
                    }
                })
            })
        })
        .catch((err)=>{
            setLoading(false)
            console.log(err)
            toast.error("User or password invalid!")

        })
    }
// 1234567
    const loginForm =() =>{
        return(
           <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    className='form-control mb-3' 
                    value ={email} 
                    onChange={e=> setEmail(e.target.value)}
                    placeholder='Your email'
                    />
                     <input 
                    type="password" 
                    className='form-control mb-3' 
                    value ={password} 
                    onChange={e=> setPassword(e.target.value)}
                    placeholder='Your password'
                    />
            <Button onClick = {handleSubmit} 
                    type="primary" 
                    className='mb-3' 
                    block shape="round" 
                    icon={<MailOutlined/>}
                    >Login with Email/Password </Button>

           </form>
        )
        
    }
  return (
    <div className='container p-5'>
        <div className="row">
            <div className="col-md-6 offset-md-3">
            {loading ? 
                <h4> Loading...</h4> : 
                <h4> Login </h4> 
            }
                {loginForm()}
                <Button onClick = {googleLogin} 
                    type="danger" 
                    className='mb-3 ' 
                    block shape="round" 
                    icon={<GoogleOutlined/>}
                    >Login with Google
                </Button>
                <Link to="/forgot/password" className='text-danger float-right ' ><u>Forgot password?</u></Link>
            </div>
        </div>
    </div>
  )
}

export default Login