
import {Route,Routes} from "react-router-dom"
import Contacts from "./Contacts"
import Dashboard from "./Charts_and_Maps"
import EditContact from "../components/EditContact"
import ContactForm from "../components/ContactForm"
import { useState } from "react"
const AllRoutes=()=>{

    const [mode, setMode] = useState('light')
  const [btnText, setBtnText] = useState('Enable Dark Mode')
  
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setBtnText("Disable Dark Mode");
      // showAlert("Dark mode has been Enabled", "success");
      document.body.style.background = '#042743';
    }
    else {
      setMode('light');
      setBtnText('Enable Dark Mode');
      // showAlert("Dark mode has been Disabled", "success");
      document.body.style.background = 'white';
    }
  }

    return(
        <Routes >
            <Route path="/" element={<Contacts />}/>
            <Route path="/contactForm" element={<ContactForm mode={mode}
          toggleMode={toggleMode}
          btnText={btnText} />}/>
            <Route path="/dashboard" element={<Dashboard mode={mode}
          toggleMode={toggleMode}
          btnText={btnText}  />} />
            <Route path="/edit/:id" element={<EditContact mode={mode}
            toggleMode={toggleMode}
            btnText={btnText} />}/>
        </Routes>
    )
}

export default AllRoutes