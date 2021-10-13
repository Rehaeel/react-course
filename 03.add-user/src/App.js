import React from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { useState } from "react";

function App() {
    const [userList, setUserList] = useState([]);

    const onSubmitHandler = (list) => {
        setUserList((prevUserList) => {
            return [...prevUserList, list];
        });
    };

    return (
        <div>
            <AddUser onAddUser={onSubmitHandler} />
            <UsersList users={userList} />
        </div>
    );
}

export default App;
