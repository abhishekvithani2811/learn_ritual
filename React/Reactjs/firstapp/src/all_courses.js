import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Footer from './footer';
class AllCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    console.log(this.data);
  }

  //   render() {
  //     const { data } = this.state;
  //     return (
  //       <div>
  //         {data && (
  //           <ul>
  //             {data.map(item => (
  //              <a href={"/all_courses/" + item.id}>RELIGION :- {item.title} <br /> DETAIL :- {item.detail} </a>
  //             ))}
  //           </ul>
  //         )}
  //       </div>
  //     );
  //   }
  // }

  componentDidMount() {
    var url = new URL(window.location.href);
    var CurrentPage = url.href;
    var courseid = CurrentPage.substr(CurrentPage.length - 1);
    fetch(`http://127.0.0.1:5000/all_courses/${courseid}`)
      .then(response => response.json())
      .then(data => this.setState({ data }))
      .catch(error => console.error(error));
  }
  render() {
    var { data } = this.state;
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
                      {/* <a href="#">Hindu</a> */}
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
              {/* <Link to={"/teacher/"}> */}
              {/* map  */}
              <table className="table table-striped">
                <thead>
                  <tr>
                   
                    <th scope="col">Title</th>
                    <th scope="col">Detail</th>
                    <th scope="col">Duration</th>
                    <th scope="col">Noofhours</th>
                    <th scope="col">Price</th>
                    <th scope="col">Iscertified</th>
                    <th scope="col">opration</th>
                  </tr>
                </thead>
                {data.map(item => {
                  // var page =`/admission/${item.id}`;
                  return (
                    <tbody>
                      <tr>
                        
                        <td>{item.title}</td>
                        <td>{item.detail}</td>
                        <td>{item.duration}</td>
                        <td>{item.noofhours}</td>
                        <td>{item.price}</td>
                        <td>{item.iscertified}</td>
                        {/* <td><Link to={"/admission/" + item.id}><button class="btn btn-outline-dark btn-sm"> Click Me </button></Link></td> */}
                        <td><Link to={"/admission/" + item.id}><button class="btn btn-outline-dark btn-sm" > Click Me </button></Link></td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
              {/* </Link> */}

            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
export default AllCourses;
