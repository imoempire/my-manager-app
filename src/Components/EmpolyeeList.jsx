import React from 'react';
import Employee from '../Components/Employee';

export default function EmpolyeeList({Employees}) {
    const Employ = Employees.map((employ)=>{
        return (
            <Employee 
             Employ={employ}
             />
        );

    })
    return (
        <div>
            <div>{ Employ }</div>
        </div>
    )
}
