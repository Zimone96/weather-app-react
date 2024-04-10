import React, { useState } from "react";
import "./form.css";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

export default function Form(props) {
  let [city, cityDisplay] = useState("");
  let [citySearch, searchCity] = useState("");
  let [temperature, setTemperature] = useState(null);

  function showTemperature(response) {
    setTemperature(response.data.main.temp);
  }

  function handleSearch(event) {
    event.preventDefault();
    searchCity(`${city}`);

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e450bc345a80a08ada69fd5c714d871d&units=metric`;
    axios.get(url).then(showTemperature);
  }

  function updateCity(event) {
    cityDisplay(event.target.value);
  }

  return (
    <form onSubmit={handleSearch}>
      <div className="form-row">
        <div className="col">
          <input
            id="search-bar"
            type="Search"
            className="form-control"
            placeholder="Your City?"
            onChange={updateCity}
          />
        </div>
        <div className="col">
          <input
            id="submit"
            type="Submit"
            className="form-control"
            value="Search"
          />
        </div>
      </div>
      <h1 className="mt-3">{citySearch}</h1>
      <p className="text-center"> {temperature}</p>
      <div className="row">
        <div className="col text-center ">
          <ReactAnimatedWeather
            className="i"
            icon="CLEAR_DAY"
            color="Goldenrod"
            size={70}
            animate={true}
          />
        </div>
        <div className="col">
          <p className="humid-wind">
            <span className="humid">Humidity: 90% </span>
            <br />
            <span className="wind"> Wind: 21 km/h </span>
          </p>
        </div>
      </div>
    </form>
  );
}
