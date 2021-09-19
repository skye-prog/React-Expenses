import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [isNew, setisNew] = useState(false);
  const onClickHandler = () => {
    setisNew(true);
  };
  const onCancelHandler = () => {
    setisNew(false);
  };
  // anyparms receive the data from the submit data
  const sumbittedFormhandler = (anyparms) => {
    const expenseData = {
      ...anyparms,
      id: Math.random().toString(),
    };
    props.addNewitems(expenseData);
  };
  let currentState = <button onClick={onClickHandler}>Add New Item</button>;
  if (isNew) {
    currentState = (
      <ExpenseForm
        sumbittedForm={sumbittedFormhandler}
        onCancel={onCancelHandler} //onCancel can be random names
        onClickAdd={onCancelHandler}
      />
    );
  }

  return (
    <div className='new-expense'>
      <div className='new-expense__actions'>{currentState}</div>
    </div>
  );
};

export default NewExpense;
