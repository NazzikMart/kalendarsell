import React from "react";
import CostItem from "./CostItem";
import "./CostList.css";

export default function CostList(props) {
  if (props.costs.length === 0) {
    return <h2 className="cost-list__fallback">В цьому році витрат немає</h2>;
  }

  return (
    <ul className="cost-list">
      {props.costs.map((cost) => {
        return (
          <CostItem
            key={cost.id}
            date={cost.date}
            description={cost.description}
            amout={cost.amout}
          />
        );
      })}
    </ul>
  );
}
