import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Documentations from './Documentations'
import About from './About'
import HowToUse from './HowToUse'
import CodeConversionApp from '../Components/CodeConvert'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
      <Route path='/documentation' element={<Documentations/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/howtouse' element={<HowToUse/>}/>
      <Route path='/' element={<CodeConversionApp/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
