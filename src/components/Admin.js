import React, { Component } from "react";
class Admin extends Component {
	render() {
		return (
			<div
				style={{
					boxShadow: "1px 1px 10px gray",
					padding: "20px",
					marginTop: "10px",
					marginLeft: "25%",
					width: "50%",
					border: "1px solid gray",
				}}
			>
				<h1>Admin</h1>
				<hr />
				<h4 style={{ color: "gray" }}>Name: {this.props.name}</h4>
				<h5>Info: {this.props.info}</h5>
			</div>
		);
	}
}

export default Admin;
