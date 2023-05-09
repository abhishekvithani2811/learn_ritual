import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Footer from './footer';
class AllData extends Component {
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
    fetch(`http://127.0.0.1:5000/admissiondata`)
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
                  <h1>INFORMATION</h1>
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
                                   
                    <th scope="col">Username</th>                    
                    <th scope="col">Title</th>                    
                    <th scope="col">Language Courseid</th>
                    <th scope="col">Joiningdate</th>
                    <th scope="col">Isdemo</th>
                    <th scope="col">Ispaid</th>
                    <th scope="col">Transactioncode</th>
                    <th scope="col">Iscompleted</th>
                    <th scope="col">Review</th>
                    <th scope="col">Reviewnotes</th>
                    <th scope="col">Skypeid</th>
                  </tr>
                </thead>
                {data.map(item => {
                  // var page =`/admission/${item.id}`;
                  return (
                    <tbody>
                      <tr>
                      
                        <td>{item.username}</td>
                        <td>{item.title}</td>
                        <td>{item.language_courseid}</td>
                        <td>{item.joiningdate}</td>
                        <td>{item.isdemo}</td>
                        <td>{item.ispaid}</td>
                        <td>{item.transactioncode}</td>
                        <td>{item.iscompleted}</td>
                        <td>{item.review}</td>
                        <td>{item.reviewnotes}</td>
                        <td>{item.skypeid}</td>
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
export default AllData;
