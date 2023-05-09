import React, { Component } from 'react';
class Register_teacher extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    ChangeValue = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    SaveCategory = (e) => {
        {
            // http://127.0.0.1:5000/teacher/ram/123123/ram@gmail.com
            var url = "http://127.0.0.1:5000/teacher/" + this.state.username + "/" + this.state.password + "/" + this.state.email;
            console.log(url);
            fetch(url).then((res) => res.json()).then((response) =>{
                console.log(response);
            }
            );
            e.preventDefault();
          }
    }
    LoginRedirect = () => {
        {            
            // <Link to={"/all_data"}></Link>
            window.location.replace('/login_teacher');
        }    
    } 
    render() {
        return (
            <div>
                <main className="site-main page-wrapper woocommerce single single-product">
                    <section className="space-3">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h2 className="font-weight-bold mb-4 text-center">Register Teacher</h2>
                                    <form onSubmit={this.SaveCategory} method="get" encType='multipart/form-data'>
                                        
                                        <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                            <label htmlFor="username">
                                                Username&nbsp;<span className="required">*</span>
                                            </label>
                                            <input
                                                className="woocommerce-Input woocommerce-Input--text input-text form-control"
                                                type="text"
                                                name="username"
                                                id="username"
                                                autoComplete="username"
                                                placeholder="username"
                                                value={this.state.username}
                                                onChange={this.ChangeValue}
                                            />
                                        </p>

                                        <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                            <label htmlFor="password">
                                                Password&nbsp;<span className="required">*</span>
                                            </label>
                                            <input
                                                className="woocommerce-Input woocommerce-Input--text input-text form-control"
                                                type="password"
                                                name="password"
                                                id="password"
                                                autoComplete="password"
                                                placeholder="password"
                                                value={this.state.password}
                                                onChange={this.ChangeValue}
                                            />
                                        </p>

                                        <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                            <label htmlFor="password">
                                                email&nbsp;<span className="required">*</span>
                                            </label>
                                            <input
                                                className="woocommerce-Input woocommerce-Input--text input-text form-control"
                                                type="email"
                                                name="email"
                                                id="email"
                                                autoComplete="email"
                                                placeholder="email"
                                                value={this.state.email}
                                                onChange={this.ChangeValue}
                                            />
                                        </p>

                                        
                                        <p className="woocommerce-FormRow form-row">
                            
                                            <button
                                                type="submit"
                                                className="woocommerce-Button button"
                                                name="register"
                                                value="Register"
                                                onClick={()=>this.SaveCategory()}>
                                                Register Teacher
                                            </button>
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
export default Register_teacher;
