import React, { Component } from 'react'
class Navbar extends Component {
    state = {  }
    render() { 
        return (
        <h1>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                </div>
            </nav>
        </h1>
        );
    }
}
 
export default Navbar;