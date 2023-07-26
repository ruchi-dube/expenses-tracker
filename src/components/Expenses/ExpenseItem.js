import React, { useState } from "react";
import "./ExpensesItem.css";
import ExpensesDate from "./ExpensesDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <>
      <li>
        <Card className="expense-item">
          <ExpensesDate date={props.date} />
          <div className="expense-item__description">
            <h2>{props.title}</h2>
          </div>
          <div className="expense-item__price">${props.amount}</div>
        </Card>
      </li>
    </>
  );
};

export default ExpenseItem;
