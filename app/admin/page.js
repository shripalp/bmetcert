import React from "react";
import AddMember from "@/components/AddMember";
import AddBoardMember from "@/components/AddBoardMember";

function Admin() {
  return (
    <div className="flex flex-col">
      <div className="m-5">
        <AddMember />
      </div>
      <div className="m-5">
        <AddBoardMember />
      </div>
    </div>
  );
}

export default Admin;
