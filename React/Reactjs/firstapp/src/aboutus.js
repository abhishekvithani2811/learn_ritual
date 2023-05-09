import React, { Component } from 'react';

import Footer from './footer';
class Aboutus extends Component {
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
                  <h1>ABOUT US</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Feature section start */}
        <section className="features pt-100">
          <div className="container">
            <div className="row ">
              <div className="col-lg-3 col-md-6 col-xl-3 col-sm-6">
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="flaticon-flag" />
                  </div>
                  <div className="feature-text">
                    <h4>Expert Teacher</h4>
                    <p>The influence of a good teacher can never be erase</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-xl-3 col-sm-6">
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="flaticon-layers" />
                  </div>
                  <div className="feature-text">
                    <h4>Self Development</h4>
                    <p>Change is the end result of all true learning </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-xl-3 col-sm-6">
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="flaticon-video-camera" />
                  </div>
                  <div className="feature-text">
                    <h4>Remote Learning</h4>
                    <p>I'm not a teacher but an awakener</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-xl-3 col-sm-6">
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="flaticon-help" />
                  </div>
                  <div className="feature-text">
                    <h4>Life Time Support</h4>
                    <p>Aspire to inspire before we expire</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Feature section End */}
        {/* About Section Start */}
        <section className="about-section section-padding">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div className="video-block">
                  <img
                    src="assets/images/bg/about.jpg"
                    alt=""
                    className="img-fluid"
                  />
                  <a href="https://www.youtube.com/watch?v=CQ4Z-wiRjzU" className="video-icon">
                    <i className="fa fa-play" />
                  </a>
                </div>
              </div>
              <div className="col-xl-6 pl-5 col-lg-6">
                <div className="section-heading mt-4 mt-lg-0 ">
                  <span className="subheading">Learn rituals course</span>
                  <h3>
                    Get Instant Access To <span> Expert solution</span>
                  </h3>
                  <p>
                    The ultimate planning solution for busy person who want to reach
                    their personal goals.Effortless comfortable eye-catching unique
                    detail{" "}
                  </p>
                </div>
                <ul className="about-features">
                  <li>
                    <i className="fa fa-check" />
                    <h5>High Quality Video Details</h5>
                  </li>
                  <li>
                    <i className="fa fa-check" />
                    <h5>Powerful Teacher</h5>
                  </li>
                  {/* <li>
                  <i class="fa fa-check"></i>
                  <h5>Premium Content Worldwide</h5>
              </li> */}
                </ul>
                <a href="/religion" className="btn btn-main">
                  Our Courses
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* About Section END */}
        {/* COunter Section start */}
        <section className="counter-block">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 bg-black counter-inner">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="counter-item text-center">
                      <i className="flaticon-video-camera" />
                      <div className="count">
                        <span className="counter">0</span>
                      </div>
                      <h6>Instructors</h6>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="counter-item text-center">
                      <i className="flaticon-layers" />
                      <div className="count">
                        <span className="counter">06</span>
                      </div>
                      <h6>Total Courses</h6>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="counter-item text-center">
                      <i className="flaticon-flag" />
                      <div className="count">
                        <span className="counter">15</span>
                      </div>
                      <h6>Registered Enrolls</h6>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="counter-item text-center border-0">
                      <i className="flaticon-help" />
                      <div className="count">
                        <span className="counter">100</span>
                        <a href="">%</a>
                      </div>
                      <h6>Satisfaction rate</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* COunter Section End */}
        {/* Team section start */}
        <section className="team pt-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-xl-7">
                <div className="section-heading center-heading">
                  <h3>Our Professional Team</h3>
                  <p>
                    "Talent wins games, but teamwork and intelligence win
                    championships."
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="team-item mb-4 mb-lg-0">
                  <img
                    src="assets/images/team/team-4.jpg"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="team-info">
                    <h5>Harish Ham</h5>
                    <ul className="team-socials list-inline"></ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="team-item mb-4 mb-lg-0">
                  <img
                    src="assets/images/team/team-1.jpg"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="team-info">
                    <h5>Tanvir Hasan</h5>
                    <ul className="team-socials list-inline"></ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="team-item mb-4 mb-lg-0">
                  <img
                    src="assets/images/team/team-2.jpg"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="team-info">
                    <h5>Mikele John</h5>
                    <ul className="team-socials list-inline"></ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="team-item">
                  <img
                    src="assets/images/team/team-3.jpg"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="team-info">
                    <h5>Mikele John</h5>
                    <ul className="team-socials list-inline"></ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>




        <Footer />
      </div>
    );
  }
}
export default Aboutus;