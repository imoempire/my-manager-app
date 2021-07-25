import React, { Component } from "react";
import "./App.css";
import EmployeeForm from "./Components/EmployeeForm";
import EmpolyeeList from "./Components/EmpolyeeList";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Employees: [

      ],
    };
  }
  addNewEmploy=(newEmployee)=>{
    newEmployee.id = Math.random().toString();
    this.setState({
      Employees: [...this.state.Employees, newEmployee]
    });
  };

  handleDelete=(EmployeesId)=>{
    const newMembers = this.state.Employees.filter((employee)=>{
      return employee.id !== EmployeesId;
    });
    this.setState({ Employees: newMembers})
  };

  handleEdit=(update)=>{
    this.setState({
      Employees: this.state.Employees.map((employee)=>
      employee.id === update.id ? update : employee ),
    });
  };

  render() {
    return (
    <>
  <div className="container-fluid" id="header">
    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
  <a className="navbar-brand" href="#">MY MANAGER</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#" style={{color: 'white'}}>HOME<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"style={{color: 'white'}}>ALL EMPLOYEE</a>
      </li>
    </ul>
  </div>
</nav>
  </div>

      <div classNameName="container App">
      <div className="row">
     <div className="col-6">
     <EmployeeForm 
     addNewEmployee={this.addNewEmploy}/>
     </div>
     <div className="col-6">
     <EmpolyeeList 
       Employees={this.state.Employees}
       handleDelete={this.handleDelete}
       handleEdit={this.handleEdit} />
      </div>
      </div>
     </div>
     </>
    );
  }
}
