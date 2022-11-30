import axios from 'axios'

export const getSubs = async() =>{
    return await axios
            .get(`${process.env.REACT_APP_API}/subs`)
            
}


export const getSub= async(slug) =>{
    return await axios
            .get(`${process.env.REACT_APP_API}/sub/${slug}`)
            
}
export const removeSub = async(slug, authoken) =>{
    return await axios
            .delete(`${process.env.REACT_APP_API}/sub/${slug}`, 
            {
                headers:{
                    authoken //send in the headers 
                }
            })
            
}


export const updateSub = async(slug, sub, authoken) =>{
    return await axios
            .put(`${process.env.REACT_APP_API}/sub/${slug}`, sub, 
            {
                headers:{
                    authoken //send in the headers 
                }
            })
            
}

export const createSub= async(sub,  authoken) =>{
    return await axios
            .post(`${process.env.REACT_APP_API}/sub`,  sub,
            {
                headers:{
                    authoken //send in the headers 
                }
            })
            
}

export const getSubById = async(id) =>{
    return await axios
            .get(`${process.env.REACT_APP_API}/subs/${id}`)
            
}