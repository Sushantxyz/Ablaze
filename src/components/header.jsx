import { Link } from "react-router-dom";
import {HashLink} from 'react-router-hash-link'


const Header=()=>{
    return(
        <nav id="navbar">
            <h1>Ablaze</h1>
            <main>
                <HashLink to="/#home">Home</HashLink>
                <Link to="/contact">Contact</Link>
                <HashLink to="/#third">About</HashLink>
                <HashLink to="/#home4">Brands</HashLink>
                <Link to="/services">Services</Link>
            </main>
        </nav>
    )
}

export default Header;