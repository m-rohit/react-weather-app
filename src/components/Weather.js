import React from 'react';

class Weather extends React.Component {
    render() {
        return (
            <div className="container">
            <div className="row">
            
            <div className="col-6">
            {this.props.city && this.props.country && <p className="h6">Temperature: <span className="text-warning">{this.props.temperature} </span></p>}
            {this.props.city && this.props.country && <p className="h6">Pressure: <span className="text-warning">{this.props.pressure} </span> </p>}
            {this.props.city && this.props.country && <p className="h6">Wind Speed: <span className="text-warning">{this.props.speed} </span></p>}
            {this.props.city && this.props.country && <p className="h6">Humidity: <span className="text-warning">{this.props.humidity} </span> </p>}
            {this.props.city && this.props.country && <p className="h6">Conditions: <span className="text-warning">{this.props.description}</span></p>}
            </div>

            <div className="col-6">
            {this.props.city && this.props.country && <p className="h6">City: <span className="text-success">{this.props.city}</span> </p>}
            {this.props.city && this.props.country && <p className="h6">Country: <span className="text-success">{this.props.country}</span></p>}
            {this.props.city && this.props.country && <p className="h6">Icon: <span className="text-warning">{this.props.icon}</span> </p>}
            </div>

            </div> 
            <div>{this.props.error && <h5 className="text-warning">{this.props.error}</h5>}</div>
            </div>
        ); 
    }
}

export default Weather;