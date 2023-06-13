"use client";
import React from "react";

function Member(props) {
  const handleDelete = () => {
    fetch(
      `https://us-central1-express-rest-api-276b6.cloudfunctions.net/api/members/${props.member.id}`,
      {
        method: "DELETE",
      }
    );
  };
  //handleDelete();

  return (
    <tr>
      <td>{props.member.firstname}</td>
      <td>{props.member.lastname}</td>
      <td>{props.member.certification}</td>
      <td>{props.member.status}</td>
      <td>{props.member.province}</td>
      <td>
        <button type="submit" onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Member;
