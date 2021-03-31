import React, { Component } from "react";
import { addClass } from "@syncfusion/ej2-base";
import { CalendarComponent } from "@syncfusion/ej2-react-calendars";
//css
import styles from "./calendar.module.sass";

export default class AppCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateArray: [],
    };
    this.date = "";
  }

  componentDidMount() {
    this.setText();
  }

  setText = () => {
    let monthDiv = document.createElement("div");
    let month = document.querySelector(".e-header.e-month .e-day.e-title");
    let buttonContainer = document.querySelector(
      ".e-header.e-month .e-icon-container"
    );
    let monthText = month.innerText;
    let displayDate = monthText.split(" ");
    monthDiv.className = styles.calendar_month_display;
    month.className = `${styles.calendar_year_display} e-day e-title`;
    month.innerText = displayDate[1];
    monthDiv.innerText = displayDate[0];
    if (buttonContainer.childNodes.length === 2)
      buttonContainer.insertBefore(monthDiv, buttonContainer.childNodes[1]);
    else {
      buttonContainer.removeChild(buttonContainer.childNodes[1]);
      buttonContainer.insertBefore(monthDiv, buttonContainer.childNodes[1]);
    }
  };

  onchange = (args) => {
    console.log("change args", args);
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("in");
    setTimeout(() => {
      let month = document.querySelector(".e-header.e-month .e-day.e-title");
      console.log(month);
      if (month.innerText.indexOf(" ") >= 0) this.setText();
    }, 300);
  }

  getDisplayedMonthYear = (dateArray) => {
    if (dateArray.length > 20) {
      let d = new Date(dateArray[20].date);
      let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
      let mo = new Intl.DateTimeFormat("en", { month: "long" }).format(d);
      return [mo, ye];
    }
  };

  customDates(args) {
    this.setState({ dateArray: [...this.state.dateArray, args] }, () => {
      this.date = this.getDisplayedMonthYear(this.state.dateArray);
    });
    /*Dates need to be customized*/
    if (
      args.date.getTime() ===
      new Date(
        "Mon Mar 01 2021 00:00:00 GMT+0530 (India Standard Time)"
      ).getTime()
    ) {
      this.specialDate(args, "Jonty_Birthday");
    }
    // if (args.date.getDate() === 2) {
    //   this.specialDate(args, "Katty_Birthday");
    // }
    // if (args.date.getDate() === 10) {
    //   this.specialDate(args, "Birthday");
    // }
    // if (args.date.getDate() === 15) {
    //   this.specialDate(args, "Farewell");
    // }
    // if (args.date.getDate() === 25) {
    //   this.specialDate(args, "Vacation");
    // }
  }

  specialDate(args, name) {
    let span = document.createElement("span");
    span.setAttribute("class", "e-icons highlight");
    args.element.firstElementChild.setAttribute("title", name + "!");
    args.element.firstElementChild.className = "spec";
    addClass([args.element], ["e-day", "special", name.toLowerCase()]);
    args.element.setAttribute("data-val", name + "!");
    args.element.setAttribute("title", name + "!");
    args.element.appendChild(span);
  }

  render() {
    return (
      <>
        <CalendarComponent
          id={`${styles.calendar}`}
          renderDayCell={this.customDates.bind(this)}
          change={this.onchange}
          //   start={this.state.view}
          //   depth={this.state.view}
          className="e-customStyle"
        ></CalendarComponent>
      </>
    );
  }
}
