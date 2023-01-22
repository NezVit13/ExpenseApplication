import Costs  from "./components/Costs";
import NewCost from "./components/NewCost/NewCost";
function App() {
  const costs = [
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
  const addCostHandler = (cost) =>{
    console.log(cost);
  }
  return (
    <div>
      <NewCost onAddCost = {addCostHandler}/>
      <Costs  costs={costs} />
    </div>
  );
}

export default App;
