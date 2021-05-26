import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg pt-4">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src="/logo.PNG" width="100" className="ms-5" alt="logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className=" nav navbar-nav ms-auto navbar-right">
                            <li className="nav-item">
                                {/* <Link className="nav-link" style={{color: 'white'}} to="/home">Home</Link> */}
                                <button className="btn btn-outline-warning" type="submit"><Link style={{color: 'grey', textDecoration: 'none'}} to="/home">Home</Link></button>

                            </li>
                            <li className="nav-item">
                            <button className="btn btn-outline-warning mx-2" type="submit"><Link style={{color: 'grey', textDecoration: 'none'}} to="/portfolio">Portfolio</Link></button>

                                {/* <Link className="nav-link" style={{color: 'white'}} to="/portfolio">Portfolio</Link> */}
                            </li>
                            <li className="nav-item">
                            <button className="btn btn-outline-warning" type="submit"><Link style={{color: 'grey', textDecoration: 'none'}} to="/blog">Blog</Link></button>

                                {/* <Link className="nav-link" style={{color: 'white'}} to="/blog">Blog</Link> */}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
