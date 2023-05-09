import React, { Component } from 'react';
class Forgetpassword  extends Component {
    constructor(props) {
        super(props);
    }
render() {
        return (
            <div>
<main className="site-main page-wrapper woocommerce single single-product">
  <section className="space-3">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="woocommerce-notices-wrapper" />
          <h2 className="font-weight-bold mb-4 text-center">Forget Password</h2>
          <form
            className="woocommerce-form woocommerce-form-login login"
            method="post"
          >
            <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
              <label htmlFor="username">
                Username or email address&nbsp;
                <span className="required">*</span>
              </label>
              <input
                type="text"
                className="woocommerce-Input woocommerce-Input--text input-text form-control"
                name="username"
                id="username"
                autoComplete="username"
                defaultValue=""
                placeholder="Username or Email"
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
                name="submit"
                value="submit"
              >
                Recover Account
              </button>
              {/* <label
                              class="woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__rememberme">
                              <input class="woocommerce-form__input woocommerce-form__input-checkbox"
                                  name="rememberme" type="checkbox" id="rememberme" value="forever">
                              <span>Remember me</span>
                          </label> */}
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/*shop category end*/}
</main>
</div>
 );
}
}
export default Forgetpassword;
