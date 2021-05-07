import React, { Component } from 'react'
import './App.css';


export default class App extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <div className="App">
        {/* <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <h5 className="text-white h4">Collapsed content</h5>
            <span className="text-muted">Toggleable via the navbar brand.</span>
          </div>
        </div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
 */}
        <nav className="navbar">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src="/logo.png" alt="" className="mt-3" width="60" />
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
           

          <section className="bgimage">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <h1><strong><i>I'm Smith</i></strong></h1>
                  <h4 class='title'><i>Full Stack Web Developer</i></h4>
                </div>
              </div>
            </div>
          </section>




          <div className="container">
            <div className="row mt-5 mb-5 m-0">
              <div className="col-md-6 col-sm-12 pb-3">
                <img src='/st-photo.jpg' className="w-50 card-img-top img-fluid rounded-circle mw-25" alt="..." />
              </div>
              <div className="col-md-6 col-sm-12 pb-3">
              <i class="fab fa-html5"></i>


                <h2>Yes, Smith is my first name...</h2>
                <p>I have always had an urge to create. </p>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum has been the industry's standard dummy. Lorem Ipsum has been the industry's standard dummy.</p>
              </div>
            </div>

          </div>







      </div>
    );
  }
}


