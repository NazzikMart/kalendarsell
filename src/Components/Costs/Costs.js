import React from "react";
import "./Costs.css";
import CostItem from "./CostItem";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import { useState } from "react";

export default function Costs(props) {
  const [selectedYear, setSelectedYear] = useState("2023");
  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  let costsContent = <p>В цьому році витрат немає</p>;

  if (filteredCosts.length > 0) {
    costsContent = filteredCosts.map((cost) => {
      return (
        <CostItem
          key={cost.id}
          date={cost.date}
          description={cost.description}
          amout={cost.amout}
        />
      );
    });
  }
  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        {costsContent}
      </Card>
    </div>
  );
}
