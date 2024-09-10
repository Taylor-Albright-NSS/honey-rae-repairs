import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <ul className='navbar'>
            <li className='navbar-item'>
                <Link className='navbar-link' to="/tickets">Tickets</Link>
            </li>
            <li className='navbar-item'>
                <Link className='navbar-link' to="/customers">Customers</Link>
            </li>
            <li className='navbar-item'>
                <Link className='navbar-link' to="/employees">Employees</Link>
            </li>
        </ul>
    )
}