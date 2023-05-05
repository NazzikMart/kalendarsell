import React from "react";
import "./Costs.css";
import CostItem from "./CostItem";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import { useState } from "react";

export default function Costs(props) {
  const [selectedYear, setSelectedYear] = useState("2023");
  const yearChangeHandler = (year) => {
    console.log(year);
    console.log("costs");
  };
  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        {props.costs.map((cost) => {
          return (
            <CostItem
              date={cost.date}
              description={cost.description}
              amout={cost.amout}
            />
          );
        })}
      </Card>
    </div>
  );
}
