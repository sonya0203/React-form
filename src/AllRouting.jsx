import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WikipediaProject from './WikipediaProject/WikipediaProject'
import Home from "./Components/Form/Home"
import AllHome from './AllHome'
import LocalStorage from "./Components/Storage/LocalStorage/LocalStorage"
import Fetch from "./Components/CustomDialog/Fetch"
import SetInterval from "./Components/SetTimeoutSetInterval/SetInterval"
import Project1 from "./Components/project 1"
import ArrayMethods from "./Components/Methods/ArrayMethods"
import ObjectMethods from "./Components/Methods/ObjectMethods"

function AllRouting() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AllHome />} />
          <Route path='/WikipediaProject' element={<WikipediaProject />} />
          <Route path='/Form' element={<Home />} />
          <Route path='/LocalStorage' element={<LocalStorage />} />
          <Route path='/Fetch' element={<Fetch />} />
          <Route path='/SetInterval' element={<SetInterval />} />
          <Route path='/Project1' element={<Project1 />} />
          <Route path='/ArrayMethods' element={<ArrayMethods />} />
          <Route path='/ObjectMethods' element={<ObjectMethods />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}
export default AllRouting