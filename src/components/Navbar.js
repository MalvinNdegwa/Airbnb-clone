import './Navbar.css'
import logo from './airbnb 1.png'
export default function Navbar() {
    return (
        <nav className="Header" >
            <img src={logo} alt="airbnb logo"/>
        </nav>
    )
}