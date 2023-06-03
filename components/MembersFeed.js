"use client";
import { useState, useEffect } from "react";

const MembersFeed = () => {
  const [members, setMembers] = useState({});

  const fetchMembers = async () => {
    const response = await fetch(
      "https://us-central1-express-rest-api-276b6.cloudfunctions.net/api/members"
    );
    const data = await response.json();
    //console.log("data is:", data);
    setMembers(data);
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  return (
    <table className="border-separate border-spacing-2 border border-slate-400 w-full">
      <caption className="caption-top">Board members</caption>
      <thead>
        <tr>
          <th className="border border-slate-300">Fistname</th>
          <th className="border border-slate-300">Lastname</th>
          <th className="border border-slate-300">Certification</th>
          <th className="border border-slate-300">Status</th>
          <th className="border border-slate-300">Provincer</th>
        </tr>
      </thead>
      <tbody>
        {Object.values(members).map((member, i) => {
          return (
            <tr key={i}>
              <td className="border border-slate-300">{member.firstname}</td>
              <td className="border border-slate-300">{member.lastname}</td>
              <td className="border border-slate-300">
                {member.certification}
              </td>
              <td className="border border-slate-300">{member.status}</td>
              <td className="border border-slate-300">{member.province}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MembersFeed;
