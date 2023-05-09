import React, { Component } from 'react';
import Footer from './footer';
class Coursedetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
       

        <>
  <section className="page-header">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-xl-8">
          <div className="title-block">
            <h1>Course Detail</h1>
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
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Religionid</th>
              <th scope="col">Title</th>
              <th scope="col">Detail</th>
              <th scope="col">Duration</th>
              <th scope="col">Noofhours</th>
              <th scope="col">Price</th>
              <th scope="col">Iscertified</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>101</td>
              <td>Guru Dhyanam</td>
              <td>This rituals id for older men</td>
              <td>2 Month</td>
              <td>2 Hours</td>
              <td>11,500</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</>
<Footer/>


</div>
        );
    }
}
export default Coursedetail;