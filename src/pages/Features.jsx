import React, { useState } from "react";
import UserList from "../components/UserList";
import SearchBox from "../components/SearchBox";
import ReportCase from "../components/ReportCase";
const Features = (props) => {
  const [users, setUsers] = useState(props.contactList);
  const [searchField, setSearchField] = useState("");

  const findUsers = users.map((user) => {
    const phoneNumber = String(user.phone).split("-")[2];
    if (String(searchField) === phoneNumber) {
      return user;
    }
    return undefined;
  });

  const filteredUsers = findUsers.filter((x) => x !== undefined);
  console.log("filteredUsers: ", filteredUsers);

  return (
    <div>
      <h1>Black Consumer Searching</h1>
      <SearchBox
        placeholder="Enter the Last 4 digits of the phone number"
        handleChange={(e) =>
          setSearchField(e.target.value) + console.log(e.target.value)
        }
      />
      <br />
      <ReportCase />
      <UserList searchField={searchField} filteredUsers={filteredUsers} />
    </div>
  );
};
export default Features;
