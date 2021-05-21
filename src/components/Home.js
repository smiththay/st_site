import React from 'react'
import './Home.css'

export default function Home() {
    return (
        <div>
            <nav className="navbar">
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
            </nav>

            <section className="bgtop">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            {/* <div className='smith'>I'm Smith.</div> */}
                            {/* <div class='sub'><i>Full Stack Web Developer</i></div> */}
                        </div>
                    </div>
                </div>
            </section>

            <div className="container-1 bg-dark pt-5 pb-5">
                <div className='row mt-5 mb-5 '>

                </div>
                <div className="row mt-5 mb-5 ">
                    <div className="col-md-6 col-sm-12 pb-3">
                        <img src='/st-photo.jpg' className="w-50 card-img-top img-fluid rounded-circle mw-25" alt="..." />
                    </div>
                    <div className="col-md-6 col-sm-12 pb-3 text-white">
                        <h2><b><i>Yes, Smith Is My First Name</i></b></h2>
                        <h4 className='mt-5 pt-5 mx-5'>I always knew at a young age that I was going to create. There was always something that I was building or drawing. My mind was always filled with ideas.
                        As I started getting older, I realized I had a knack for it. Classmates were always coming to me for ideas or for help sketching. It was never a burden because I enjoyed it so much.
                        The more I continued to live life, I noticed I had an insatiable desire to always learn. It never really mattered what, if I didn't know it, I wanted to learn. Technology always seemed to
                        fascinate it me. From my first game boy to my first laptop, I always had an interest in the 'what next'. I noticed it growing at a rapid pace. It hit me one day. I enjoy creating, I enjoy
                        learning, and I enjoy tech. It made sense that I become a developer, and here I am now.
                     </h4>
                    </div>
                    <div className='row mt-5 mb-5 '>

                    </div>
                </div>
            </div>


            <section className="bgimage">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            {/* <div className='smith'>I'm Smith.</div> */}
                            {/* <div class='sub'><i>Full Stack Web Developer</i></div> */}
                        </div>
                    </div>
                </div>
            </section>





            <div className="container">
                <div className='row'>
                    <div className='col'>
                        <h1> <b>Skills:</b></h1>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col pb-3">
                        <img src='/html.png' className="logo img-fluid " alt="html" />
                        <img src='/css.png' className="clogo  img-fluid" alt="css" />
                        <img src='/js.png' className="logo img-fluid" alt="js" />
                        <img src='/react.png' className="logo img-fluid" alt="react" />
                        <img src='/firebase.png' className="logo img-fluid" alt="firebase" />
                    </div>
                </div>
                <div className="row mt-5 mb-5">
                    <div className="col pb-3">
                        <img src='/php.png' className="logo img-fluid " alt="php" />
                        <img src='/mysql.png' className="clogo  img-fluid" alt="mysql" />
                        <img src='/laravel.png' className="logo img-fluid" alt="laravel" />
                        <img src='/git.png' className="logo img-fluid" alt="git" />
                        <img src='/agile.png' className="logo img-fluid" alt="agile" />
                    </div>
                </div>
            </div>



            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <h1> <b>Projects:</b></h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-4'>
                        <a href='https://awesome-sapling.web.app/community' target='_blank'><img src='/SAPLING.png' className="saplogo img-fluid " alt="html" /></a>
                    </div>
                </div>
                <div className='col'>
                    <h2>more coming soon...</h2>
                </div>

            </div>




            <div className="footer container-fluid pt-5 text-light ">
                <footer>
                    <div className="row my-5 py-5 bg-secondary">
                        <div className="col-11">
                            <div className="row">
                                <div className="col-xl-8 col-md-4 col-sm-4 col-12 my-auto ">
                                    <img src="/logo.PNG" className="w-25" alt="logo" />
                                </div>

                                <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                                    <h6 className="mb-3 mb-lg-4 bold-text "><b>MENU</b></h6>
                                    <ul className="list-unstyled">
                                        <li><a href='https://smiththaysite.web.app/' target='_blank' style={{ color: 'white', textDecoration: 'none' }}>Blog</a></li>
                                        <li><a href='https://smiththaysite.web.app/' target='_blank' style={{ color: 'white', textDecoration: 'none' }}>Portfolio</a></li>
                                    </ul>
                                </div>
                                <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                                    <h6 className="mb-3 mb-lg-4 bold-text mt-sm-0 mt-5"><b>ADDRESS</b></h6>
                                    <p className="mb-1">348 E Main St, <br /> Lexington, KY</p>

                                </div>
                            </div>



                            <div className="row ">
                                <div className="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                                    <p className="social  mb-0 pb-0 bold-text">

                                        <span className="mx-2"><a href='https://github.com/smiththay' target='_blank' style={{ color: 'white' }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                        </svg></a></span>
                                        <span className="mx-2"><a href='https://www.linkedin.com/in/smiththay/' target='_blank' style={{ color: 'white' }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                        </svg></a></span>

                                    </p>
                                    <small className="rights"><span>&#174;</span> Smith Thay All Rights Reserved.</small>
                                </div>
                                <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                                    <h6 className="mt-55 mt-2 bold-text"><b>AWESOME INC</b></h6><small> <span><i className="fa fa-envelope" aria-hidden="true"></i></span>info@awesomeinc.org</small>
                                </div>
                                <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                                    <h6 className=" bold-text"><b>SMITH THAY</b></h6><small><span><i className="fa fa-envelope" aria-hidden="true"></i></span> contact.smith.thay@gmail.com</small>
                                </div>

                            </div>
                        </div>
                    </div>
                </footer>
            </div>



        </div>
    )
}
