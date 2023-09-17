import React, { useState } from "react";
import "./Styles.css";

export default function Engine(props) {
    const [city, setCity] = useState("");
    const [sentence, setSentence] = useState("");
    const [variant, setVariant] = useState("");

    function findCity(event) {
        event.preventDefault();
        if (city.length > 0) {
            setSentence(`It is currently 19°C in ${city}`);
        } else {
            setVariant("Try searching for another city");
        }
    }

    function displayCity(event) {
        setCity(event.target.value);
        event.preventDefault();
    }

    return (
        <div className="Form">
            <form onSubmit={findCity}>
                <input type="text" placeholder="Type a city" onChange={displayCity} />
                <input type="submit" value="Search" />
            </form>
            <h2>{sentence}</h2>
            <h3>{variant}</h3>
            <video autoPlay loop muted id="weatherVideo">
                <source id="dayVideo" src="videos/cloudy-sky.mp4" type="video/mp4" />
            </video>
            <div className="container">
                <div className="container">
                    <video autoPlay loop muted id="weatherVideo">
                        <source id="dayVideo" src="videos/sky-clouds.mp4" type="video/mp4" />
                    </video>

                    <div className="weather-app-wrapper">
                        <div className="weather-app">
                            <form id="search-form" className="mb-3">
                                <div className="row">
                                    <div className="col-9">
                                        <input type="search" placeholder="Type a city.." className="form-control" id="city-input"
                                            autoComplete="off" />
                                    </div>
                                    <div className="col-3">
                                        <input type="submit" value="Search" className="btn btn-primary w-100" />
                                    </div>
                                </div>
                            </form>
                            <div className="overview">
                                <h1 id="city">Kinshasa</h1>
                                <ul>
                                    <li>Last updated: <span id="date"></span></li>
                                    <li id="description"></li>
                                </ul>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="clearfix weather-temperature">
                                        <img src="" alt="Clear" id="icon" className="float-left" />
                                        <div className="float-left">
                                            <strong id="temperature"></strong>
                                            <span className="units"> °C</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <ul>
                                        <li>Humidity: <span id="humidity"></span>%</li>
                                        <li>Wind: <span id="wind"></span> km/h</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="weather-forecast" id="forecast"></div>
                            <div className="row">
                                <div className="col-2"></div>
                            </div>
                        </div>
                        <p>
                            <a href="https://github.com/Shimmybaks/weather-react" target="_blank" rel="noreferrer">
                                Open source code
                            </a>{" "}
                            by Shimei Bakala
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}