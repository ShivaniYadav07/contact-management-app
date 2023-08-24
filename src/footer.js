import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer(props) {
  return (
    <footer  className="mt-5 p-1 mb-4 font-bold">
        Copyright &copy; 2023 TextUtils | Developed By <a className= "pointer text-decoration-none text" href="https://shivaniyadav.online/" target="_blank" rel="noreferrer">Shivani Yadav</a> | <Link className={`text-decoration-none text-${props.mode==='light'?'dark':'light'}`} to="/privacy">Privacy Policy</Link> | <Link className={`text-decoration-none text-${props.mode==='light'?'dark':'light'}`} to="/terms">Terms of Use</Link>
    </footer>
  )
}