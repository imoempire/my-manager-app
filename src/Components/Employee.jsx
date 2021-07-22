import React from "react";

export default function Employee({ Employ }) {
  return (
    <>
      <h3>FirstName: {Employ.First} </h3>
      <h3>LastName: {Employ.Last} </h3>
      <h3>Email: {Employ.Email}</h3>
      <h3>Phone: {Employ.Phone}</h3>
      <h3>Home Address: {Employ.HomeAddress}</h3>
      <h3>Job Role: {Employ.Role}</h3>
      <h3>Salary: {Employ.Salary}</h3>
    </>
  );
}
