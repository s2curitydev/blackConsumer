import React from "react";

const UserList = ({ users, contactIdx }) => {
  console.log("contactIdx" + contactIdx);
  console.log("users: " + users);
  if (contactIdx === users.idx) {
    return (
      <div>
        <div className="card mb-2 mt-2" key={users.idx}>
          <div className="card-body p-3">{contactIdx}출력값</div>
        </div>
      </div>
    );
  } else {
    return null;
  }
  // return (
  //   <div>
  //     <div className="card mb-2 mt-2" key={users.id}>
  //       <div className="card-body p-3">{contactIdx}출력값</div>
  //     </div>
  //   </div>
  // );
};

export default UserList;
