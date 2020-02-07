import React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';
import { Calendar, momentLocalizer  } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../App.css';


class PlantCalendar extends React.Component {

  state = {
    user: [],
    userId: localStorage.getItem('userId'),
    datesArray: []
  }

  componentDidMount(){
    let url = '';
    if (process.env.NODE_ENV !== 'production') {
      url = 'http://localhost:3000';
    } else {
      url = 'https://backend-stalk.herokuapp.com';
    }
    console.log('url', url);
    axios.get(`${url}/users/${this.state.userId}.json`)
    .then( res => {
      this.setState({ user: res.data });
      const monthStartDate = new Date();
      monthStartDate.setDate(1);
      this.state.user.plants.forEach(plant => {
        // Water interval dates will be calculated when page is loaded.
        this.calculate( plant.name, plant.date_acquired, plant.water_days, monthStartDate );
      });
    })
    .catch(err => console.warn(err));
  }

  // This function calculates watering dates for plants considering plant acquired date
  // and water interval.
  calculate = (plantName, startDate, waterInterval, currMonthStart) => {

    let acquiredDate = new Date(startDate);
    acquiredDate.setHours(0);
    acquiredDate.setMinutes(0);

    // date difference between current month starting date and plant acquired date
    let dateDiff = moment(currMonthStart).diff(moment(startDate),'days');

    let offset = 0;
    // loops until dateDiff is divisible by waterInterval
    while((dateDiff % waterInterval) !== 0){
      offset++; // incremented so that offset days are added to calculate first schedule date
      dateDiff++;
    }

    // adds offset days to current month start date
    let firstScheduleDt = moment(currMonthStart).add( offset, 'days' ).toDate();

    let nextScheduleDt = firstScheduleDt;

    // loops and calculates watering dates only for current month view.
    while(nextScheduleDt.getMonth() === firstScheduleDt.getMonth()){

      let calendarEntry = {
        title: plantName,
        allDay: true,
        start: nextScheduleDt,
        end: nextScheduleDt,
      }
      // Watering dates will be pushed into array only if nextScheduleDt is ahead of
      // acquiredDate in a month.
      if( nextScheduleDt.getTime() >= acquiredDate.getTime() ) {
        this.state.datesArray.push(calendarEntry);
      }
      // waterInterval days will be added to nextScheduleDt to calculate next watering date.
      nextScheduleDt = moment(nextScheduleDt).add(waterInterval, 'days').toDate();
    }
  } // calculate

  // This function is called to calculate watering dates of plants when month view is changed in Calendar.
  monthsChangeHandler = (date) => {

    this.state.datesArray = [];

    const startDate = new Date(date.start);

    if(startDate.getDate() !== 1) {
      startDate.setDate(1); // date is set to 1st of month w.r.t start date displayed on view.

      // increments to next month so that current month in a view is considered to
      // display watering dates.
      startDate.setMonth(startDate.getMonth()+1);
    }

    this.state.user.plants.forEach(plant => {
      this.calculate( plant.name, plant.date_acquired, plant.water_days, startDate );
    });
  } // monthsChangeHandler


  render() {
    return(
      <div className="container">
          <Calendar
            events={this.state.datesArray}
            localizer={momentLocalizer(moment)}
            style={{ height: '80vh' }}
            onRangeChange={this.monthsChangeHandler}
          />
      </div>
    );  // return
  } // render
} // PlantCalendar

export default PlantCalendar;
