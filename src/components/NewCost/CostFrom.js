import React, {useState} from 'react'
import './CostForm.css';
const CostForm = (props) =>{
  const [name, setName] = useState('')
  const nameChangeHandler = (e) =>{
      setName(e.target.value);
  }
  const [sum, setSum] = useState('')
  const sumChangeHandler = (e) => {
    setSum(e.target.value);
  }
  const [date, setDate] = useState("");
    const dateChangeHandler = (e) => {
      setDate(e.target.value);
    };
    const submitHandler = (event) =>{
      event.preventDefault();

      const costData = {
        name : name,
        amount : sum,
        date : new Date(date),
      }
      props.onSaveCostData(costData);
      setName('');
      setSum('');
      setDate('');
    };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Name</label>
          <input type="text" value={name} onChange={nameChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label>Sum</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={sum}
            onChange={sumChangeHandler}
          />
        </div>
        <div className="new-cost__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2100-12-31"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Add a expense</button>
        </div>
      </div>
    </form>
  );

}
export default CostForm;