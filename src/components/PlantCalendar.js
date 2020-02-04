import React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';
import { Calendar, momentLocalizer, Views  } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../App.css';


class PlantCalendar extends React.Component {

  state = {
    user: [],
    userId: localStorage.getItem('userId'),
    datesArray: []
  }

  componentDidMount(){

    axios.get(`http://localhost:3000/users/${this.state.userId}.json`)
    .then( res => {
      this.setState({ user: res.data });
      const monthStartDate = new Date();
      monthStartDate.setDate(1);
      this.state.user.plants.forEach(plant => {
        console.log("###", plant.date_acquired,plant.name);
        this.calculate( plant.name, plant.date_acquired, plant.water_days, monthStartDate );
      });
    })
    .catch(err => console.warn(err));
  }

  calculate = (plantName, startDate, waterInterval, currMonthStart) => {

    // this.state.datesArray = [];
    let acquiredDate = new Date(startDate);

    const tempDate = acquiredDate;
    console.log(tempDate);
    tempDate.setDate(1);
    if(currMonthStart < startDate) {
      this.state.datesArray = [];
      console.log("RETURN",currMonthStart,tempDate);
      return;
    }

    let dateDiff = moment(currMonthStart).diff(moment(startDate),'days');

    // TODO: loop until dateDiff % water !== 0
    let offset = 0;
    while((dateDiff % waterInterval) !== 0){
      offset++;
      dateDiff++;
    }

    let firstScheduleDt = moment(currMonthStart).add( offset, 'days' ).toDate();

    let nextScheduleDt = firstScheduleDt;
    // this.state.datesArray = [];

    //TODO: loop until end of month
    while(nextScheduleDt.getMonth() === firstScheduleDt.getMonth()){

      let calendarEntry = {
        title: plantName,
        allDay: true,
        start: nextScheduleDt,
        end: nextScheduleDt,
      }
      if( nextScheduleDt.getTime() > acquiredDate.getTime() ) {
        this.state.datesArray.push(calendarEntry);
      }
      nextScheduleDt = moment(nextScheduleDt).add(waterInterval, 'days').toDate();
    }

    this.setState({data: true});
  } // calculate

  // This calculates watering dates of plants when month view is changed in Calendar.
  monthsChangeHandler = (date) => {

    this.state.datesArray = [];
    const startDate = date.start;

    if(startDate.getDate() !== 1) {
      startDate.setMonth(startDate.getMonth()+1);
      startDate.setDate(1);
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
            views={Views.MONTH}
          />
      </div>
    );  // return
  } // render
} // PlantCalendar

export default PlantCalendar;
