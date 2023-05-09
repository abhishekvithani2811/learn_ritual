import React, { Component } from 'react';

class Admission extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language_list: [],
            teacher_list: []  
        };
    }
    ChangeValue = (e) =>
    {
        this.setState({
            [e.target.name] : e.target.value
        });
    }
   
    SaveData = (e) =>{
        console.log(this.state);
        var url = "http://127.0.0.1:5000/joincourse/2/" + this.state.joiningdate + "/" + this.state.skypeid + "/" + this.state.teacher + "/" + this.state.language;
        console.log(url);
        fetch(url).then((res) => res.json()).then((response) =>{
            console.log(response);
        }
        );
        e.preventDefault();
    }
    
    LoginRedirect = () => {
        {            
            // <Link to={"/all_data"}></Link>
            window.location.replace('/thanks');
        }    
    }  
    componentDidMount() {
        fetch('http://127.0.0.1:5000/teacher')
            .then(res => res.json())
            .then((response) => {
                console.log(response);
                this.setState({ teacher_list: response });
            })
            .catch(error => console.error(error));
        fetch('http://127.0.0.1:5000/language')
            .then(response => response.json())
            .then((response) =>{
                 this.setState({ language_list :response })
            })
            .catch(error => console.error(error));
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
                                    <h2 className="font-weight-bold mb-4 text-center">ADMISSION</h2>

                                    <form method='post' action='http://127.0.0.1:5000/admissionform' onSubmit={(event) => this.SaveData(event)}>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">date of join</label>
                                            <input type="date" class="form-control" id="joiningdate" aria-describedby="emailHelp"  name='joiningdate' value={this.state.joiningdate} onChange={this.ChangeValue}  />

                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputPassword1">skype id</label>
                                            <input type="text" class="form-control border" id="skypeid" placeholder="skype id" name='skypeid' value={this.state.skypeid} onChange={this.ChangeValue} />
                                        </div>

                                        <div className="form-group">
                                            <label for="select teacher" className='border'>Select Teacher</label><br />
                                            <select className='form-select' name='teacher' onChange={this.ChangeValue} >
                                                {this.state.teacher_list.map((item) => {
                                                    return (
                                                        <option value={item.id}>{item.username}</option>
                                                    );
                                                })}
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label for="select laguage" className='border'>Select Laguage</label><br />
                                            <select className='form-select' name="language" onChange={this.ChangeValue}>
                                                {this.state.language_list.map((item) => {
                                                    return (
                                                        <option value={item.id}>{item.name}</option>
                                                    );
                                                })}
                                            </select>
                                        </div>
                                        <button type="submit" className="btn btn-dark" onClick={()=>this.LoginRedirect()}>Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*shop category end*/}
                </main>
            </div >
        );
    }
}
export default Admission;