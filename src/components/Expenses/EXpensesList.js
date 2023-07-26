import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const EXpensesList = (props) => {
  // let expressionContent = <p>no expression found.</p>;

  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.item.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
};
export default EXpensesList;
