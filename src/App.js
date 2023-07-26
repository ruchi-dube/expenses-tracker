import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
// import Expenses from "./components/Expenses";
import ExpensesHome from "./components/Expenses/ExpensesHome";
import NewExpenses from "./components/NewExpenses/NewExpenses";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "car",
    amount: "228",
    date: new Date(2023, 2, 23),
  },
  {
    id: 2,
    title: "car",
    amount: "228",
    date: new Date(2023, 2, 23),
  },
  {
    id: 3,
    title: "car",
    amount: "228",
    date: new Date(2023, 2, 23),
  },
  {
    id: 4,
    title: "car",
    amount: "228",
    date: new Date(2023, 2, 23),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const AddExpenses = (expenseData) => {
    setExpenses((prevState) => {
      return [expenseData, ...prevState];
    });
    console.log("first", expenseData);
  };

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}),
  //   React.createElement(Expenses, { expenses: expenses })
  // );

  return (
    <div className="App">
      {/* <h2>Let's get started!!</h2> */}
      <NewExpenses addExpenses={AddExpenses} />
      <ExpensesHome expenses={expenses} />
    </div>
  );
}

export default App;
