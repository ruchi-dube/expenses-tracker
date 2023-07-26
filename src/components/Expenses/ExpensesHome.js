import React, { useState } from "react";
// import ExpenseItem from "./ExpenseItem";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
// import Card from "../UI/Card";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import EXpensesList from "./EXpensesList";
import ExpensesChart from "./ExpensesChart";

const ExpensesHome = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log("selectedYear", selectedYear);
  };

  const filterExpression = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilterHandler={changeFilterHandler}
      />
      <ExpensesChart expenses={filterExpression} />
      <EXpensesList item={filterExpression} />
    </Card>
  );
};

export default ExpensesHome;
