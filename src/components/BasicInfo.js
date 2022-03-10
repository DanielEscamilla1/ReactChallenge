import React, { Component } from "react";

function BasicInfo(props) {
  console.log(props);
  return (
    <div>
      {props.persons.map((person) => {
        return (
          <div key={person.name}>
            My name is {person.name} and my number is {person.number} and I was
            born on {person.dateOfBirth}.
          </div>
        );
      })}
    </div>
  );
}

export default BasicInfo;
