import React from 'react';
import Home from './pages/home/Home';
import TopBar from './topbar/TopBar';

const App = () => {
  return (
    <>
      <TopBar />
      <Home />
      <div className='hello'></div>
    </>
  );
};

export default App;
