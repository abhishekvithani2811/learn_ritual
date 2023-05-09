import React, { Component } from 'react';
import Footer from './footer';
class AllCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: []
    };
    console.log(this.courses);
  }
  componentDidMount() {
    console.log('componentDidMount is method called');
    var url = 'http://127.0.0.1:5000/all_courses/religionid';
    fetch(url).then(res => res.json()).then(response => {
      console.log(response);
      this.setState({
        courses: response
      });
    }).catch(error => console.log('Authorization failed: ' + error.message));;
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
                      <a href="#">Hindu</a>
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
                        Achamaniyam
                      </a>
                    </h4>
                    <div className="course-price">Rs.12,000 </div>
                    <div className="course-meta">
                      <span className="course-duration text-white">
                        <i className="far fa-file-alt" />
                        102 Lessons
                      </span>
                    </div>
                    <span className="course-cat ">Duration time : 6 months</span>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-4 col-md-6">
          <div className="course-block">
            <div className="course-content bg-black">
              <h4>
                <a href="#" className="text-white">
                  Deepa jyoti
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
                  Pranayama
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
                  Sankalpa
                </a>
              </h4>
              <div className="course-price">Rs.13,500 </div>
              <div className="course-meta">
                <span className="course-duration text-white">
                  <i className="far fa-file-alt" />
                  35 Lessons
                </span>
              </div>
              <span className="course-cat ">Duration time : 9 months</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="course-block">
            <div className="course-content bg-black">
              <h4>
                <a href="#" className="text-white">
                  Asana Puja
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
                <a href="/coursedetail" className="text-white">
                  Guru Dhyanam
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
        </div> */}
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
        </section>




        <Footer />
      </div>
    );
  }
}
export default AllCourses;