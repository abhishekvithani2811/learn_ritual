import React, { Component } from 'react';
import Footer from './footer';
import { Link } from 'react-router-dom';
class Language extends Component {
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
            <h1>Demo Course</h1>
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
                src="assets/images/course/hindu1.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="course-content text-center">
              <h4>
                
                <Link to="" className="">
                Hinduism
                </Link>
              </h4>
            </div>
          </div>
          <a href="https://youtu.be/Glb7oa3BSIo" className="btn btn-main mb-5 ">
          View Demo
          </a>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="course-block">
            <div className="course-img">
              <img
                src="assets/images/course/islam1.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="course-content text-center">
              <h4>
                <a href="https://www.youtube.com/results?search_query=the+learn+rituals+in+gujrati" className="">
                  Islam
                </a>
              </h4>
            </div>
          </div>
          <a href="https://youtu.be/PQy7BqEFlvY" className="btn btn-main mb-5 ">
          View Demo
          </a>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="course-block">
            <div className="course-img">
              <img
                src="assets/images/course/jain1.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="course-content text-center">
              <h4>
                <a href="https://www.youtube.com/results?search_query=the+learn+rituals+in+english" className="">
                Jainism 
                </a>
              </h4>
            </div>
          </div>
          <a href="https://youtu.be/KkwmYlgkOhU" className="btn btn-main mb-5 ">
          View Demo
          </a>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="course-block">
            <div className="course-img">
              <img
                src="assets/images/course/sikh1.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="course-content text-center">
              <h4>
                <a href="https://youtu.be/Ms-VvgxD25o" className="">
                Sikhism
                </a>
              </h4>
            </div>
          </div>
          <a href="https://youtu.be/Ms-VvgxD25o" className="btn btn-main mb-5 ">
          View Demo
          </a>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="course-block">
            <div className="course-img">
              <img
                src="assets/images/course/budhdh1.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="course-content text-center">
              <h4>
                <a href="https://www.youtube.com/results?search_query=the+learn+rituals+in+english" className="">
                Buddhism
                </a>
              </h4>
            </div>
          </div>
          <a href="https://youtu.be/qkNrDRdKalA" className="btn btn-main mb-5 ">
          View Demo
          </a>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="course-block">
            <div className="course-img">
              <img
                src="assets/images/course/cristian.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="course-content text-center">
              <h4>
                <a href="https://www.youtube.com/results?search_query=the+learn+rituals+in+english" className="">
                Christianity
                </a>
              </h4>
            </div>
          </div>
          <a href="https://youtu.be/_Tgbi6Mk5A4" className="btn btn-main mb-5 ">
            View Demo
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
export default Language;