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

                                <p className="card-text">This full stack app was built with HTML, JavaScript, CSS, React.js, Bootstrap, PHP, and Laravel</p>
                            </div>
                            <button><a href='https://awesome-sapling.web.app/' target='_blank'>Demo</a></button><button><a href='https://github.com/smiththay/sapling' target='_target'>GitHub</a></button>
                        </div>
                    </div>

                    <div className='col-md-6 col-sm-12 pt-2'>
                        <div className="card-list">

                            <div className='row d-flex justify-content-center mt-3'>
                                <div className='col-6 border-danger'>
                                    <h2 className="card-title"><b>Library</b></h2>
                                    <span><b>Simulated Library Database</b></span>
                                </div>
                            </div>
                            <div className="card-body ">

                                <p className="card-text">Week 8 project was built with PHP and Laravel. Learning to build API</p>
                            </div>
                            <button><a href='https://github.com/smiththay/laravel-library' target='_target'>GitHub</a></button>
                        </div>
                    </div>


                    <div className='col-md-6 col-sm-12 pt-2'>
                        <div className="card-list">

                            <div className='row d-flex justify-content-center mt-3'>
                                <div className='col-6 border-danger'>
                                    <h2 className="card-title"><b>Fishing Hooks</b></h2>
                                    <span><b>Bait Store Website</b></span>
                                </div>
                            </div>
                            <div className="card-body ">

                                <p className="card-text">Week 9 learning React hooks</p>
                            </div>
                            <button><a href='https://github.com/smiththay/react-restaurant' target='_target'>GitHub</a></button>
                        </div>
                    </div>



                    <div className='col-md-6 col-sm-12 pt-2'>
                        <div className="card-list">

                            <div className='row d-flex justify-content-center mt-3'>
                                <div className='col-6 border-danger'>
                                    <h2 className="card-title"><b>Restaurant</b></h2>
                                    <span><b>Restaurant Menu</b></span>
                                </div>
                            </div>
                            <div className="card-body ">

                                <p className="card-text">Week 5 using a custom API to generate a sample menu</p>
                            </div>
                            <button><a href='https://github.com/smiththay/react-restaurant' target='_target'>GitHub</a></button>
                        </div>
                    </div>

                    <div className='col-md-6 col-sm-12 pt-2'>
                        <div className="card-list">

                            <div className='row d-flex justify-content-center mt-3'>
                                <div className='col-6 border-danger'>
                                    <h2 className="card-title"><b>Tic-Tac-Toe</b></h2>
                                    <span><b>3-in-a-row</b></span>
                                </div>
                            </div>
                            <div className="card-body ">

                                <p className="card-text">Week 3 learning dynamic rendering and MVC</p>
                            </div>
                            <button><a href='https://smiththay.github.io/tic-tac-toe/' target='_blank'>Demo</a></button><button><a href='https://github.com/smiththay/tic-tac-toe' target='_target'>GitHub</a></button>
                        </div>
                    </div>

                    <div className='col-md-6 col-sm-12 pt-2'>
                        <div className="card-list">

                            <div className='row d-flex justify-content-center mt-3'>
                                <div className='col-6 border-danger'>
                                    <h2 className="card-title"><b>To-Do List</b></h2>
                                    <span><b>Create, Delete, Mark Complete Tasks</b></span>
                                </div>
                            </div>
                            <div className="card-body ">

                                <p className="card-text">Week 4 learning React to manage state and local storage to keep track of data</p>
                            </div>
                            <button><a href='https://react-to-do-1c070.web.app/' target='_blank'>Demo</a></button><button><a href='https://github.com/smiththay/todo-list' target='_target'>GitHub</a></button>
                        </div>
                    </div>

                    <div className='col-md-6 col-sm-12 pt-2'>
                        <div className="card-list">

                            <div className='row d-flex justify-content-center mt-3'>
                                <div className='col-6 border-danger'>
                                    <h2 className="card-title"><b>Puzzle Slider</b></h2>
                                    <span><b>Get the pieces in the right place!</b></span>
                                </div>
                            </div>
                            <div className="card-body ">

                                <p className="card-text">Week 6 using react.js to dynamically parse the image, render the puzzle pieces in real time, and keep track of puzzle state</p>
                            </div>
                            <button><a href='https://awesomepuzzleslider.web.app/' target='_blank'>Demo</a></button><button><a href='https://github.com/smiththay/puzzle-slider' target='_target'>GitHub</a></button>
                        </div>
                    </div>


                    <div className='col-md-6 col-sm-12 pt-2'>
                        <div className="card-list">

                            <div className='row d-flex justify-content-center mt-3'>
                                <div className='col-6 border-danger'>
                                    <h2 className="card-title"><b>SQL Heroes</b></h2>
                                    <span><b>backend for Facebook for Superheroes</b></span>
                                </div>
                            </div>
                            <div className="card-body ">

                                <p className="card-text">Week 7 learning PHP and MySQL</p>
                            </div>
                            <button><a href='https://github.com/smiththay/SQLheroes' target='_target'>GitHub</a></button>
                        </div>
                    </div>


                    <div className='col-md-6 col-sm-12 pt-2'>
                        <div className="card-list">

                            <div className='row d-flex justify-content-center mt-3'>
                                <div className='col-6 border-danger'>
                                    <h2 className="card-title"><b>Mind Reader</b></h2>
                                    <span><b>Predicts the number you're thinking of</b></span>
                                </div>
                            </div>
                            <div className="card-body ">

                                <p className="card-text">Week 2 learning about state management</p>
                            </div>
                            <button><a href='https://smiththay.github.io/mind_reader/' target='_blank'>Demo</a></button><button><a href='https://github.com/smiththay/mind_reader' target='_target'>GitHub</a></button>
                        </div>
                    </div>

                    <div className='col-md-6 col-sm-12 pt-2'>
                        <div className="card-list">

                            <div className='row d-flex justify-content-center mt-3'>
                                <div className='col-6 border-danger'>
                                    <h2 className="card-title"><b>Weather</b></h2>
                                    <span><b>Get the weather of any US zip code</b></span>
                                </div>
                            </div>
                            <div className="card-body ">

                                <p className="card-text">Week 2 using HTML, CSS, JS, and Bootstrap learning to use an external API to retrieve data</p>
                            </div>
                            <button><a href='https://smiththay.github.io/weather-app/' target='_blank'>Demo</a></button><button><a href='https://github.com/smiththay/weather-app' target='_target'>GitHub</a></button>
                        </div>
                    </div>

                    <div className='col-md-6 col-sm-12 pt-2'>
                        <div className="card-list">

                            <div className='row d-flex justify-content-center mt-3'>
                                <div className='col-6 border-danger'>
                                    <h2 className="card-title"><b>Vote for Nacho</b></h2>
                                    <span><b>Campaign website for Nacho Libre</b></span>
                                </div>
                            </div>
                            <div className="card-body ">

                                <p className="card-text">Week 1 learning Bootstrap.</p>
                            </div>
                            <button><a href='https://smiththay.github.io/campaign_components/' target='_blank'>Demo</a></button><button><a href='https://github.com/smiththay/campaign_components' target='_target'>GitHub</a></button>
                        </div>
                    </div>

                    <div className='col-md-6 col-sm-12 pt-2'>
                        <div className="card-list">

                            <div className='row d-flex justify-content-center mt-3'>
                                <div className='col-6 border-danger'>
                                    <h2 className="card-title"><b>Silly Story</b></h2>
                                    <span><b>Generates a silly story with any given name</b></span>
                                </div>
                            </div>
                            <div className="card-body ">

                                <p className="card-text">Pre-work learning HTML, CSS, and JS</p>
                            </div>
                            <button><a href='https://smiththay.github.io/sillystory/' target='_blank'>Demo</a></button><button><a href='https://github.com/smiththay/sillystory' target='_target'>GitHub</a></button>
                        </div>
                    </div>

                    <div className='col-md-6 col-sm-12 pt-2'>
                        <div className="card-list">

                            <div className='row d-flex justify-content-center mt-3'>
                                <div className='col-6 border-danger'>
                                    <h2 className="card-title"><b>Digital Clock</b></h2>
                                    <span><b>Get current time in standard and military</b></span>
                                </div>
                            </div>
                            <div className="card-body ">

                                <p className="card-text">Pre-work learning HTML, CSS, and JS</p>
                            </div>
                            <button><a href='https://smiththay.github.io/digital_clock/' target='_blank'>Demo</a></button><button><a href='https://github.com/smiththay/digital_clock' target='_target'>GitHub</a></button>
                        </div>
                    </div>

                    <div className='col-md-6 col-sm-12 pt-2'>
                        <div className="card-list">

                            <div className='row d-flex justify-content-center mt-3'>
                                <div className='col-6 border-danger'>
                                    <h2 className="card-title"><b>Countdown Timer</b></h2>
                                    <span><b>Counting down till we meet in person at bootcamp</b></span>
                                </div>
                            </div>
                            <div className="card-body ">

                                <p className="card-text">Pre-work learning HTML, CSS, and JS</p>
                            </div>
                            <button><a href='https://smiththay.github.io/countdown_timer/' target='_blank'>Demo</a></button><button><a href='https://github.com/smiththay/countdown_timer' target='_target'>GitHub</a></button>
                        </div>
                    </div>




                </div>
            </div>

            <Footer />
        </div>
    )
}

