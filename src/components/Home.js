import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './Home.css'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <Navbar />
            {/* <nav className="navbar">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="/logo.PNG" alt="" className="mt-3" width="60" />
                    </a>
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav">
                            <a href="#" className="nav-item nav-link active">Home</a>
                            <a href="#" className="nav-item nav-link">Profile</a>
                            <a href="#" className="nav-item nav-link">Messages</a>
                            <a href="#" className="nav-item nav-link disabled" tabindex="-1">Reports</a>
                        </div>
                        <div className="navbar-nav ml-auto">
                            <a href="#" className="nav-item nav-link">Login</a>
                        </div>
                    </div>
                </div>
            </nav> */}

            <section className="bgtop">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="mouse_scroll">

                                <div class="mouse">
                                    <div class="wheel"></div>
                                </div>
                                <div><a href='#about'>
                                    <span class="m_scroll_arrows unu"></span>
                                    <span class="m_scroll_arrows doi"></span>
                                    <span class="m_scroll_arrows trei"></span>
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container-1 pt-5 pb-5 text-center" id='about'>
                <div className='row mt-5 mb-5 '>

                </div>
                <div className="row mt-5 mb-5 ">
                    <div className="col-md-6 col-sm-12 mt-5">
                        <img src='/st-photo.jpg' className="w-50 card-img-top img-fluid rounded-circle mw-25" alt="..." />
                    </div>
                    <div className="col-md-6 col-sm-12 pb-3 text-white" >
                        <h2><b><i className='yes'>Yes, Smith Is My First Name</i></b></h2>
                        <h5 className='mt-5 pt-5 mx-5'>I always knew at a young age that I was going to create. There was always something that I was building or drawing. My mind was always filled with ideas.
                        As I started getting older, I realized I had a knack for it. Classmates were always coming to me for ideas or for help sketching. It was never a burden because I enjoyed it so much.
                        The more I continued to live life, I noticed I had an insatiable desire to always learn. It never really mattered what, if I didn't know it, I wanted to learn. Technology always seemed to
                        fascinate it me. From my first game boy to my first laptop, I always had an interest in the 'what next'. I noticed it growing at a rapid pace. It hit me one day. I enjoy creating, I enjoy
                        learning, and I enjoy tech. It made sense that I become a developer, and here I am now.
                     </h5>
                    </div>

                </div>
            </div>


            <section className="bgimage">
                <div className="skills">
                    <b> my <br />skills</b>
                    <br />
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                    </svg>
                </div>
            </section>





            <div className="container-2 pt-5 text-center">

                <div className="row pt-5">
                    <div className="col ">
                        <img src='/html.png' className="logo img-fluid " alt="html" />
                        <img src='/css.png' className="clogo  img-fluid" alt="css" />
                        <img src='/js.png' className="logo img-fluid" alt="js" />
                        <img src='/react.png' className="logo img-fluid" alt="react" />
                        <img src='/firebase.png' className="logo img-fluid" alt="firebase" />
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col">
                        <img src='/php.png' className="logo img-fluid " alt="php" />
                        <img src='/mysql.png' className="clogo  img-fluid" alt="mysql" />
                        <img src='/laravel.png' className="logo img-fluid" alt="laravel" />
                        <img src='/git.png' className="logo img-fluid" alt="git" />
                        <img src='/agile.png' className="logo img-fluid" alt="agile" />
                    </div>
                </div>
            </div>



            <div className='container text-center mt-5 pt-5'>
                <div className='row '>
                    <div className='col'>
                        <h3> <b>Check Out My Project:</b></h3>
                    </div>
                </div>
                <div className='row justify-content-center text-center'>
                    <div className='col-4'>
                        <a href='https://awesome-sapling.web.app/community' target='_blank'><img src='/SAPLING.png' className="saplogo img-fluid " alt="html" /></a>
                    </div>
                </div>
                <div className='col'>
                    <button type="button" class="btn btn-warning btn-lg"><h2><Link to='/portfolio' style={{color: 'black', textDecoration: 'none'}}>More Projects</Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" fill="currentColor" class="bi bi-door-open-fill" viewBox="0 0 16 16">
                            <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
                        </svg></h2></button>
                </div>

            </div>





            <Footer />

        </div>
    )
}
