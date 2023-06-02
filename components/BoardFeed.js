"use client";
import { useState, useEffect } from "react";

const BoardFeed = () => {
  const [members, setMembers] = useState({});

  const fetchMembers = async () => {
    const response = await fetch(
      "https://us-central1-express-rest-api-276b6.cloudfunctions.net/api/boardmembers"
    );
    const data = await response.json();
    console.log("data is:", data);
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
          <th className="border border-slate-300">Board title</th>
          <th className="border border-slate-300">Certification</th>
          <th className="border border-slate-300">Job title</th>
          <th className="border border-slate-300">Employer</th>
          <th className="border border-slate-300">Address</th>
        </tr>
      </thead>
      <tbody>
        {Object.values(members).map((member, i) => {
          return (
            <tr key={i}>
              <td className="border border-slate-300">{member.firstname}</td>
              <td className="border border-slate-300">{member.lastname}</td>
              <td className="border border-slate-300">{member.boardtitle}</td>
              <td className="border border-slate-300">
                {member.certification}
              </td>
              <td className="border border-slate-300">{member.jobtitle}</td>
              <td className="border border-slate-300">{member.employer}</td>
              <td className="border border-slate-300">{member.address}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BoardFeed;
