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
import Props from './Components/Reusable/BackColor/Props'
import StringMethods from "./Components/Methods/StringMethods"
import ReusableInput from "./Components/Reusable/InputForm/ReusableInput"
import CustomHook from "./Components/CustomHook/CustomHook"
import UseReducer from "./Components/useReduce/UseReducer"
import Redux from './Components/Redux/Redux'
import ReduxToolkit from './Components/ReduxToolkit/ReduxToolkit'
import ToolkitCounter from "./Components/ToolkitCounter/ToolkitCounter"
import FiverrProject from "./Components/FiverrProject/FiverrProject"
import HomeContext from './Components/Context/HomeContext'
import HooksApp from './Components/UseHooks/HooksApp'

import Main from './Components/Context/Context1/Main'
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
          <Route path='/Props' element={<Props />} />
          <Route path='/SetInterval' element={<SetInterval />} />
          <Route path='/Project1' element={<Project1 />} />
          <Route path='/ArrayMethods' element={<ArrayMethods />} />
          <Route path='/ObjectMethods' element={<ObjectMethods />} />
          <Route path='/StringMethods' element={<StringMethods />} />
          <Route path='/ReusableInput' element={<ReusableInput />} />
          <Route path='/CustomHook' element={<CustomHook />} />
          <Route path='/UseReducer' element={<UseReducer />} />
          <Route path='/Redux' element={<Redux />} />
          <Route path='/ReduxToolkit' element={<ReduxToolkit />} />
          <Route path='/ToolkitCounter' element={<ToolkitCounter />} />
          <Route path='/FiverrProject' element={<FiverrProject />} />
          <Route path='/HomeContext' element={<HomeContext />} />
          <Route path='/HooksApp' element={<HooksApp />} />
          <Route path='/Main' element={<Main />} />



        </Routes>
      </BrowserRouter>
    </>
  )
}
export default AllRouting