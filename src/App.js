import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const InitialExpenses = [
    {
      id: 1,
      date: new Date(2021, 7, 14),
      title: "Kitchen Tools",
      amount: 70,
    },
    {
      id: 2,
      date: new Date(2021, 9, 14),
      title: "room Tools",
      amount: 100,
    },
    {
      id: 3,
      date: new Date(2019, 6, 14),
      title: "gymTools",
      amount: 170,
    },
    {
      id: 4,
      date: new Date(2018, 8, 14),
      title: "makeup Tools",
      amount: 190,
    },
  ];
  const [currentExpense, setCurrentExpense] = useState(InitialExpenses);
  const addNewitemshandler = (newExpense) => {
    // If the state depends on the previous state, using the updating form function.
    setCurrentExpense((prevExpense) => {
      // add newItems into a array
      return [newExpense, ...prevExpense];
    });
  };
  return (
    <div>
      <NewExpense addNewitems={addNewitemshandler} />
      <Expenses items={currentExpense} />
    </div>
  );
}

export default App;
