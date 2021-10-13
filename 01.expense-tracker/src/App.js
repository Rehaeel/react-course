import expense from "./component/DefaultExpenses";
import Expenses from "./component/Expenses/Expenses";
import NewExpense from "./component/NewExpense/NewExpense";
import { useState } from "react";

const App = () => {
    const [expenses, setExpenses] = useState(expense);

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpense) => {
            return [expense, ...prevExpense];
        });
    };

    return (
        <div className="App">
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses item={expenses} />
        </div>
    );
};

export default App;
