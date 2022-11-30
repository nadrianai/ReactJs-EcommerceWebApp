import './App.css';
import { Route, Switch } from 'react-router-dom';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import React, {useEffect, lazy, Suspense } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


import {currentUser} from './functions/auth'
import {auth} from './firebase'
import {useDispatch} from 'react-redux'
import {LoadingOutlined} from '@ant-design/icons'


const Header = lazy(()=> import('./component/nav/Header')) 
const RegisterComplete = lazy(()=> import('./pages/auth/RegisterComplete')) 
const Login = lazy(()=> import('./pages/auth/Login')) 
const Home = lazy(()=> import('./pages/Home')) 
const Register = lazy(()=> import('./pages/auth/Register')) 
const UserRoute = lazy(()=> import('./component/routes/UserRoute')) 
const ForgotPassword = lazy(()=> import('./pages/auth/ForgotPassword')) 
const History = lazy(()=> import('./pages/user/History')) 

const Password = lazy(()=> import('./pages/user/Password')) 
const Wishlist = lazy(()=> import('./pages/user/Wishlist')) 
const AdminRoute = lazy(()=> import('./component/routes/AdminRoute')) 
const AdminDashboard = lazy(()=> import( './pages/admin/AdminDashboard'))
const CategoryCreate = lazy(()=> import('./pages/admin/category/CategoryCreate')) 
const CategoryUpdate = lazy(()=> import('./pages/admin/category/CategoryUpdate')) 
const SubCreate = lazy(()=> import('./pages/admin/sub/SubCreate')) 
const SubUpdate = lazy(()=> import('./pages/admin/sub/SubUpdate')) 
const ProductCreate = lazy(()=> import( './pages/admin/product/ProductCreate'))
const AllProducts = lazy(()=> import('./pages/admin/product/AllProducts')) 
const ProductUpdate = lazy(()=> import('./pages/admin/product/ProductUpdate')) 
const Product = lazy(()=> import('./pages/Product')) 
const CategoryHome = lazy(()=> import('./pages/category/CategoryHome')) 
const SubHome = lazy(()=> import('./pages/sub/SubHome')) 
const Shop = lazy(()=> import('./pages/Shop')) 
const Cart = lazy(()=> import('./pages/Cart')) 
const SideDrawer = lazy(()=> import('./component/drawer/SideDrawer')) 
const Checkout = lazy(()=> import('./pages/Checkout')) 
const CreateCoupon = lazy(()=> import('./pages/admin/coupon/CreateCoupon')) 
const Payment = lazy(()=> import('./pages/Payment')) 

const App = () => {
  const dispatch = useDispatch()
  //check firebase auth state
  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged(async (user) =>{
      if(user){
        const idTokenResult = await user.getIdTokenResult()
        currentUser(idTokenResult.token)
        .then((res)=>{
          dispatch({
            type:"LOGGED_IN_USER",
            payload:{
                email:res.data.email,
                name:res.data.name,
                token:idTokenResult.token,
                role:res.data.role,
                _id:res.data._id
            }
        })
        })
        .catch((err)=>{
          console.log(err)
        })
      
      }
    })
    return () => unsubscribe()
  }, [dispatch])


  return (
      <Suspense fallback={
        <div className='col text-center p-5'>
          __React Redux EC <LoadingOutlined>

          </LoadingOutlined>EMMERCE___
        </div>
      }>
      <Header/>
      <SideDrawer/>
      <ToastContainer/>
        <Switch>
          <Route exact path="/login"><Login/></Route>
          <Route exact path="/"><Home/></Route>
          <Route exact path="/register"><Register/></Route>
          <Route exact path="/register/complete"><RegisterComplete/></Route>
          <Route exact path="/forgot/password"><ForgotPassword/></Route>
          <UserRoute exact path="/user/history"><History/></UserRoute>
          <UserRoute exact path="/user/password"><Password/></UserRoute>
          <UserRoute exact path="/user/wishlist"><Wishlist/></UserRoute>
          <AdminRoute exact path="/admin/dashboard"><AdminDashboard/></AdminRoute>
          <AdminRoute exact path="/admin/category"><CategoryCreate/></AdminRoute>
          <AdminRoute exact path="/admin/category/:slug"><CategoryUpdate/></AdminRoute>
          <AdminRoute exact path="/admin/sub"><SubCreate/></AdminRoute>
          <AdminRoute exact path="/admin/sub/:slug"><SubUpdate/></AdminRoute>
          <AdminRoute exact path="/admin/product"><ProductCreate/></AdminRoute>
          <AdminRoute exact path="/admin/products"><AllProducts/></AdminRoute>
          <AdminRoute exact path="/admin/products/:slug"><ProductUpdate/></AdminRoute>
          <AdminRoute exact path="/admin/coupon"><CreateCoupon/></AdminRoute>

          <Route exact path="/product/:slug"><Product/></Route>
          <Route exact path="/category/:slug"><CategoryHome/></Route>
          <Route exact path="/sub/:slug"><SubHome/></Route>
          <Route exact path="/shop"><Shop/></Route>
          <Route exact path="/cart"><Cart/></Route>
          <Route exact path="/checkout"><Checkout/></Route>
          <Route exact path="/payment"><Payment/></Route>














        </Switch>
      </Suspense>
     
  );
}

export default App;
