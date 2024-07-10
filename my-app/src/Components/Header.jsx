import React, { useState } from 'react';
import Logo from '../img/main-logo.png';
import { IoCart } from "react-icons/io5";
import { IoAdd } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { Link, json } from 'react-router-dom';
import Avatar from '../img/avatar.png';
import { motion } from 'framer-motion';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { app } from '../firebase.config';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

const Header = (providerData) => {
const firebaseAuth = getAuth(app);
const provider = new GoogleAuthProvider();

const [{ user,cartShow,cartItems }, dispatch] = useStateValue();

const [isMenu, setIsMenu] = useState(false);
const [isLoggingIn, setIsLoggingIn] = useState(false); 

const showCart = () => {

  dispatch({
    type:actionType.SET_CART_SHOW,
    cartShow:!cartShow,
  })

}

const login = async () => {

if(!user){
  const{
    user:{refreshToken,providerData},
  }=await signInWithPopup(firebaseAuth,provider)
  dispatch({
    type:actionType.SET_USER,
    user:providerData[0],
  })
  localStorage.setItem("user",JSON.stringify(providerData[0]))
}else{
  setIsMenu(!isMenu)
}


}

const logout = async () => {
alert("You Have been LoggedOut Successfully!!")
await signOut(firebaseAuth);
dispatch({
type: actionType.SET_USER,
user: null,
});
localStorage.removeItem('user');
setIsMenu(false);

}

return (
<header className='fixed z-50 w-screen bg-primary p-3 px-4 md:p-6 md:px-16'>
  <div className='hidden md:flex w-full h-full items-center justify-between'>

    <Link to='/' className='flex items-center gap-0'>
    <img src={Logo} alt="logo" className='w-12 object-cover' />
    <p className='text-xl font-bold text-headingColor'>ORGABLISS</p> {/* Title */}
    </Link>

    <div className='flex items-center gap-8'>
      <motion.ul initial={{opacity:0,x:200}} animate={{opacity:1,x:0}} exit={{opacity:0,x:200}}
        className='flex items-center gap-8'>
        <Link to='/'>
        <li
          className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
          Home</li>
        </Link>
        <Link to='/menu'>
        <li
          className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
          Menu</li>
        </Link>
        <Link to='/aboutus'>
        <li
          className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
          About Us</li>
        </Link>
        
      </motion.ul>

      <div className='relative flex items-center justify-center'>
        <IoCart className='text-textColor text-2xl cursor-pointer' onClick={showCart}/>

        {
          cartItems && cartItems.length > 0 && (
            <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
          <p className='text-xs text-white font-semibold'>{cartItems.length}</p>
        </div>
          )
        }
      </div>

      <div className='relative'>
        <motion.img whileTap={{ scale: 0.6 }} src={user ? user.photoURL : Avatar} alt="userprofile"
          className='w-7 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full' onClick={login} />

        {
        isMenu && (
        <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale:
          0.6 }} className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0'>
          {
          user && user.email === "srushtigohel2404@gmail.com" && (
          <Link to='./createItem'>
          <p
            className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>
            New Item
            <IoAdd />
          </p>
          </Link>
          )
          }
          <p onClick={logout}
            className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>
            Logout
            <LuLogOut />
          </p>
        </motion.div>
        )
        }

      </div>
    </div>
  </div>

  {/* Mobile */}

     
  <div className='flex items-center justify-between md:hidden w-full h-full'>

  <div className='relative flex items-center justify-center' onClick={showCart}>
        <IoCart className='text-textColor text-2xl cursor-pointer' />
        {
          cartItems && cartItems.length > 0 && (
            <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
          <p className='text-xs text-white font-semibold'>{cartItems.length}</p>
        </div>
          )
        }
      </div>


    <Link to='/' className='flex items-center gap-0'>
    <img src={Logo} alt="logo" className='w-12 object-cover' />
    <p className='text-xl font-bold text-headingColor'>ORGABLISS</p> 
    </Link>

    

    <div className='relative'>
      <motion.img whileTap={{ scale: 0.6 }} src={user ? user.photoURL : Avatar} alt="userprofile"
        className='w-7 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full' onClick={login} />

      {
      isMenu && (
      <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6
        }} className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0'>
        {
        user && user.email === "srushtigohel2404@gmail.com" && (
        <Link to='./createItem'>
        <p
          className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'
          onClick={() => setIsMenu(false)}>
          New Item
          <IoAdd />
        </p>
        </Link>
        )
        }

        <ul  className='flex flex-col'>
         
          <Link to='/'>
          <li
            className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2'
            onClick={() => setIsMenu(false)}>
            Home</li>
          </Link>
          <Link to='/menu'>
          <li
            className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2'
            onClick={() => setIsMenu(false)}>
            Menu</li>
          </Link>
          <Link to='/about'>
          <li
            className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2'
            onClick={() => setIsMenu(false)}>
            About Us</li>
          </Link>
          <Link to='/services'>
          <li
            className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2'
            onClick={() => setIsMenu(false)}>
            Services</li>
          </Link>
        </ul>

        <p onClick={logout}
          className='m-2 p-2 rounded-sm shadow-md justify-center bg-gray-100 flex items-center gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base'>
          Logout
          <LuLogOut />
        </p>
      </motion.div>
      )
      }

    </div>
  </div>
</header>
);
}

export default Header;