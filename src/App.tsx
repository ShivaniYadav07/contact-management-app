import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import SideBar from './components/SideBar';
import AllRoutes from './pages/AllRoutes';
import Footer from './footer';
import Alert from './Alert';

function App() {
  const location = useLocation();
  const currentRoute = location.pathname;

  const [mode, setMode] = useState('light');
  const [btnText, setBtnText] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState<{
    msg: string;
    type: string;
  } | null>(null);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setBtnText(' Disable Dark Mode');
      showAlert('Dark mode has been Enabled', 'success');
      document.body.style.background = '#042743';
      document.body.style.color = 'white';
    } else {
      setMode('light');
      setBtnText(' Enable Dark Mode');
      showAlert('Dark mode has been Disabled', 'success');
      document.body.style.background = 'white';
      document.body.style.color = '#000';
    }
  };

  const showAlert = (message: string, type: string) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <div className={`App ${mode}`}>
      <h1
        className='z-50 w-full fixed shadow-sm shadow-slate-700 top-0 text-2xl font-bold p-4'
        style={{
          background:
            'linear-gradient(45deg, rgb(1 119 209), rgb(65 170 175), rgb(118 86 186), rgb(112 167 227), rgb(92 175 181), rgb(171 233 177), #fff1dd, rgb(51 181 229 / 69%)) 0% 0% / 200% 200%',
          backgroundSize: '200% 200%',
          animation: 'gradientAnimation 10s ease infinite',
        }}
      >
        {currentRoute === '/' ? ' Contact Management App' : 'Charts and Maps'}
      </h1>
      <div className='flex w-full '>
        <div className='sticky  top-0 h-screen'>
          <SideBar
            mode={mode}
            toggleMode={toggleMode}
            btnText={btnText}
            showAlert={showAlert}
          />
        </div>
        <div className='w-full'>
          <AllRoutes />
        <Alert alert={alert} />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
