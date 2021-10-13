import "./NewExpense.css";
import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
    const [showNewExpense, setShowNewExpense] = useState(false);

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
    };

    const onShowForm = () => {
        setShowNewExpense(true);
    };

    const onCloseForm = () => {
        setShowNewExpense(false);
    };

    return (
        <div className="new-expense">
            <button
                onClick={onShowForm}
                style={{ display: !showNewExpense ? "block" : "none" }}
            >
                Add New Expense
            </button>
            <ExpenseForm
                style={{ display: showNewExpense ? "block" : "none" }}
                onSaveExpenseData={onSaveExpenseDataHandler}
                onCloseForm={onCloseForm}
            />
        </div>
    );
}

export default NewExpense;
