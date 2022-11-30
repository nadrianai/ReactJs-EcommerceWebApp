import axios from 'axios'

export const createOrUpdateUser = async(authoken) =>{

    return await axios
            .post(`${process.env.REACT_APP_API}/create-or-update-user`,
            {}, //send in the body
            {
                headers:{
                    authoken //send in the headers 
                }
            })
            
}



export const currentUser = async(authoken) =>{
    return await axios
            .post(`${process.env.REACT_APP_API}/current-user`,
            {}, //send in the body
            {
                headers:{
                    authoken //send in the headers 
                }
            })
            
}

export const currentAdmin = async(authoken) =>{
    return await axios
            .post(`${process.env.REACT_APP_API}/current-admin`,
            {}, //send in the body
            {
                headers:{
                    authoken //send in the headers 
                }
            })
            
}