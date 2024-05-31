import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/index';
import Detail from './pages/product/index';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/product/:id' element={<Detail />}></Route>
      </Routes>
    </Router>
  )
}

export default App
