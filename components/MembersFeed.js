"use client";
import { useState, useEffect } from "react";

const MembersFeed = () => {
  const [members, setMembers] = useState({});

  const fetchMembers = async () => {
    const response = await fetch(
      "https://us-central1-express-rest-api-276b6.cloudfunctions.net/api/members"
    );
    const data = await response.json();
    console.log("data is:", data);
    setMembers(data);
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  return (
    <div>
      {Object.values(members).map((member, i) => {
        return <li key={i}>{member.firstname}</li>;
      })}
    </div>
  );
};

export default MembersFeed;
