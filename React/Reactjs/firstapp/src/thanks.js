import React, { Component } from 'react';
import Footer from './footer';
import { Link } from 'react-router-dom';
class Thanks extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
       
  
  <section className="page-header">
  <div className="container">
  <div className="row justify-content-center">
  <img
                src="assets/images/course/thanks.jpg"
                alt=""
                className="img-fluid"
              />
 </div>
  </div>
  </section>

  <Footer/>

</div>
        );
    }
}
export default Thanks;