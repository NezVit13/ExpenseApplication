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
        <CostItem
          date={props.costs[0].date}
          description={props.costs[0].description}
          amount={props.costs[0].amount}
        />
        <CostItem
          date={props.costs[1].date}
          description={props.costs[1].description}
          amount={props.costs[1].amount}
        />
        <CostItem
          date={props.costs[2].date}
          description={props.costs[2].description}
          amount={props.costs[2].amount}
        />
      </Card>
    </div>
  );
}
export default Costs;
