import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer';
class Religion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      religions: []
    };
  }
  //   componentDidMount() {
  //     console.log('componentDidMount is method called');
  //     var url = 'http://127.0.0.1:5000/religion';
  //     // fetch(url).then(res => res.json()).then(response => {
  //     //   console.log(response);
  //     // .catch(error => console.log('Authorization failed: ' + error.message));
  componentDidMount() {
    console.log('componentDidMount is method called');
    var url = 'http://127.0.0.1:5000/religion';
    fetch(url).then(res => res.json()).then(response => {
      console.log(response);
      this.setState({
        religions: response
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
                  <h1>Religion</h1>
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

          {/* <td><a href><i className="fa fa-trash" /></a></td>
                          <td><a href><i className="fa fa-pencil" /></a></td>
                          <td><a href="/category/{category.id}"><i className="fa fa-eye"></i></a></td> */}

          <div className="container mt-2">
            <div className="row">

              {this.state.religions.map((religion) => {
                return (
                  <div className="col-lg-6 col-md-12 ">
                    <div className="course-block course-list-item">
                      <div className="row align-items-centerbg-light text-dark">
                        {/* <div className="col-lg-4 col-sm-4 ">
                          <div className="course-img mb-4 mb-md-0">
                            <img
                              src="assets/images/course/hindu.jpg"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div> */}
                        <div className="col-lg-8  col-sm-8">
                          <div className="course-content">
                            <h4 className="text-center ">
                              <Link to={"/all_courses/"+religion.id}>RELIGION :- {religion.name} <br /> DETAIL :- {religion.detail} </Link>
                              
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  // <tr>
                  //   <td>{religion.id}</td>
                  //   <td>{religion.name}</td>
                  //   <td>{religion.detail}</td>
                  // </tr>
                );
              })}

              {/* <div className="col-lg-6 col-md-12">
                <div className="course-block course-list-item">
                  <div className="row align-items-center">
                    <div className="col-lg-4 col-sm-4 ">
                      <div className="course-img mb-4 mb-md-0">
                  <img
                    src="assets/images/course/jain.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                    </div>
                    <div className="col-lg-8  col-sm-8">
                      <div className="course-content">
                        <h4 className="text-center">
                          <a href="/jain_course">JAIN </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-lg-6 col-md-12">
                <div className="course-block course-list-item">
                  <div className="row align-items-center">
                    <div className="col-lg-4 col-sm-4 ">
                      <div className="course-img mb-4 mb-md-0">
                  <img
                    src="assets/images/course/cristian.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                    </div>
                    <div className="col-lg-8  col-sm-8">
                      <div className="course-content">
                        <h4 className="text-center">
                          <a href="chritian_courses">CHRISTIAN</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-lg-6 col-md-12">
                <div className="course-block course-list-item">
                  <div className="row align-items-center">
                    <div className="col-lg-4 col-sm-4 ">
                      <div className="course-img mb-4 mb-md-0">
                  <img
                    src="assets/images/course/islam.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                    </div>
                    <div className="col-lg-8  col-sm-8">
                      <div className="course-content">
                        <h4 className="text-center">
                          <a href="islam_course">ISLAM</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-lg-6 col-md-12">
                <div className="course-block course-list-item">
                  <div className="row align-items-center">
                    <div className="col-lg-4 col-sm-4 ">
                      <div className="course-img mb-4 mb-md-0">
                  <img
                    src="assets/images/course/buddh.jpg"
                    alt=""
                    className="img-fluid"
                  />
                      </div>
                    </div>
                    <div className="col-lg-8  col-sm-8">
                      <div className="course-content">
                        <h4 className="text-center">
                          <a href="buddh_courses">BUDDH</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-lg-6 col-md-12">
                <div className="course-block course-list-item">
                  <div className="row align-items-center">
                    <div className="col-lg-4 col-sm-4 ">
                      <div className="course-img mb-4 mb-md-0">
                  <img
                    src="assets/images/course/shikh.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                    </div>
                    <div className="col-lg-8  col-sm-8">
                      <div className="course-content">
                        <h4 className="text-center">
                          <a href="shikh_course">SHIKH</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="row">
              <div className="col-lg-12">
                <nav className="post-navigation text-center"></nav>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
export default Religion;