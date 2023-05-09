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
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
export default AllCourses;