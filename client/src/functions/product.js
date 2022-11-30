import axios from 'axios'


export const createProduct = async(product, authoken) =>{
    return await axios
            .post(`${process.env.REACT_APP_API}/product`, product , 
            {
                headers:{
                    authoken  
                }
            })
            
}


export const getProducstByCart = async(count) =>{
    return await axios
            .get(`${process.env.REACT_APP_API}/products/${count}`)
            
}

export const removeProduct = async(slug, authoken) =>{
    return await axios
            .delete(`${process.env.REACT_APP_API}/products/${slug}`, {
                headers:{
                    authoken
                }
            })
            
}


export const readProduct = async(slug) =>{
    return await axios
            .get(`${process.env.REACT_APP_API}/product/read/${slug}`)
            
}

export const updateProduct = async(slug, product,  authoken) =>{
    return await axios
            .put(`${process.env.REACT_APP_API}/product/${slug}`, product , {
                headers:{
                    authoken
                }
            })
            
}

export const getProducts = async(sort, order, page) =>{
    return await axios
            .post(`${process.env.REACT_APP_API}/products`, {sort, order, page} )
            
}

export const getProductsCount = async() =>{
    return await axios
            .get(`${process.env.REACT_APP_API}/products/total/number`)
            
}

export const productStar = async(productId, star,  authoken) =>{
    return await axios
            .put(`${process.env.REACT_APP_API}/product/star/${productId}`, {star} , {
                headers:{
                    authoken
                }
            })
            
}

export const getRelated = async(productId) =>{
    return await axios
            .get(`${process.env.REACT_APP_API}/product/related/${productId}`)
            
}

export const fetchProductsByFilter = async(arg) =>{
    return await axios
            .post(`${process.env.REACT_APP_API}/search/filters`, arg)
            
}