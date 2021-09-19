import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
function Expenses(props) {
  const [currentOption, setcurrentOption] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setcurrentOption(selectedYear);
  };
  /*
filter or map function will return a new array and not change the
 the original array, coz useState always  stores a string, so using
/toString ' */
  const filterExpense = props.items.filter((pramters) => {
    return pramters.date.getFullYear().toString() === currentOption;
  });

  return (
    <div className='expenses'>
      <ExpenseFilter
        selected={currentOption}
        ChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filterExpense} />
      <ExpenseList items={filterExpense} />
    </div>
  );
}
export default Expenses;
