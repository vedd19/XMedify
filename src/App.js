
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

function App() {

  const [isHome, setIsHome] = useState(false);
  return (
    <>
      {!isHome && <Navbar isHome={isHome} />}
      <Outlet context={{ setIsHome }} />
    </>
  );
}

export default App;
