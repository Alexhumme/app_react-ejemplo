import {useState} from 'react'
import axios from 'axios'
import React from 'react'
import Navbar from './components/navbar'
import Hometasks from './pages/HomeTasks'
import AddTask from './pages/AddTask'
//import AddTask from "./pages/AddTask"
import {Route,Routes} from "react-router-dom" //importar una dependencia de react llamada dom

function App() {
  return(
    <>
      <Navbar />
      
      <Hometasks />

      <AddTask />
      
    </>
  )

}

export default App