import React from "react";
import "./Costs.css";
import CostItem from "./CostItem";
import Card from "./Card";

export default function Costs(props) {
  return (
    <Card className="costs">
      <CostItem
        description={props.costs[0].description}
        amout={props.costs[0].amout}
        date={props.costs[0].date}
      />
      <CostItem
        description={props.costs[1].description}
        amout={props.costs[1].amout}
        date={props.costs[1].date}
      />
      <CostItem
        description={props.costs[2].description}
        amout={props.costs[2].amout}
        date={props.costs[2].date}
      />
    </Card>
  );
}
