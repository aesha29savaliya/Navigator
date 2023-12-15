import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
       <div>
            <div >
                 <Link to="/" className='link'>Home</Link>
                 <br></br>
                 <Link to="/about" className='link'>About</Link>
                 <br></br>
            </div>
      
    </div>
  )
}

export default Navbar
