import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";

class ProfilePage extends React.Component {
  state = {
    id: localStorage.getItem("userId"),
    user: [],
    notificationId: "",
    notifications: []
  };

  componentDidMount() {
    let url = "";
    if (process.env.NODE_ENV !== "production") {
      url = "http://localhost:3000";
    } else {
      url = "https://backend-stalk.herokuapp.com";
    }

    axios
      .get(`${url}/users/${this.state.id}.json`)

      .then(res => {
        this.setState({ user: res.data });

        const currentDate = moment()
          .hours(0)
          .minutes(0)
          .seconds(0);

        this.state.user.plants.forEach(plant => {
          let acquiredDate = moment(plant.date_acquired);

          // checks if any plants need to be watered today and gives notifications
          if (currentDate.diff(acquiredDate, "days") % plant.water_days === 0) {
            this.setState({
              notificationId: store.addNotification({
                title: "Water me!",
                message: `I am ${plant.name}`,
                type: "success",
                insert: "top",
                container: "top-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                  duration: 10000,
                  onScreen: true,
                  pauseOnHover: true
                }
              })
            });

            this.state.notifications.push(this.state.notificationId);
          }
        });
      });
  }

  componentWillUnmount() {
    // console.log("UNMOUNT!!!");
    this.state.notifications.forEach(n => {
      store.removeNotification(n);
    });
  }

  render() {
    return (
      <div>
        <h2 className="centered">Profile Page for {this.state.user.name}</h2>
        <div className="profileButtons">
          <Link to="/users">
            <div className="profileButton slide-top">STALKERS</div>
          </Link>
          <Link to="/addplant">
            <div className="profileButton slide-top">+PLANT</div>
          </Link>
          <Link to={`/mygarden/${this.state.user.id}`}>
            <div className="profileButton slide-top">MY GARDEN</div>
          </Link>
          <Link to={`/plantcalendar/${this.state.user.id}`}>
            <div className="profileButton slide-top">CALENDAR</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
