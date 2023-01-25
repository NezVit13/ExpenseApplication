import Costs  from "./components/Costs";
import NewCost from "./components/NewCost/NewCost";
import { useState } from "react";
  const INITIAL_COSTS = [
    {
      id: 1,
      date: new Date(2021, 2, 12),
      description: "Freezer",
      amount: 999.99,
    },
    {
      id: 2,
      date: new Date(2021, 2, 2),
      description: "Freezer",
      amount: 999.99,
    },
    {
      id: 3,
      date: new Date(2020, 1, 11),
      description: "Freezer",
      amount: 999.99,
    },
  ];
function App() {
  const [costs, SetCosts] = useState(INITIAL_COSTS);
  const addCostHandler = (cost) =>{
    SetCosts(prevCosts =>{
      return [cost, ...prevCosts]
    });
  }
  return (
    <div>
      <NewCost onAddCost = {addCostHandler}/>
      <Costs  costs={costs} />
    </div>
  );
}

export default App;
