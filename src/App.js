import CostItem from "./Components/Costs/CostItem";
import Costs from "./Components/Costs/Costs";
import Card from "./Components/UI/Card";
import NewCost from "./Components/NewCost/NewCost";

const App = () => {
  const costs = [
    {
      id: "c1",
      date: new Date(),
      description: "Холодильник",
      amout: 9999,
    },
    {
      id: "c2",
      date: new Date(),
      description: "Телевізор",
      amout: 5700,
    },
    {
      id: "c3",
      date: new Date(),
      description: "MackBook",
      amout: 47000,
    },
  ];

  const addCostHandler = (cost) => {
    console.log(cost);
    console.log("App component");
  };
  return (
    <div className="App">
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
