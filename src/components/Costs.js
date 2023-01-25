import CostItem from "./CostItem";
import "./Costs.css";
import Card from "./Card";
import CostsFilter from "./CostsFilter";
import { useState } from "react";
const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState('2021');
const changeYearHandler = (year) =>{
  setSelectedYear(year)
}
  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={changeYearHandler} />
        {props.costs.map(cost =><CostItem 
        date={cost.date}
        description={cost.description}
        amount ={cost.amount}/>)}
      </Card>
    </div>
  );
}
export default Costs;
