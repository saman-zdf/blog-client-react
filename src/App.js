import React from 'react';
import Home from './pages/home/Home';
import Settings from './pages/settings/Settings';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import TopBar from './topbar/TopBar';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

const App = () => {
  return (
    <>
      <TopBar />
      <Register />
    </>
  );
};

export default App;
