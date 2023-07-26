import React, { useState } from "react";
import "./ExpensesForm.css";

const ExpensesForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({ ...userInput, enteredTitle: event.target.value });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });

    // console.log("first", enteredTitle);
    console.log("first", event.target.value);
  };
  const amountChangedHandler = (e) => {
    setEnteredAmount(e.target.value);
    // setUserInput({ ...userInput, enteredAmount: e.target.value });
    console.log("first", e.target.value);
  };

  const dateChangedHandler = (e) => {
    setEnteredDate(e.target.value);
    // setUserInput({ ...userInput, enteredDate: e.target.value });
    console.log("first", e.target.value);
  };

  ////one function for all input

  const inputChangeHandler = (identifier, value) => {
    if (identifier == "title") {
      setEnteredTitle(value);
    } else if (identifier == "amount") {
      setEnteredAmount(value);
    } else {
      setEnteredDate(value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    console.log("expenseData", expenseData);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              // onChange={(e) => inputChangeHandler("title", e.target.value)}
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangedHandler}
              // onChange={(e) => inputChangeHandler("amount", e.target.value)}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2020-12-31"
              onChange={dateChangedHandler}
              value={enteredDate}
              // onChange={(e) => inputChangeHandler("date", e.target.value)}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>
            cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </>
  );
};
export default ExpensesForm;
