import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import { Main } from './component/main/main';
import { Signup } from './component/signup/signup';
import { Login } from './component/login/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/sign-up' element={<Signup/>}/>
        <Route path='/log-in' element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;