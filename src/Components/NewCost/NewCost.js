import React from "react";
import "./NewCost.css";
import CostForm from "./CostForm";
import { useState } from "react";

export default function NewCost(props) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    props.onAddCost(costData);
    setIsFormVisible(false);
  };

  const inputCostDataHandler = () => {
    setIsFormVisible(true);
  };

  const cancelCostHandler = () => {
    setIsFormVisible(false);
  };
  return (
    <div className="new-cost">
      {!isFormVisible && (
        <button onClick={inputCostDataHandler}>Добавити нову витрату</button>
      )}
      {isFormVisible && (
        <CostForm
          onSaveCostData={saveCostDataHandler}
          onCancel={cancelCostHandler}
        />
      )}
    </div>
  );
}
