import React, { Component } from "react";

class EmployeeProfile extends Component {
	render() {
		const { name, position, bio, fb, git } = this.props;

		return (
			<div style={{
                boxShadow: "1px 1px 10px gray",
                padding: "20px",
                marginTop: "10px",
                marginLeft: "25%",
                width: "50%",
                border: "1px solid gray",
            }}>
				<div className="card" style={{ width: "18rem" }}>
					<div className="card-body">
						<h5 className="card-title">{name}</h5>
						<h6 className="card-subtitle mb-2 text-muted">
							{position}
						</h6>
						<p className="card-text">{bio}</p>
						<a href="http://google.com" className="card-link">
							{fb}
						</a>
						<a href="http://google.com" className="card-link">
							{git}
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default EmployeeProfile;
