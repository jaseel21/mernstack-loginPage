import React from 'react';
import { lazy } from 'react';
import {BrowserRouter ,Routes ,Route} from "react-router-dom"

const SignUp = lazy(()=>import('./SignUp'))
const Login =lazy(()=>import("./Login"))

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<SignUp/>}>

      </Route>
      <Route path='/login'  element={<Login/>}/>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
