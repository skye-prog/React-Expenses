import ExpenseItem from "./ExpenseItem";

import "./ExpenseList.css";
const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found No Items</h2>;
  }
  return (
    <div className='expenses-list'>
      {props.items.map((pramter) => {
        //render items
        return (
          <ExpenseItem
            key={pramter.id}
            title={pramter.title}
            amount={pramter.amount}
            date={pramter.date}
          />
        );
      })}
    </div>
  );
};
export default ExpenseList;
