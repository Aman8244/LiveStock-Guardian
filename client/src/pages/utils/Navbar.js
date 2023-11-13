import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div>
       <header>
                <nav>
                    <div className="logo">
                        <div className='nav-title'>
                            <Link to={"/"}>Livestock Guardian</Link>
                        </div>
                        {/* <div className="nav-links">
                            <Link to={"/auth"}>Sign Up!</Link>
                        </div> */}
                    </div>
                </nav>
            </header>
    </div>
  )
}

export default Navbar
