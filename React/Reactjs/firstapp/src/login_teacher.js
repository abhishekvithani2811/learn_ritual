import React, { Component } from 'react';
class Register_teacher extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    ChangeValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }        
    SaveCategory = (e) => {
        {
            // http://127.0.0.1:5000/loginteacher
            var url = "http://127.0.0.1:5000/loginteacher/"  + this.state.email + "/" + this.state.password;
            console.log(url);
            fetch(url,{method:'get'}).then((res) => res.json()).then((response) =>{
                console.log(response);
                if(response.success == 'yes')
                {
                    // <Link to={"/all_data"}></Link>
                    window.location.replace('/all_data');
                }
            });
            e.preventDefault();
        }
    }
    RegisterRedirect = () => {
        {            
            // <Link to={"/all_data"}></Link>
            window.location.replace('/register_teacher');
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
                                    <h2 className="font-weight-bold mb-4 text-center">Login Teacher</h2>
                                    <form onSubmit={this.SaveCategory} method="get" encType='multipart/form-data'>
                                        
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

                                        <p className="woocommerce-FormRow form-row">
                            
                                            <button
                                                type="submit"
                                                className="woocommerce-Button button"
                                                name="register"
                                                value="Register"
                                                onClick={(event)=>this.SaveCategory(event)}>
                                                login Teacher
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
