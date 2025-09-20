
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function App() {

  const [isHome, setIsHome] = useState(false);
  return (
    <>
      {!isHome && <Navbar />}
      <Outlet context={{ setIsHome }} />
      <Footer />
    </>
  );
}

export default App;
