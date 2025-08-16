import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';


const App = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default App
