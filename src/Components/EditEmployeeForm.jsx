import React, { Component } from 'react';

class EmployeeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            First: props.Employ.First || '',
            Last: props.Employ.Last || '',
            Email: props.Employ.Email || '',
            Phone: props.Employ.Phone || '',
            HomeAddress: props.Employ.HomeAddress || '',
            Role: props.Employ.Role || '',
            Salary: props.Employ.Salary || '',
            id: props.Employ.id || '',
        }
    };
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleEdit(this.state);
        this.setState({
            First: '',
            Last: '',
            Email: '',
            Phone: '',
            HomeAddress: '',
            Role: '',
            Salary: '',
        });
        this.props.closeModal();
    }
    render() {
        return (
            <>
                <form className="needs-validation" novalidate onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <h3>PERSONAL INFO</h3>
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
                            <h3>JOB INFO</h3>
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
                        <button className="btn btn-primary" type="submit">ADD EMPLOYEE</button>
                    </form>
            </>
                );
    }
}

                export default EmployeeForm;
