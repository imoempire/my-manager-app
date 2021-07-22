import React, { Component } from 'react';

class EmployeeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            First: '',
            Last: '',
            Email: '',
            Phone: '',
            HomeAddress: '',
            Role: '',
            Salary: '',
            // img: '',
        }
    };
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addNewEmployee(this.state);
        this.setState({
            First: '',
            Last: '',
            Email: '',
            Phone: '',
            HomeAddress: '',
            Role: '',
            Salary: '',
        })
    }
    render() {
        return (
            <>
                <form className="needs-validation" novalidate onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="col-md-12 mb-3">
                            <label for="validationCustom01">First name</label>
                            <input type="text" className="form-control" id="validationCustom01" 
                            name="First" value={this.state.First}  onChange={this.handleChange} required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col-md-12 mb-3">
                            <label for="validationCustom02">Last name</label>
                            <input type="text" className="form-control" id="validationCustom02" 
                            name="Last" value={this.state.Last}  onChange={this.handleChange} required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                    {/* </div>
                    <div className="form-row"> */}
                        <div className="col-md-6 mb-3">
                            <label for="validationCustom03">Email</label>
                            <input type="email" className="form-control" id="validationCustom03" name="Email" value={this.state.Email}  onChange={this.handleChange} required />
                            </div>

                        <div className="col-md-6 mb-3">
                            <label for="validationCustom03">Phone</label>
                            <input type="Number" className="form-control" id="validationCustom03" name="Phone" value={this.state.Phone}  onChange={this.handleChange} required />
                        </div>

                        <div className="col-md-12 mb-3">
                            <label for="validationCustom02">Home Address</label>
                            <input type="text" className="form-control" id="validationCustom02" 
                            name="HomeAddress" value={this.state.HomeAddress}  onChange={this.handleChange} required />
                        </div>

                        <div className="col-md-11 mb-3">
                            <label for="validationCustom05">Role</label>
                            <input type="text" className="form-control" id="validationCustom05" 
                            name="Role" value={this.state.Role} onChange={this.handleChange} required />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label for="validationCustom05">Salary</label>
                            <input type="Number" className="form-control" id="validationCustom05" 
                            name="Salary" value={this.state.Salary} onChange={this.handleChange} placeholder="Cedis" required />
                        </div>
                        
                        </div>
                        <button className="btn btn-primary" type="submit">Submit form</button>
                    </form>



                    {/* <form onSubmit={this.handleSubmit}>
                <h1>ADD NEW EMPLOYEE</h1> <br />

                    <h3>PERSONAL INFO</h3>
                    
                    <div classNameName="col-sm-12">
                    <label htmlFor="firstName">FirstName</label>
                    <input type="text" name="First" value={this.state.First}  onChange={this.handleChange}/><br />
                    </div>

                   <div classNameName="col-sm-12">
                   <label htmlFor="LastName">LastName</label>
                    <input type="text" name="Last" value={this.state.Last}  onChange={this.handleChange}/><br />
                   </div>

                    <div classNameName="col-sm-6">
                    <label htmlFor="Email"  classNameName="form-label"  >Email</label>
                    <input type="Email" name="Email" value={this.state.Email}  onChange={this.handleChange}/><br />
                    </div>

                    <div classNameName="col-sm-6">
                    <label htmlFor="Phone"  classNameName="form-label">Phone</label>
                    <input type="Number" name="Phone" value={this.state.Phone} onChange={this.handleChange}/><br />
                    </div>
                    
                    <div classNameName="col-sm-12">
                    <label htmlFor="HomeAddress"  classNameName="form-label">Home Address</label>
                    <input type="text" name="HomeAddress" value={this.state.HomeAddress} onChange={this.handleChange}/>
                    </div>
                    <br />

                    <h3>JOB INFO</h3>
                    <div classNameName="col-sm-12">
                    <label htmlFor="Role"  classNameName="form-label">Role</label>
                    <input type="text" name="Role" value={this.state.Role}  onChange={this.handleChange}/> 
                    </div>
                    <div classNameName="col-sm-6">
                    <label htmlFor="Salary"  classNameName="form-label">Salary</label>
                    <input type="Number" name="Salary" value={this.state.Salary}  onChange={this.handleChange}/><br />
                    </div>
                    <button type="submit">ADD EMPLOYEE</button>
                </form> */}
            </>
                );
    }
}

                export default EmployeeForm;
