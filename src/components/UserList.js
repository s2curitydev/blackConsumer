import React from "react";

const UserList = ({ findUser, searchField }) => {
  if (findUser !== "") {
    return (
      <div>
        <div className="card mb-2 mt-2" key={findUser.idx}>
          <div className="card-body p-3">{"Name: " + findUser.name}</div>
        </div>
      </div>
    );
  } else {
    return <div>no data</div>;
  }
};

export default UserList;

/* <div className="card-body p-3">{"Phone: " + findUser.phone}</div>
<div className="card-body p-3">{"Date: " + findUser.date}</div>
<div className="card-body p-3">{"Claim: " + findUser.descClaim}</div> */
