import React from 'react';
import { Link } from 'react-router-dom'

const Header = (props) => {

    return (
        <div className='navbar'>
            <div className='header'>
                <Link to ="/">Polls</Link>
                </div>
            <ul>
            <Link to="/">Polls</Link>
            <Link to="/home">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/president">Presidential Race</Link>
            <Link to="/senate">Senate Races</Link>
            <Link to="/congress">Congressional Races</Link>
            </ul>
        </div>
    )
}

export default Header;