import React from 'react'
import {Routes,Route} from "react-router-dom"
import Login from '../Components/Login'
import Signup from '../Components/Signup'
import Home from '../Components/Home'
import Createnote from '../Components/Createnote'
import Notes from '../Components/Notes'
const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Notes/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path="/createnote" element={<Createnote/>}/>
    </Routes>
  )
}

export default AllRoutes