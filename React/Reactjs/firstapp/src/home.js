import React, { Component } from 'react';
import Footer from './footer';
class Home  extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
  {/* Banner Section Start */}
  <section className="banner-2 section-padding">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-12 col-xl-6 col-lg-6">
          <div className="banner-content">
            <span className="subheading">Expert instruction</span>
            <h1>Convenient easy way of learning new skills!</h1>
            <p>
              The ultimate planning solution for busy people who want to reach
              their personal goals.Effortless comfortable eye-catching unique
              detail{" "}
            </p>
            <a href="/coursedetail" className="btn btn-main">
              our Courses{" "}
            </a>
          </div>
        </div>
        <div className="col-md-12 col-xl-6 col-lg-6">
          <div className="banner-img-round mt-5 mt-lg-0">
            <img
              src="assets/images/banner/hero-img.png"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* Banner Section End */}
  {/* Feature section start */}
  <section className="feature-4">
    <div className="container">
      <div className="row ">
        <div className="col-lg-4 col-md-6 col-xl-4 col-sm-6">
          <div className="feature-item">
            <div className="feature-icon">
              <i className="flaticon-flag" />
            </div>
            <div className="feature-text">
              <h4>Expert Teacher</h4>
              <p>
                Develop skills for career of various majors including computer
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-xl-4 col-sm-6">
          <div className="feature-item">
            <div className="feature-icon">
              <i className="flaticon-layers" />
            </div>
            <div className="feature-text">
              <h4>Self Development</h4>
              <p>
                Develop skills for career of various majors including computer.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-xl-4 col-sm-6">
          <div className="feature-item">
            <div className="feature-icon">
              <i className="flaticon-video-camera" />
            </div>
            <div className="feature-text">
              <h4>Remote Learning</h4>
              <p>
                Develop skills for career of various majors including language
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Feature section End */}
  {/* <section class="section-padding popular-course-list">
    <div class="container">
  <div class="row align-items-center justify-content-center">
      <div class="col-lg-8 col-xl-8 col-md-8">
          <div class="section-heading mb-sm-0">
              <span class="subheading">Trending Courses</span>
              <h3>Popular Online Courses Around You</h3>
              <p>The ultimate planning solution for
                  busy women who want to reach their personal goals</p>
          </div>
      </div>
      <div class="col-xl-4 col-lg-4  col-md-4">
          <div class="text-md-right mb-5 mb-md-0">
              <a href="#" class="btn btn-main">All courses</a>
          </div>
      </div>
  </div>

  <div class="row">
      <div class="col-lg-6 col-md-12">
          <div class="course-block course-list-item">
              <div class="row align-items-center">
                  <div class="col-lg-4 col-sm-4 ">
                      <div class="course-img mb-4 mb-md-0">
                          <img src="assets/images/course/course-sm1.jpg" alt="" class="img-fluid">
                      </div>
                  </div>
                  <div class="col-lg-8  col-sm-8">
                      <div class="course-content">
                          <div class="course-price ">$50 <del>$90</del></div>   
                          <h4><a href="#">Information About UI/UX Design Degree</a></h4>    
                          <div class="course-meta">
                              <span class="course-author">By <a href="#">William</a></span>
                              <span class="course-duration"><i class="far fa-file-alt"></i>82 Lessons</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

       <div class="col-lg-6 col-md-12">
          <div class="course-block course-list-item">
              <div class="row align-items-center">
                  <div class="col-lg-4 col-sm-4">
                      <div class="course-img mb-4 mb-md-0">
                          <img src="assets/images/course/course-sm2.jpg" alt="" class="img-fluid">
                      </div>
                  </div>
                  <div class="col-lg-8  col-sm-8">
                      <div class="course-content">
                          <div class="course-price ">$80 <del>$100</del></div>   
                          
                          <h4><a href="#">Photography Crash Course for Photographer</a></h4>    
                          <div class="course-meta">
                              <span class="course-author">By <a href="#">William</a></span>
                              <span class="course-duration"><i class="far fa-file-alt"></i>82 Lessons</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

     <div class="col-lg-6 col-md-12">
          <div class="course-block course-list-item">
              <div class="row align-items-center">
                  <div class="col-lg-4  col-sm-4">
                      <div class="course-img mb-4 mb-md-0">
                          <img src="assets/images/course/course-sm3.jpg" alt="" class="img-fluid">
                      </div>
                  </div>
                  <div class="col-lg-8  col-sm-8">
                      <div class="course-content">
                          <div class="course-price ">$100 <del>$120</del></div>   
                          
                          <h4><a href="#">React – The Complete Guide (React Router)</a></h4>    
                          <div class="course-meta">
                              <span class="course-author">By <a href="#">William</a></span>
                              <span class="course-duration"><i class="far fa-file-alt"></i>82 Lessons</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    

     <div class="col-lg-6 col-md-12">
          <div class="course-block course-list-item">
              <div class="row align-items-center">
                  <div class="col-lg-4  col-sm-4">
                      <div class="course-img mb-4 mb-md-0">
                          <img src="assets/images/course/course-sm4.jpg" alt="" class="img-fluid">
                      </div>
                  </div>
                  <div class="col-lg-8  col-sm-8">
                      <div class="course-content">
                          <div class="course-price ">$180 <del>$190</del></div>   
                          
                          <h4><a href="#">WebCrash Course for Photographer</a></h4>    
                          <div class="course-meta">
                              <span class="course-author">By <a href="#">William</a></span>
                              <span class="course-duration"><i class="far fa-file-alt"></i>82 Lessons</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>

  <div class="row justify-content-center">
      <div class="col-xl-6">
          <div class="text-center mt-5">
              Take the control of their life back and start doing things to make their dream come true. <a href="course.html" class="font-weight-bold text-underline">View all courses </a>
          </div>
      </div>
  </div>
    </div>
</section> */}
  {/* About Section Start */}
  <section className="about-section">
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="row ">
            <div className="col-xl-6 col-lg-6  col-md-6 col-sm-6">
              <div className="about-imgbox">
                <img
                  src="assets/images/bg/feature1.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="about-imgbox">
                <img
                  src="assets/images/bg/feature2.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div className="about-imgbox mt-5">
                <img
                  src="assets/images/bg/feature3.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="about-imgbox">
                <img
                  src="assets/images/bg/about-img.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="section-heading pl-lg-5 ">
            <span className="subheading">Self Development Course</span>
            <h3>
              Get Instant Access To <span> Expert solution</span>
            </h3>
            <p className="mb-4">
              The ultimate planning solution for busy women who want to reach
              their personal goals.Effortless comfortable eye-catching unique
              detail.Take the control of their life back and start doing things{" "}
            </p>
            <a href="#" className="btn btn-solid-border">
              Join Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* About Section End */}
  {/*course category section start*/}
  {/* <section class="section-padding course-category" >
  <div class="container">
      <div class="row align-items-center justify-content-center">
          <div class="col-lg-7">
              <div class="section-heading center-heading">
                  <span class="subheading">Top Categories</span>
                  <h3>Explore by category</h3>
                  <p>The ultimate planning solution for
                      busy women who want to reach their personal goals</p>
              </div>
          </div>
      </div>
     
      <div class="row">
          <div class="col-xl-3 col-lg-3 col-md-6">
              <div class="single-course-category cat-1">
                  <h4><a href="#">Business </a> </h4>
                  <p>21 courses</p>
              </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-6">
              <div class="single-course-category cat-2">
                  <h4><a href="#">Design</a></h4>
                  <p>15 courses</p>
              </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-6">
              <div class="single-course-category cat-3">
                  <h4><a href="#">Web Development</a></h4>
                  <p>12 courses</p>
              </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-6">
              <div class="single-course-category cat-4">
                  <h4><a href="#">Marketing</a></h4>
                  <p>20 courses</p>
              </div>
          </div>

         
          <div class="col-xl-3 col-lg-3 col-md-6">
              <div class="single-course-category cat-2">
                  <h4><a href="#">Management</a></h4>
                  <p>15 courses</p>
              </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-6">
              <div class="single-course-category cat-1">
                  <h4><a href="#">App Development</a></h4>
                  <p>21 courses</p>
              </div>
          </div>
         
          <div class="col-xl-3 col-lg-3 col-md-6">
              <div class="single-course-category cat-4">
                  <h4><a href="#">SEO</a></h4>
                  <p>20 courses</p>
              </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-6">
              <div class="single-course-category cat-3">
                  <h4><a href="#">Human Resource</a></h4>
                  <p>12 courses</p>
              </div>
          </div>
      </div>

      <div class="row">
          <div class="col-xl-12">
              <div class="text-center mt-5">
                  <a href="#" class="btn btn-solid-border">Explore All</a>
              </div>
          </div>
      </div>
  </div>
    </section> */}
  {/*course section end*/}
  {/*course section start*/}
  {/* <section class="section-padding course-grid bg-gray" >
  <div class="container">
      <div class="row align-items-center justify-content-center">
          <div class="col-lg-7">
              <div class="section-heading center-heading">
                  <span class="subheading">Trending Courses</span>
                  <h3>Over 200+ New Online Courses</h3>
                  <p>The ultimate planning solution for
                      busy women who want to reach their personal goals</p>
              </div>
          </div>
      </div>

     <div class="text-center">
          <ul class="course-filter">
              <li class="active"><a href="#" data-filter="*"> All</a></li>
              <li><a href="#" data-filter=".cat1">printing</a></li>
              <li><a href="#" data-filter=".cat2">Web</a></li>
              <li><a href="#" data-filter=".cat3">illustration</a></li>
              <li><a href="#" data-filter=".cat4">media</a></li>
              <li><a href="#" data-filter=".cat5">crafts</a></li>
          </ul>
     </div>

      <div class="row course-gallery ">
          <div class="course-item cat1 cat3 col-lg-4 col-md-6">
              <div class="course-block">
                  <div class="course-img">
                      <img src="assets/images/course/course-1.jpg" alt="" class="img-fluid">
                       <div class="course-price2">$100</div>   
                  </div>
                  
                  <div class="course-content">
                      <div class="course-meta">
                          <span class="course-student"><i class="fa fa-user-alt"></i>340 Students</span>
                          <span class="course-duration"><i class="far fa-file-alt"></i>82 Lessons</span>
                          <span class="course-label">new</span>
                      </div>
                      
                      <h4><a href="#">React – The Complete Guide (React Router)</a></h4>    
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, alias.</p>
                  </div>
              </div>
          </div>

          <div class="course-item cat2 cat4 col-lg-4 col-md-6">
              <div class="course-block">
                  <div class="course-img">
                      <img src="assets/images/course/course-2.jpg" alt="" class="img-fluid">
                       <div class="course-price2">$70</div>   
                  </div>
                  
                  <div class="course-content">
                      <div class="course-meta">
                          <span class="course-student"><i class="fa fa-user-alt"></i>340 Students</span>
                          <span class="course-duration"><i class="far fa-file-alt"></i>82 Lessons</span>
                      </div>
                      
                      <h4><a href="#">Photography Crash Course for Photographer</a></h4>     
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, alias.</p>
                  </div>
              </div>
          </div>
          
          <div class="course-item cat5 cat2 col-lg-4 col-md-6">
              <div class="course-block">
                  <div class="course-img">
                      <img src="assets/images/course/course-3.jpg" alt="" class="img-fluid">
                       <div class="course-price2">$160</div>   
                  </div>
                  
                  <div class="course-content">
                      <div class="course-meta">
                          <span class="course-student"><i class="fa fa-user-alt"></i>340 Students</span>
                          <span class="course-duration"><i class="far fa-file-alt"></i>82 Lessons</span>
                      </div>
                      
                      <h4><a href="#">Information About UI/UX Design Degree</a></h4>       
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, alias.</p>
                  </div>
              </div>
          </div>
         
          <div class="course-item cat2 cat4 col-lg-4 col-md-6">
              <div class="course-block">
                  <div class="course-img">
                      <img src="assets/images/course/course-2.jpg" alt="" class="img-fluid">
                       <div class="course-price2">$130</div>   
                  </div>
                  
                  <div class="course-content">
                      <div class="course-meta">
                          <span class="course-student"><i class="fa fa-user-alt"></i>340 Students</span>
                          <span class="course-duration"><i class="far fa-file-alt"></i>82 Lessons</span>
                      </div>
                      
                      <h4><a href="#">Photography Crash Course for Photographer</a></h4>     
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, alias.</p>
                  </div>
              </div>
          </div>

          <div class="course-item cat1 cat3 col-lg-4 col-md-6">
              <div class="course-block">
                  <div class="course-img">
                      <img src="assets/images/course/course-1.jpg" alt="" class="img-fluid">
                       <div class="course-price2">$200</div>   
                  </div>
                  
                  <div class="course-content">
                      <div class="course-meta">
                          <span class="course-student"><i class="fa fa-user-alt"></i>340 Students</span>
                          <span class="course-duration"><i class="far fa-file-alt"></i>82 Lessons</span>
                          <span class="course-label">new</span>
                      </div>
                      
                      <h4><a href="#">React – The Complete Guide (React Router)</a></h4>    
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, alias.</p>
                  </div>
              </div>
          </div>
          
          <div class="course-item cat5 cat2 col-lg-4 col-md-6">
              <div class="course-block">
                  <div class="course-img">
                      <img src="assets/images/course/course-3.jpg" alt="" class="img-fluid">
                       <div class="course-price2">$210</div>   
                  </div>
                  
                  <div class="course-content">
                      <div class="course-meta">
                          <span class="course-student"><i class="fa fa-user-alt"></i>340 Students</span>
                          <span class="course-duration"><i class="far fa-file-alt"></i>82 Lessons</span>
                      </div>
                      
                      <h4><a href="#">Information About UI/UX Design Degree</a></h4>       
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, alias.</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
    </section> */}
  {/*course section end*/}
  {/* Testimonial section start */}
  <section className="testimonial-2 section-padding">
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-6 col-xl-5 mr-auto">
          <div className="section-heading">
            <span className="subheading">Testimonials</span>
            <h3>Success Stories from person</h3>
            <p>
              The ultimate planning solution for busy women who want to reach
              their personal goals.Effortless comfortable eye-catching unique
              detail.Take the control of their life back
            </p>
            <p>
              Help you to get the best course that fits you{" "}
              <a href="#" className="text-underline d-block">
                Free Consultation <i className="fa fa-angle-right ml-2" />
              </a>
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-xl-6">
          <div className="testimonials-slides-2 owl-carousel owl-theme">
            <div className="testimonial-item">
              <i className="fa fa-quote-right" />
              <div className="client-info">
                <img
                  src="assets/images/clients/test-1.jpg"
                  alt=""
                  className="img-fluid"
                />
                <div className="testionial-author">
                  Jessica Smith - Amazon co.
                </div>
              </div>
              <div className="testimonial-info-title">
                <h4>
                  One of the easiest online accounting systems we've tried.
                </h4>
              </div>
              <div className="testimonial-info-desc">
                People who build their own home tend to be very courageous.
                These people are curious about life.
              </div>
            </div>
            <div className="testimonial-item">
              <i className="fa fa-quote-right" />
              <div className="client-info">
                <img
                  src="assets/images/clients/test-2.jpg"
                  alt=""
                  className="img-fluid"
                />
                <div className="testionial-author">
                  Jessica Smith - Amazon co.
                </div>
              </div>
              <div className="testimonial-info-title">
                <h4>
                  One of the easiest online accounting systems we've tried.
                </h4>
              </div>
              <div className="testimonial-info-desc">
                People who build their own home tend to be very courageous.
                These people are curious about life.
              </div>
            </div>
            <div className="testimonial-item">
              <i className="fa fa-quote-right" />
              <div className="client-info">
                <img
                  src="assets/images/clients/test-3.jpg"
                  alt=""
                  className="img-fluid"
                />
                <div className="testionial-author">
                  Jessica Smith - Amazon co.
                </div>
              </div>
              <div className="testimonial-info-title">
                <h4>
                  One of the easiest online accounting systems we've tried.
                </h4>
              </div>
              <div className="testimonial-info-desc">
                They're thinking about what it means to live in a house, rather
                than just buying a commodity and making it work.
              </div>
            </div>
            <div className="testimonial-item">
              <i className="fa fa-quote-right" />
              <div className="client-info">
                <img
                  src="assets/images/clients/test-1.jpg"
                  alt=""
                  className="img-fluid"
                />
                <div className="testionial-author">
                  Jessica Smith - Amazon co.
                </div>
              </div>
              <div className="testimonial-info-title">
                <h4>
                  One of the easiest online accounting systems we've tried.
                </h4>
              </div>
              <div className="testimonial-info-desc">
                People who build their own home tend to be very courageous.
                These people are curious about life.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Testimonial section End */}
  {/* COunter Section start */}
  {/* <section class="counter-block">
    <div class="container">
  <div class="row" >
      <div class="col-xl-12 bg-black counter-inner">
          <div class="row">
              <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="counter-item text-center">
                      <i class="flaticon-video-camera"></i>
                      <div class="count">
                          <span class="counter">90</span>
                      </div>
                      <h6>Instructors</h6>
                  </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="counter-item text-center">
                      <i class="flaticon-layers"></i>
                      <div class="count">
                          <span class="counter">1450</span>
                      </div>
                      <h6>Total Courses</h6>
                  </div>
              </div>

              <div class="col-lg-3 col-md-6 col-sm-6">         
                  <div class="counter-item text-center">
                      <i class="flaticon-flag"></i>
                      <div class="count">
                          <span class="counter">5697</span>
                      </div>
                      <h6>Registered Enrolls</h6>
                  </div>
              </div>
          
              <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="counter-item text-center border-0">
                      <i class="flaticon-help"></i>
                      <div class="count">
                          <span class="counter">100</span>%
                      </div>
                      <h6>Satisfaction rate</h6>     
                  </div>
              </div>
          </div>
      </div>
 </div>
    </div>
</section> */}
  {/* COunter Section End */}
  {/* Blog Section Start */}
  <section className="blog-section section-padding">
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-7">
          <div className="section-heading center-heading">
            <span className="subheading">Blog News</span>
            <h3>Latest From The Blog</h3>
            <p>
              The ultimate planning solution for busy women who want to reach
              their personal goals
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-xl-4 col-md-6 ">
          <article className="blog-post-item">
            <div className="post-thumb">
              <img
                src="assets/images/blog/blog1.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="post-item mt-4">
              <div className="post-meta">
                <span className="post-author">
                  Written by <a href="#">Admin</a>
                </span>
                <span className="post-date">
                  <i className="fa fa-calendar-alt mr-2" />
                  May 9, 2020
                </span>
              </div>
              <h4 className="post-title">
                <a href="blog-single.html">
                  How to become a best sale marketer in a month!
                </a>
              </h4>
            </div>
          </article>
        </div>
        <div className="col-lg-4 col-xl-4 col-md-6">
          <article className="blog-post-item">
            <div className="post-thumb">
              <img
                src="assets/images/blog/blog2.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="post-item mt-4">
              <div className="post-meta">
                <span className="post-author">
                  Written by <a href="#">Admin</a>
                </span>
                <span className="post-date">
                  <i className="fa fa-calendar-alt mr-2" />
                  May 9, 2020
                </span>
              </div>
              <h4 className="post-title">
                <a href="blog-single.html">
                  How to become a best sale marketer in a month!
                </a>
              </h4>
            </div>
          </article>
        </div>
        <div className="col-lg-4 col-xl-4 col-md-6">
          <article className="blog-post-item">
            <div className="post-thumb">
              <img
                src="assets/images/blog/blog3.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="post-item mt-4">
              <div className="post-meta">
                <span className="post-author">
                  Written by <a href="#">Admin</a>
                </span>
                <span className="post-date">
                  <i className="fa fa-calendar-alt mr-2" />
                  May 9, 2020
                </span>
              </div>
              <h4 className="post-title">
                <a href="blog-single.html">
                  How to become a best sale marketer in a month!
                </a>
              </h4>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
  {/* Blog Section End */}
  {/* CTA Sidebar start */}
  {/* <section class="cta bg-gray section-padding">
    <div class="container">
  <div class="row align-items-center justify-content-center">
      <div class="col-lg-7">
          <div class="section-heading center-heading mb-0">
              <span class="subheading">be a instructor</span>
              <h3>Want to Become an Instructor ?</h3>
              <p class="mb-4">Join millions of people from around the world
                  learning together. Online learning is as easy and
                  natural as chatting.</p>
              <a href="#" class="btn btn-main">Become Instructor</a>
          </div>
      </div>
  </div>
    </div>
</section> */}
  {/* CTA Sidebar end */}
  {/* Footer section start */}
  <Footer/>
  </div>
    );
}
}
export default Home;
