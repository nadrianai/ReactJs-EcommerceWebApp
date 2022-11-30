import React , {useState} from 'react'
import UserNav from '../../component/nav/UserNav'
import {auth} from '../../firebase'
import {toast} from 'react-toastify'

const Password = () => {

    const [password,setPassword] = useState('')
    const [loading,setLoading] = useState(false)


    const handleSubmit = async(e) =>{
        e.preventDefault()
        setLoading(true)
        await auth.currentUser.updatePassword(password)
        .then(()=>{
            setLoading(false)
            toast.success("Password Updated")
            setPassword('')
        })
        .catch((err)=>{
            setLoading(false)
            console.log(err)
            toast.error(err.message)
        })
    }

    const PasswordUpdateForm  = () =>{
        return (
            <form onSubmit = {handleSubmit}>
                <div className="form-group ">
                    <label htmlFor="">Your Password</label>
                    <input  type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            placeholder='Enter new password'
                            autoFocus
                            disabled={loading}
                            />
                    <button className="btn btn-primary"
                            disabled={!password || loading || password.length<6}>
                        Submit
                    </button>
                </div>
            </form>

        )    }

  return (
    <div className="container-fluid container col-md-8 float-left mt-5">
        <div className="row">
            <div className="col-md-2">
            <UserNav></UserNav>
            </div>
            <div className="col pl-5">
            {loading ?  <h4 className='text-danger'>Loading...</h4> :  <h4>Password Update</h4>}
               
                <PasswordUpdateForm/>
            </div>
        </div>
    </div>
  )
}

export default Password