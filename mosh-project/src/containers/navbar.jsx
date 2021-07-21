import React from 'react'

// Stateless Functional Component sfc
const Navbar = ({totalCounters}) => {
    console.log('NavBar Rendered')
    return (
    <h1>
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar
                <span className="badge m-2 bg-">
                    {totalCounters}
                </span>
                </a>
            </div>
        </nav>
    </h1>
    )
}
 
export default Navbar;