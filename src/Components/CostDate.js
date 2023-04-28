import React from "react";
import "./CostDate.css";

export default function CostDate(props) {
  const month = props.date.toLocaleString("uk-UK", {
    month: "long",
  });
  const year = props.date.getFullYear();
  const day = props.date.getDate();
  return (
    <div className="cost-date">
      <div className="cost-date__mounth">{month}</div>
      <div className="cost-date__day">{day}</div>
      <div className="cost-date__year">{year}</div>
    </div>
  );
}
