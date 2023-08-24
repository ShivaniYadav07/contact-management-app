
import {useLocation } from "react-router-dom";
import './App.css';
import SideBar from './components/SideBar';
import AllRoutes from './pages/AllRoutes';
// import { useState } from "react";
import Footer from './footer';


function App() {


  const location = useLocation();
  const currentRoute = location.pathname;
 
  return (
    <div className="App">
      <h1 className='z-50 w-full fixed shadow-sm shadow-slate-700 top-0 text-2xl font-bold p-4' style={{
        background: 'linear-gradient(45deg, rgb(1 119 209), rgb(65 170 175), rgb(118 86 186), rgb(112 167 227), rgb(92 175 181), rgb(171 233 177), #fff1dd, rgb(51 181 229 / 69%)) 0% 0% / 200% 200%',
        backgroundSize: '200% 200%',
        animation: 'gradientAnimation 10s ease infinite',
      }}>
        {
          currentRoute === "/" ? ' Contact Management App' : "Charts and Maps" 
        } 
      </h1>
      <div className='flex w-full '>
        <div className='sticky  top-0 h-screen'>
          <SideBar 
          />
        </div>
        <div className='w-full'>
          <AllRoutes
          />
        <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;