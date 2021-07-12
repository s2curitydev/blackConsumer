import React, { useState } from "react";
// import axios from "axios";
import UserList from "../components/UserList";
import SearchBox from "../components/SearchBox";
// import { contactList } from "../js/sampleData";

const Features = (contactList) => {
  const [users, setUsers] = useState(contactList);
  const [searchField, setSearchField] = useState("6666");
  console.log(users);
  const contactIdx = users.map((user, i) => {
    const phoneNumber = user.phone;
    console.log(contactIdx);
    if (phoneNumber.includes(searchField)) {
      return user.idx;
    } else {
      return null;
    }
  });
  return (
    <div>
      <h1>Features this page from Features.jsx</h1>
      <SearchBox
        placeholder="검색하실 영화이름을 입력하세요"
        handleChange={(e) =>
          setSearchField(e.target.value) + console.log(e.target.value)
        }
      />
      <UserList
        users={users}
        searchField={searchField}
        contactIdx={contactIdx}
      />
    </div>
  );
};
export default Features;
