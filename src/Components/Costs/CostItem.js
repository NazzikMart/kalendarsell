import React from "react";
import "./CostItem.css";
import Card from "../UI/Card";
import { useState } from "react";

import CostDate from "./CostDate";

export default function CostItem(props) {
  function changeDescription() {
    console.log("click");
  }
  return (
    <Card className="cost-item">
      <div className="">
        <CostDate date={props.date} />
      </div>
      <div className="cost-item__description">
        <h2>{props.description}</h2>
        <div className="cost-item__price">{props.amout} грн</div>
      </div>
      <button onClick={changeDescription}>Редагувати</button>
    </Card>
  );
}
