import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.getWeather} className="form-group">
                <input className="form-control" type="text" name="city" placeholder="city..."/>
                <hr></hr>
                <input className="form-control" type="text" name="country" placeholder="country..."/>
                <hr></hr>
                <button className="btn btn-danger btn-lg btn-block">Get Weather</button>
            </form>
        );
    }
}

export default Form;