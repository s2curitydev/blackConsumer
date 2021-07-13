import React from "react";

const UserList = ({ filteredUsers, searchField }) => {
  console.log(filteredUsers);
  return (
    <div>
      {filteredUsers.map((user) => {
        return (
          <div className="card mt-2 bg-light" key={user.idx}>
            <div className="card-body">
              <div className="card-body p-3">
                {"Name: " + user.name.substring(0, 1)}
              </div>
              <div className="card-body p-3">
                {"Phone: " +
                  user.phone.substring(0, 1) +
                  "**" +
                  user.phone.substring(4, 5) +
                  "**" +
                  searchField}
              </div>
              <div className="card-body p-3">{"Date: " + user.date}</div>
              <div className="card-body p-3">
                {"Description: " + user.descClaim}
              </div>
              <div className="card-body p-3">
                {"Consideration: " + user.consideration}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default UserList;
