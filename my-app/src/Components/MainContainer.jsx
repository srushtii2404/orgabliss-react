import React, { useEffect, useState } from 'react';
import delivery from '../img/delivery.png';
import HomeContainer from './HomeContainer';
import { motion } from 'framer-motion';
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import RowContainer from './RowContainer';
import { useStateValue } from '../context/StateProvider';
import MenuContainer from './MenuContainer';
import CartContainer from './CartContainer';
import CartItem from './CartItem';
import Footer from './Footer';
import Aboutus from './Aboutus';


const MainContainer = () => {
  const [{foodItems,cartShow},dispatch] = useStateValue()
  const [scrollValue,setScrollValue] = useState(0)



  useEffect(() => {

  },[scrollValue,cartShow])

 

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>

      <HomeContainer/>
     

      <section className="w-full my-32">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
            Our fresh & healthy fruits
          </p>

          <div className="hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer  hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(-900)}
            >
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(900)}
            >
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
        </div>
        <RowContainer
          scrollValue={scrollValue}
          flag={true}
          data={foodItems?.filter((n) => n.category === "Fruits")}
        />
      </section>

      <MenuContainer/>

      {cartShow && <CartContainer />}
      <Aboutus/>
    <Footer/>
    </div>

  );
}

export default MainContainer;
