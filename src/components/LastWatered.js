import React, { useState } from "react";
import axios from "axios";

import "./LastWatered.css";

function LastWatered(props) {
  const [watered, setWatered] = useState(false);

  const timeSince = date => {
    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
      return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  };

  const waterPlant = plant_id => {
    const lastWatered = Math.floor(Date.now() / 1000);

    let url = "";
    if (process.env.NODE_ENV !== "production") {
      url = "http://localhost:3000";
    } else {
      url = "https://backend-stalk.herokuapp.com";
    }
    console.log("url", url);
    axios
      .put(`${url}/plants/${plant_id}.json`, {
        plant: {
          last_watered: lastWatered
        },
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
      .then(res => {
        console.log("res:", res);
        if (res.status === 200) {
          setWatered(true);
        }
      })
      .catch(err => {
        console.warn("err:", err);
      });
  };

  // timeSince(new Date(props.plant.last_watered * 1000)) === "0 seconds"

  return (
    <div className="waterPlant">
      <div className="waterPlant-droplet">
        <div
          className="droplet"
          onClick={() => waterPlant(props.plant.id)}
        ></div>
      </div>
      {watered ? (
        <div className="waterPlant-text">
          <p id={props.plant.id}>Watered!</p>
        </div>
      ) : (
        <div>
          <div className="waterPlant-text">
            {
              <p id={props.plant.id}>
                Last Watered{" "}
                {timeSince(new Date(props.plant.last_watered * 1000))} Ago{" "}
              </p>
            }
          </div>
        </div>
      )}
    </div>
  );
}

export default LastWatered;
