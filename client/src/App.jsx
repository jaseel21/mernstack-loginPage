import React from 'react';
import SignUp from './SignUp.jsx';
import Login from './Login.jsx';
import {BrowserRouter ,Routes ,Route} from "react-router-dom"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<h1>home</h1>} />
      <Route path='/signup' element={<SignUp/>}>

      </Route>
      <Route path='/login'  element={<Login/>}/>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
