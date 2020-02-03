import React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';


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
    date: new Date(),
    acquiredDate: new Date("2019-12-28"),
    datesArray: [],
    data: false
  }

  onChange = date => this.setState({date});
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
    this.state.datesArray = [];

    //TODO: loop until end of month
    while(nextScheduleDt.getMonth() === firstScheduleDt.getMonth()){

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
      </div>
    );  // return
  } // render
} // PlantCalendar

export default PlantCalendar;
