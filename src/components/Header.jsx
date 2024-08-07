import React from 'react';
import './Css/Header.css';
import {Link} from 'react-router-dom'
const Header = ()=>{
    return (
        <div>
<nav>
    <ul>
      <Link to='/'><li>Home</li></Link>
       <Link to="/about"><li>About</li></Link> 
       <Link to="/contact"><li>Contact</li></Link> 
       <Link to="/project"><li>Project</li></Link> 
       <Link to="/service"><li>Service</li></Link> 
       <Link to="/register"><li>Sign Up</li></Link> 
       <Link to="/login"><li>Sign IN</li></Link> 
       <Link to="/logout"><li>Logout</li></Link> 
        
    </ul>
</nav>

        </div>
    )
}

export default Header;


