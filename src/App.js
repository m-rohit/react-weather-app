import React from "react";

import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";

//const API_KEY = "3585775f387b0d0cba6c5b3dc41b8167";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    pressure: undefined,
    speed: undefined,
    icon: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=5626cd66bd8756e78b476d139d9b7d98`);
    const data = await api_call.json();
    if (city && country) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        icon: data.weather[0].icon,
        speed: data.wind.speed,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        icon: undefined,
        speed: undefined,
        pressure: undefined,
        error: "Please Enter the City Name !"
      });
    }
  }

  render() {
    return (
      <div>
        <div className="main">
        <div className="container">
        <Title />
        </div>
        <div className="container">
        <div className="row justify-content-md-center">
        <div className="col-md-6 col-sm-12 col-xs-12">
        <Form getWeather={this.getWeather} />
        </div>
        </div>
        </div>
        <div className="container">
        <div className="row justify-content-md-center">
        <div className="col-md-6 col-sm-12 col-xs-12">
        <Weather 
        temperature={this.state.temperature} 
        humidity={this.state.humidity}
        city={this.state.city}
        country={this.state.country}
        description={this.state.description}
        icon={this.state.icon}
        pressure={this.state.pressure}
        speed={this.state.speed}
        error={this.state.error}
        />
        </div>
        </div>
        </div>


        </div>
     </div>
    );
  }
};

export default App;