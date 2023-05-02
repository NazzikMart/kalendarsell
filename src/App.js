import CostItem from "./Components/Costs/CostItem";
import Costs from "./Components/Costs/Costs";
import Card from "./Components/UI/Card";
import NewCost from "./Components/NewCost/NewCost";

const App = () => {
  const costs = [
    {
      date: new Date(),
      description: "Холодильник",
      amout: 9999,
    },
    {
      date: new Date(),
      description: "Телевізор",
      amout: 5700,
    },
    {
      date: new Date(),
      description: "MackBook",
      amout: 47000,
    },
  ];
  return (
    <div className="App">
      <NewCost />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
