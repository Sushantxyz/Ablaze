import Header from "./components/header";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import { Home } from "./components/Home";
import {Contact} from "./components/Contact.jsx";
import Services from "./components/services.jsx";
import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/Home.scss";
import "./styles/contact.scss";
import "./styles/mediaq.scss";





function App() {
  return (
    
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>

      </Routes>
    </Router>
  );
}

export default App;
{/* <Route path="/" element={<Home/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/" element={<Home/>} /> */}