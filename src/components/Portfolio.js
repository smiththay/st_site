import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './Portfolio.css'

export default function Portfolio() {

    return (
        <div>
            <Navbar />
            <div className='container text-center mt-5 pt-5'>
                <div className='row pt-5'>
                    <div className='col-md-6 col-sm-12 pt-2'>
                        <div className="card-list">

                            <div className='row d-flex justify-content-center mt-3'>
                                <div className='col-6 border-danger'>
                                    <h2 className="card-title"><b>Sapling</b></h2>
                                    <span><b>Social Budgeting App</b></span>
                                </div>
                            </div>
                            <div className="card-body ">

                                <p className="card-text">Description</p>
                            </div>
                            <h2></h2>
                        </div>
                    </div>
                </div>
            </div>
       
            <Footer />
        </div>
    )
}

