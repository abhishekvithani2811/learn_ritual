import React, { Component } from 'react';

import Footer from './footer';
class JainCourses extends Component {
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
                <a href="#">Jain</a>
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
                  Dev Shastra Guru Pooja
                </a>
              </h4>
              <div className="course-price">Rs.2,000 </div>
              <div className="course-meta">
                <span className="course-duration text-white">
                  <i className="far fa-file-alt" />
                  12 Lessons
                </span>
              </div>
              <span className="course-cat ">Duration time : 1 months</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="course-block">
            <div className="course-content bg-black">
              <h4>
                <a href="#" className="text-white">
                  Ravi Vrat Pooja
                </a>
              </h4>
              <div className="course-price">Rs.14,000 </div>
              <div className="course-meta">
                <span className="course-duration text-white">
                  <i className="far fa-file-alt" />
                  23 Lessons
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
                  Panchmeru Pooja
                </a>
              </h4>
              <div className="course-price">Rs.19,000 </div>
              <div className="course-meta">
                <span className="course-duration text-white">
                  <i className="far fa-file-alt" />
                  41 Lessons
                </span>
              </div>
              <span className="course-cat ">Duration time : 3 months</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="course-block">
            <div className="course-content bg-black">
              <h4>
                <a href="#" className="text-white">
                  Arihanta Mahapujan
                </a>
              </h4>
              <div className="course-price">Rs.11,500 </div>
              <div className="course-meta">
                <span className="course-duration text-white">
                  <i className="far fa-file-alt" />
                  53 Lessons
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
                  Siddha pooja{" "}
                </a>
              </h4>
              <div className="course-price">Rs.8,000 </div>
              <div className="course-meta">
                <span className="course-duration text-white">
                  <i className="far fa-file-alt" />
                  102 Lessons
                </span>
              </div>
              <span className="course-cat ">Duration time : 11 months</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="course-block">
            <div className="course-content bg-black">
              <h4>
                <a href="#" className="text-white">
                  Srutpanchami Pooja{" "}
                </a>
              </h4>
              <div className="course-price">Rs.11,500 </div>
              <div className="course-meta">
                <span className="course-duration text-white">
                  <i className="far fa-file-alt" />
                  82 Lessons
                </span>
              </div>
              <span className="course-cat ">Duration time : 2 months</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="course-block">
          <div className="course-content bg-black">
            <h4>
              <a href="#" className="text-white">
                Sarasvati – Istavan
              </a>
            </h4>
            <div className="course-price">Rs.1,500 </div>
            <div className="course-meta">
              <span className="course-duration text-white">
                <i className="far fa-file-alt" />
                82 Lessons
              </span>
            </div>
            <span className="course-cat ">Duration time : 1 months</span>
          </div>
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
  </section>




                <Footer/>
            </div>
        );
    }
}
export default JainCourses;