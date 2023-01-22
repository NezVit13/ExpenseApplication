import './NewCost.css';
import CostForm from './CostFrom';
const NewCost = (props) =>{
  const SaveCostDataHandler = (inputCostData) =>{
   const costData = {
     ...inputCostData,
     id: Math.random().toString()
   };
   props.onAddCost(costData)
  }
  return <div className="new-cost">
<CostForm onSaveCostData={SaveCostDataHandler} />
  </div>
}

export default NewCost;