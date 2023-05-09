import React, { Component } from 'react';
import Layout from './layout';
import Footer from './footer';
class EnrollCourses extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Layout />
                <main className="site-main page-wrapper woocommerce single single-product">
    <section className="space-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="woocommerce-notices-wrapper" />
            <h2 className="font-weight-bold mb-4 text-center">
              Enroll Courses
            </h2>
            <form
              className="woocommerce-form woocommerce-form-login login"
              method="post"
            >
              <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                <label htmlFor="Select Teacher">
                  Select Teacher :&nbsp;
                  <span className="required" />
                </label>
                <select
                  className="woocommerce-Input woocommerce-Input--text input-text form-control"
                  name="select teacher"
                  id="select teacher"
                  autoComplete="select teacher"
                  value=""
                  placeholder="select teacher"
                >
                  <option value="">select teacher</option>
                  <option value="">Mr.Ram</option>
                  <option value="">Mr.Shah</option>
                  <option value="">Mr.Patel</option>
                  <option value="">Mr.Trivedi</option>
                  <option value="">Mr.Dave</option>
                </select>
              </p>
              <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                <label htmlFor="Joning Date">
                  Joning Date :&nbsp;
                  <span className="required" />
                </label>
                <input
                  className="woocommerce-Input woocommerce-Input--text input-text form-control"
                  type="date"
                  name="date"
                  id="date"
                  autoComplete="date"
                  placeholder="Joning date"
                />
              </p>
              <p className="form-row">
                <input
                  type="hidden"
                  id="woocommerce-login-nonce"
                  name="woocommerce-login-nonce"
                  defaultValue="a414dce984"
                />
                <input
                  type="hidden"
                  name="_wp_http_referer"
                  defaultValue="/my-account/"
                />
                <button
                  type="submit"
                  className="woocommerce-button button woocommerce-form-login__submit"
                  name="login"
                  value="Log in"
                >
                  Join Courses
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
    {/*shop category end*/}
  </main>




                <Footer/>
            </div>
        );
    }
}
export default EnrollCourses;