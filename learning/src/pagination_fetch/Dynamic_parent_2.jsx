import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Title_2 from './Title_2'
import Explanations from './Explanations'

function Dynamic_parent_2() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Title_2/>}/>
              <Route path='/exp/:id' element={<Explanations/>}/>

          </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default Dynamic_parent_2
