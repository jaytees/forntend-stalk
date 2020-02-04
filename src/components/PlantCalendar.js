import React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';
<<<<<<< HEAD
import { Calendar, momentLocalizer, Views  } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import '../App.css'
=======
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
>>>>>>> f0eb132df8eae59e476c94aabdb67d40b89d86c9


let waterInterval = 0;

class WaterInterval extends React.Component {

  handleChange = (event) => {
    waterInterval = event.target.value;
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(waterInterval);
  }; // handleSubmit

  render() {
    return(
      <div>
        <form onSubmit={ this.handleSubmit }>
          <label> Watering Interval (in days) </label>
          <input type="text" onChange={this.handleChange} /> <br />
          <input type="submit" value="Update" />
        </form>
      </div>
    );  // return
  } // render
} // WaterInterval

class PlantCalendar extends React.Component {

  state = {
<<<<<<< HEAD
    user: [],
    id: localStorage.getItem('userId'),
=======
>>>>>>> f0eb132df8eae59e476c94aabdb67d40b89d86c9
    date: new Date(),
    acquiredDate: new Date("2019-12-28"),
    datesArray: [],
    data: false
  }

  onChange = date => this.setState({date});
<<<<<<< HEAD

  componentDidMount(){
    axios.get(`http://localhost:3000/users/${this.state.id}.json`)
    .then( res => {
      this.setState({
        user: res.data
      });

      const monthStartDate = new Date();
      monthStartDate.setDate(1);
      this.state.user.plants.forEach(plant => {
        console.log("###", plant.date_acquired,plant.name);
        this.calculate( plant.name, plant.date_acquired, plant.water_days, monthStartDate );
      });
      // console.log('PLANTS**: ', this.state.user.plants);
    });
  }

  calculate = (plantName, startDate, waterInterval, currMonthStart) => {

    // this.state.datesArray = [];
    let acquiredDate = new Date(startDate);
    if(waterInterval <= 0) {
      this.setState({data: true});
      return;
    }

    const tempDate = acquiredDate;
    console.log(tempDate);
    tempDate.setDate(1);
    if(currMonthStart < startDate) {
      this.state.datesArray = [];
      console.log("RETURN",currMonthStart,tempDate);
=======
  // axios.get('http://localhost:3000/plants')
  // .then(res => {
  //   console.log(res);
  //
  //   // this.setState({acquiredDate: res.data});
  // })
  // .catch(err => console.warn(err));

  calculate = (startDate, waterInterval, currMonthStart) => {

    if(waterInterval <= 0) {
      this.setState({data: true});
      this.state.datesArray = [];
>>>>>>> f0eb132df8eae59e476c94aabdb67d40b89d86c9
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
<<<<<<< HEAD
    // this.state.datesArray = [];
=======
    this.state.datesArray = [];
>>>>>>> f0eb132df8eae59e476c94aabdb67d40b89d86c9

    //TODO: loop until end of month
    while(nextScheduleDt.getMonth() === firstScheduleDt.getMonth()){

<<<<<<< HEAD
      let calendarEntry = {
        title: plantName,
        allDay: true,
        start: nextScheduleDt,
        end: nextScheduleDt,
      }
      if( nextScheduleDt.getTime() > acquiredDate.getTime() ) {
        console.log("### IN IF");
        this.state.datesArray.push(calendarEntry);
      }
      nextScheduleDt = moment(nextScheduleDt).add(waterInterval, 'days').toDate();
    }
    // console.log("DATES ARR:", this.state.datesArray);

    this.setState({data: true});
  } // calculate

  monthsChangeHandler = (date) => {

    this.state.datesArray = [];
    const startDate = date.start;

    console.log('MONTH: ', date);
    console.log(typeof(startDate));
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
=======
      this.state.datesArray.push(nextScheduleDt);
      nextScheduleDt = moment(nextScheduleDt).add(waterInterval, 'days').toDate();

    }

    this.setState({data: true});
  }

  monthsChangeHandler = (month) => {

    this.calculate(this.state.acquiredDate, waterInterval, month);
  }

  render() {
    return(
      <div>
        <br />
        <WaterInterval onSubmit={(waterInterval) => {
          this.state.date.setDate(1);
          this.calculate(this.state.acquiredDate, waterInterval, this.state.date)
        }}
        />
        {
          this.state.data
            ? < DayPicker selectedDays={this.state.datesArray}
                  onMonthChange = {this.monthsChangeHandler}/>
            : null
        }
        <br />
>>>>>>> f0eb132df8eae59e476c94aabdb67d40b89d86c9
      </div>
    );  // return
  } // render
} // PlantCalendar

export default PlantCalendar;
