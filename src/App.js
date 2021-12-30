import React, { Component } from "react";
import Admin from "./components/Admin";
import EmployeeProfile from "./components/EmployeeProfile";

class App extends Component {
  state = {
    employees: [
      {
        name: "Anik Barua",
        position: "JS Trainee",
        bio: "He is an optimistic person",
        fb: "facebook",
        git: "github",
      },
      {
        name: "Raihan Ahmed",
        position: "Associate Software Engineer",
        bio: "He is an optimistic person",
        fb: "facebook",
        git: "github",
      },
      {
        name: "Moutushi Khan",
        position: "Teacher",
        bio: "She is an optimistic person",
        fb: "facebook",
        git: "github",
      },
      {
        name: "Alisha Jaman",
        position: "JS Trainee",
        bio: "She is an optimistic person",
        fb: "facebook",
        git: "github",
      },
      {
        name: "Tanvir Hossain",
        position: "Learner",
        bio: "He is an optimistic person",
        fb: "facebook",
        git: "github",
      },
    ],
  };
  render() {
    return (
      <>
        <Admin name = {"Habibur Rahman"} info = {"I am an admin working here for 2 years. And I love doing adminship."}></Admin>
        {
          this.state.employees.map(employee => <EmployeeProfile name = {employee.name} position = {employee.position} bio = {employee.bio} fb = {employee.fb} git = {employee.git}></EmployeeProfile>)
        }
      </>
    );
  }
}

export default App;
