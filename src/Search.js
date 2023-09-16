import React, { useState } from "react";
import "./App.css";
export default function Engine(props) {
    let [city, showCity] = useState("");
    let [sentence, displaySentence] = useState("");
    let [variant, showVariant] = useState("");

    function findCity(event) {
        event.preventDefault();
        if (city.length > 0) {
            displaySentence(`It is currently 19 C in ${city}`);
        } else {
            showVariant("Try to search for another city");
        }
    }

    function displayCity(event) {
        showCity(event.target.value);
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
        </div>
    );
}
