import React, {useState} from 'react'
import { Menu, Badge} from 'antd';
import { AppstoreOutlined, SettingOutlined, 
    UserAddOutlined,UserOutlined, 
    LogoutOutlined, ShoppingOutlined, 
    ShoppingCartOutlined, HeartOutlined,
    HistoryOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import firebase from "firebase/compat/app";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Search from '../forms/Search';
import Wishlist from '../../pages/user/Wishlist'


const { SubMenu, Item } = Menu


const Header = () => {
    const [current, setCurrent] = useState('mail');
    let dispatch = useDispatch()
    let history = useHistory()
    let {user, cart} = useSelector((state)=>({...state}))
 
    const onClick = (e) => {
        setCurrent(e.key);
      };
      const logout = () =>{
        firebase.auth().signOut()
        dispatch({
            type:"LOGOUT",
            payload:null
        })
        history.push('/login')
      }

    return (
        <React.Fragment>
        <div className="row mainMenu">
            <Menu  onClick = {onClick} mode="horizontal"  selectedKeys={[current]}>
            
                {!user && (
                    <Item key="register" icon={<UserAddOutlined/>} className="float-right">
                        <Link to  = "/register">Register</Link>
                    </Item>
                )}
                
                {!user && (
                    <Item key="login" icon={<UserOutlined/>}  className="float-right">
                        <Link to  = "/login">Login</Link>
                    </Item>
                )}
                <Item key="home" icon={<AppstoreOutlined/>} >
                    <Link to  = "/">Home</Link>
                </Item>
                <Item key="shop" icon={<ShoppingOutlined/>} >
                    <Link to  = "/shop">Shop</Link>
                </Item>
                <Item key="cart" icon={<ShoppingCartOutlined/>} >
                    <Link to  = "/cart">
                        <Badge count={cart.length} offset={[9,0]}>Cart</Badge>
                    </Link>
                </Item>
                {user && (
                    <SubMenu key="SubMenu" title={user.email && user.email.split('@')[0]} icon={<SettingOutlined />}> 
                        {user && user.role === 'subscriber' && (
                            <Item  key="four" icon={<AppstoreOutlined />}><Link to="/user/history">Dashboard</Link></Item>
                        )}
                        {user && user.role === 'admin' && (
                            <Item key="four"  icon={<AppstoreOutlined />}><Link to="/admin/dashboard">Dashboard</Link></Item>
                        )}
                        <Item key="five" icon={<HeartOutlined />}>
                            <Link to="/user/wishlist" >
                            Wishlist
                            </Link>
                        
                        </Item> 
                        <Item key="six" icon={<HistoryOutlined />}>
                            <Link to="/user/history" >
                            Purchase History
                            </Link>
                        
                        </Item> 
                        <Item key="logout" icon={<LogoutOutlined />} onClick = {logout}>
                            Logout
                        </Item> 
                    </SubMenu>
                )}
                
                
            <Item key="Search" className='float-right p-1'>
                <Search/>
            </Item>
            </Menu>
            </div>           
        </React.Fragment>
       
    )
}
export default Header