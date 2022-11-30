import axios from 'axios'

export const getCategories = async(authoken) =>{
    return await axios
            .get(`${process.env.REACT_APP_API}/categories`)
            
}


export const getCategory = async(slug) =>{
    return await axios
            .get(`${process.env.REACT_APP_API}/category/${slug}`)
            
}
export const removeCategory = async(slug, authoken) =>{
    return await axios
            .delete(`${process.env.REACT_APP_API}/category/${slug}`, 
            {
                headers:{
                    authoken //send in the headers 
                }
            })
            
}


export const updateCategory = async(slug, category, authoken) =>{
    return await axios
            .put(`${process.env.REACT_APP_API}/category/${slug}`, category, 
            {
                headers:{
                    authoken //send in the headers 
                }
            })
            
}

export const createCategory = async(category, authoken) =>{
    return await axios
            .post(`${process.env.REACT_APP_API}/category`, category , 
            {
                headers:{
                    authoken //send in the headers 
                }
            })
            
}

export const getCategorySubs = async(_id) =>{
    return await axios
            .get(`${process.env.REACT_APP_API}/category/subs/${_id}`)
}

export const findById = async(_id) =>{
    return await axios
            .get(`${process.env.REACT_APP_API}/find/category/${_id}`)
}