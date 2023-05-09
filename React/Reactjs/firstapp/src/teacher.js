import React, { Component } from 'react';
import Footer from './footer';
class Teacher extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
       
  
  <section className="page-header">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-xl-8">
          <div className="title-block">
            <h1>Teacher</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="course">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-4">
          <form method="get" action="#"></form>
        </div>
      </div>
    </div>
    <div className="container mt-3">
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="course-block">
            <div className="course-img">
              <img
                src="assets/images/course/course-1.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="course-content text-center">
              <h4>
                <a href="https://www.youtube.com/results?search_query=the+learn+rituals+in+hindi" className="">
                  Hindi
                </a>
              </h4>
            </div>
          </div>
          <a href="#" className="btn btn-main mb-5 ">
            Enroll{" "}
          </a>
        </div>
      </div>
    </div>
  </section>

  <Footer/>

</div>
        );
    }
}
export default Teacher;