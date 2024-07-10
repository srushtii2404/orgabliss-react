import React, { useEffect } from 'react'
import { Aboutus, Header, MenuContainer } from './Components'
import { Route, Routes } from 'react-router-dom'
import MainContainer from './Components/MainContainer'
import CreateContainer from './Components/CreateContainer'
import {AnimatePresence} from  'framer-motion'
import { useStateValue } from './context/StateProvider'
import { getAllFoodItems } from './utils/firebaseFunctions'
import { actionType } from './context/reducer'

const App = () => {
  const [{},dispatch] = useStateValue()

  const fetchData = async() => {
    await getAllFoodItems().then(data => {
      dispatch({
        type:actionType.SET_FOOD_ITEMS,
        foodItems:data,
      })
    })
  }

  useEffect(() => {fetchData()},[])
  return (

    <AnimatePresence>

    <div className='w-screen h-auto flex flex-col bg-primary'>
      <Header/>

      <main className='mt-14 md:mt-20 px-4 md:px-16 py-4 w-full'>
        <Routes>
          <Route path='/' element={<MainContainer/>}/>
          <Route path='/createItem' element={<CreateContainer/> }/>
          <Route path='/menu' element={<MenuContainer/>}/>
          <Route path='/aboutus' element={<Aboutus/>}/>

        </Routes>
      </main>
    </div>
    </AnimatePresence>
  )
}

export default App