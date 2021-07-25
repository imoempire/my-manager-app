import React from 'react';
import Employee from '../Components/Employee';

export default function EmpolyeeList({Employees, handleDelete, handleEdit}) {
    const Employ = Employees.map((employ)=>{
        return (
            <Employee 
             Employ={employ}
             handleDelete={handleDelete}
             handleEdit={handleEdit}
             />
        );

    })
    return (
        <div>
            <div>{ Employ }</div>
        </div>
    )
}
