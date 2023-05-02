import React from "react";
import "./CostForm.css";

export default function CostForm() {
  return (
    <form>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Назва</label>
          <input type="text" />
        </div>
        <div className="new-cost__control">
          <label>Сума</label>
          <input type="number" />
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input type="date" min="2023-05-02" />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Добавити розхід</button>
        </div>
      </div>
    </form>
  );
}
