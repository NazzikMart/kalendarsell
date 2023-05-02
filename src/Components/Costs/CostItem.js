import React from "react";
import "./CostItem.css";
import Card from "../UI/Card";
import { useState } from "react";

import CostDate from "./CostDate";

export default function CostItem(props) {
  const [description, setDescription] = useState(props.description);

  function changeDescriptionHandler() {
    setDescription("new cost");
  }
  return (
    <Card className="cost-item">
      <div className="">
        <CostDate date={props.date} />
      </div>
      <div className="cost-item__description">
        <h2>{description}</h2>
        <div className="cost-item__price">{props.amout} грн</div>
      </div>
      <button onClick={changeDescriptionHandler}>Редагувати</button>
    </Card>
  );
}
