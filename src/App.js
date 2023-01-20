import Costs  from "./components/Costs";
function App() {
  const costs = [
    {
      date: new Date(2021, 2, 12),
      description: 'Freezer',
      amount: 999.99,
    },
        {
      date: new Date(2021, 2, 2),
      description: 'Freezer',
      amount: 999.99,
    },
        {
      date: new Date(2020, 1, 11),
      description: 'Freezer',
      amount: 999.99,
    },
  ]
  return (
    <div>
      <Costs  costs={costs} />
    </div>
  );
}

export default App;
