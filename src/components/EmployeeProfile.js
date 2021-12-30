import React, { Component } from 'react';
class EmployeeProfile extends Component {
    render() { 
        return (
            <div style={{ marginLeft: "20px"}}>
                    <div className="card" style={{ width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{this.props.position}</h6>
                            <p className="card-text">{this.props.bio}</p>
                            <a href="http://google.com" className="card-link">{this.props.fb}</a>
                            <a href="http://google.com" className="card-link">{this.props.git}</a>
                        </div>
                    </div>
            </div>
        );
    }
}
 
export default EmployeeProfile;