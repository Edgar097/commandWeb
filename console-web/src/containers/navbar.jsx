import React, { Component } from 'react'
class Navbar extends Component {
    state = {  }
    render() { 
        return (
        <h1>
            <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Command Line Lexicon</a>
                    <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </h1>
        );
    }
}
 
export default Navbar;