import React, { Component } from 'react';

import Footer from './footer';
class CritianCourses extends Component {
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
            <h1>Courses</h1>
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a href="#">Chritian</a>
              </li>
            </ul>
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
          <div className="course-block  ">
            <div className="course-content bg-black">
              <h4>
                <a href="#" className="text-white">
                  Marriage Formality
                </a>
              </h4>
              <div className="course-price">Rs.9,000 </div>
              <div className="course-meta">
                <span className="course-duration text-white">
                  <i className="far fa-file-alt" />
                  29 Lessons
                </span>
              </div>
              <span className="course-cat ">Duration time : 5 months</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="course-block">
            <div className="course-content bg-black">
              <h4>
                <a href="#" className="text-white">
                  Dath formality
                </a>
              </h4>
              <div className="course-price">Rs.17,000 </div>
              <div className="course-meta">
                <span className="course-duration text-white">
                  <i className="far fa-file-alt" />
                  59 Lessons
                </span>
              </div>
              <span className="course-cat ">Duration time : 7 months</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="course-block">
            <div className="course-content bg-black">
              <h4>
                <a href="#" className="text-white">
                  {" "}
                  Birth formality
                </a>
              </h4>
              <div className="course-price">Rs.5,000 </div>
              <div className="course-meta">
                <span className="course-duration text-white">
                  <i className="far fa-file-alt" />
                  56 Lessons
                </span>
              </div>
              <span className="course-cat ">Duration time : 5 months</span>
            </div>
          </div>
        </div>
        {/* <div class="row">
          <div class="col-lg-12">
              <nav class="post-navigation text-center">
                  <ul>
                      <li class="page-num active" aria-current="page">
                          <span class="page-url">
                              1
                              <span class="sr-only">(current)</span>
                          </span>
                      </li>
                      <li class="page-num"><a class="page-url" href="#">2</a></li>
                      <li class="page-num"><a class="page-url" href="#">3</a></li>
                      <li class="page-num"><a class="page-url" href="#"><i class="fa fa-angle-right"></i></a></li>
                  </ul>
              </nav>
          </div>
      </div> */}
      </div>
    </div>
  </section>




                <Footer/>
            </div>
        );
    }
}
export default CritianCourses;