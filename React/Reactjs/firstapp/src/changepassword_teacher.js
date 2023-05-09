import React, { Component } from 'react';
class ChangeTeacher extends Component {
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
            var url = "http://127.0.0.1:5000/changepassword_teacher/"+ this.state.email +"/"+ this.state.newpassword +"/"+this.state.oldpassword +"/"+this.state.conpassword;
            console.log(url);
            fetch(url,{method:'get'}).then((res) => res.json()).then((response) =>{
                console.log(response);
                if(response.success == 'yes')
                {
                    // <Link to={"/all_data"}></Link>
                    window.location.replace('/home');
                }
            });
            e.preventDefault();
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
                                    <h2 className="font-weight-bold mb-4 text-center">Change Password teacher</h2>
                                    <form onSubmit={this.SaveCategory} method="get" encType='multipart/form-data'>
                                        
                                    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                            <label htmlFor="newpassword">
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
                                                oldpassword&nbsp;<span className="required">*</span>
                                            </label>
                                            <input
                                                className="woocommerce-Input woocommerce-Input--text input-text form-control"
                                                type="password"
                                                name="oldpassword"
                                                id="oldpassword"
                                                autoComplete="oldpassword"
                                                placeholder="oldpassword"
                                                value={this.state.oldpassword} 
                                                onChange={this.ChangeValue}
                                            />
                                        </p>
                                        <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                            <label htmlFor="newpassword">
                                                newpassword&nbsp;<span className="required">*</span>
                                            </label>
                                            <input
                                                className="woocommerce-Input woocommerce-Input--text input-text form-control"
                                                type="password"
                                                name="newpassword"
                                                id="newpassword"
                                                autoComplete="newpassword"
                                                placeholder="newpassword"
                                                value={this.state.newpassword} 
                                                onChange={this.ChangeValue}
                                            />
                                        </p>
                                        <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                            <label htmlFor="password">
                                                conformpassword&nbsp;<span className="required">*</span>
                                            </label>
                                            <input
                                                className="woocommerce-Input woocommerce-Input--text input-text form-control"
                                                type="password"
                                                name="conpassword"
                                                id="conpassword"
                                                autoComplete="conformpassword"
                                                placeholder="conformpassword"
                                                value={this.state.conformpassword} 
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
                                                changepassword teacher
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
export default ChangeTeacher;
