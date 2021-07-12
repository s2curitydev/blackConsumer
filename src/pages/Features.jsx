import React, { useState } from "react";
// import axios from "axios";
import UserList from "../components/UserList";
import SearchBox from "../components/SearchBox";
import { emptySearchField } from "../components/Exception";

const Features = (props) => {
  const [users, setUsers] = useState(props.contactList);
  const [searchField, setSearchField] = useState("4570");
  let findUser = [];
  if (String(searchField).length === 4) {
    const phoneNumber = users.map((user) => String(user.phone).split("-")[2]);
    console.log(phoneNumber);

    findUser = phoneNumber.map((userPhoneDigit) => {
      if (String(searchField) === userPhoneDigit) {
        console.log(userPhoneDigit);

        return users.idx;
      } else {
        return null;
      }
    });
  }
  console.log(findUser);

  return (
    <div>
      <h1>Features this page from Features.jsx</h1>
      <SearchBox
        placeholder="Enter the Last 4 digits of the phone number"
        handleChange={(e) =>
          setSearchField(e.target.value) + console.log(e.target.value)
        }
      />
      * Believe or Not
      <UserList searchField={searchField} findUser={findUser} />
    </div>
  );
};
export default Features;
