import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  //if the current state relys on the prev state, use this one , return an object
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });
  //   const titleChangeHandler = (event) => {
  //     setUserInput((prevState) => {
  //       return { ...prevState, enteredTitle: event.target.value }; // return anobject
  //     });
  //   };
  //   const AmountChangeHandler = (event) => {
  //     setUserInput((prevState) => {
  //       return { ...prevState, enteredAmount: event.target.value }; // return anobject
  //     });
  //   };
  //   const DateChangeHandler = (event) => {
  //     setUserInput((prevState) => {
  //       return { ...prevState, enteredDate: event.target.value }; // return anobject
  //     });
  //   };

  const [currentTitle, setcurrentTitle] = useState(" ");
  const [currentAmount, setcurrentAmount] = useState(" ");
  const [currentDate, setcurrentDate] = useState(" ");

  const TitleChangeHandler = (event) => {
    setcurrentTitle(event.target.value);
  };
  const AmountChangeHandler = (event) => {
    setcurrentAmount(event.target.value);
  };
  const DateChangeHandler = (event) => {
    setcurrentDate(event.target.value);
  };
  // get the userinput data
  const SubmitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: currentTitle,
      amount: +currentAmount,
      date: new Date(currentDate),
    };
    props.sumbittedForm(expenseData); //pass the data of user input to sumbittedhandler
    setcurrentTitle("");
    setcurrentAmount("");
    setcurrentDate("");
  };
  return (
    <form onSubmit={SubmitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense_control'>
          <label>Title </label>
          <input
            type='text'
            value={currentTitle}
            onChange={TitleChangeHandler}
          />
        </div>
        <div className='new-expense_control'>
          <label>Amount </label>
          <input
            type='number'
            value={currentAmount}
            onChange={AmountChangeHandler}
          />
        </div>
        <div className='new-expense_control'>
          <label>Date </label>
          <input
            type='date'
            value={currentDate}
            onChange={DateChangeHandler}
            min='2019-01-01'
            max='2022-12-31'
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button type='submit' onClick={props.onClickAdd}>
          Add Expense
        </button>
      </div>
    </form>
  );
};
export default ExpenseForm;
