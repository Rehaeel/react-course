import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");

    const filteredChangeHandler = (year) => {
        setFilteredYear(year);
    };

    const yearValidationFilter = props.item.filter((year) => {
        return year.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onFilterChange={filteredChangeHandler}
            />
            <ExpensesChart expenses={yearValidationFilter} />
            <ExpenseList item={yearValidationFilter} />
        </Card>
    );
};

export default Expenses;
