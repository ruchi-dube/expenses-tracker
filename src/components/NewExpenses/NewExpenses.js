import React, { useState } from "react";
import "./NewExpenses.css";
import ExpensesForm from "./ExpensesForm";

const NewExpenses = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
      id: Math.random().toString(),
    };
    props.addExpenses(expenseData);
    setIsEditing(false);
    console.log("expenseData", expenseData);
  };

  const startEditingHandler = () => {
    // setShowF/orm(false);
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add Expense Form</button>
      )}

      {isEditing && (
        <ExpensesForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
    // <div>NewExpenses</div>
  );
};

export default NewExpenses;
