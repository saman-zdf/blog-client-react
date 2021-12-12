import React, { useContext } from 'react';
import Home from './pages/home/Home';
import Settings from './pages/settings/Settings';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import TopBar from './topbar/TopBar';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Context } from './context/Context';

const App = () => {
  const { user } = useContext(Context);
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={user ? <Home /> : <Register />} />
        <Route path='/login' element={user ? <Home /> : <Login />} />
        <Route path='/write' element={user ? <Write /> : <Register />} />
        <Route path='/setting' element={user ? <Settings /> : <Register />} />
        <Route path='/post/:postId' element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
