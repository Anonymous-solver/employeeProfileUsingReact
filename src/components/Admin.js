import React, { Component } from "react";
class Admin extends Component {
  render() {
    return (
      <>
        <h1>Admin</h1>
        <h4>Name: {this.props.name}</h4>
        <h4>
          Info: {this.props.info}
        </h4>
        <hr />
      </>
    );
  }
}

export default Admin;
