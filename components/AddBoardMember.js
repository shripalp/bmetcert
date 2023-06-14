"use client";
import React from "react";
import { useRouter } from "next/navigation";
function AddBoardMember() {
  const router = useRouter();
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [certification, setCertification] = React.useState("");
  const [boardtitle, setBoardtitle] = React.useState("");
  const [jobtitle, setJobtitle] = React.useState("");
  const [employer, setEmployer] = React.useState("");
  const [address, setAddress] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const memberObject = {
      firstname: firstname,
      lastname: lastname,
      certification: certification,
      boardtitle: boardtitle,
      jobtitle: jobtitle,
      employer: employer,
      address: address,
    };
    const postMember = async () => {
      try {
        const response = await fetch(
          "https://us-central1-express-rest-api-276b6.cloudfunctions.net/api/boardmembers",
          {
            method: "post",
            body: JSON.stringify(memberObject),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    postMember();
    alert("member added");
    setFirstname("");
    setLastname("");
    setJobtitle("");
    setBoardtitle("");
    setCertification("");
    setAddress("");
    setEmployer("");
    router.push("/about");
  };
  return (
    <div>
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="firstname"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="firstname"
              type="text"
              placeholder="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="lastname"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="lastname"
              type="text"
              placeholder="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="boardtitle"
            >
              boardtitle
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="boardtitle"
              type="text"
              placeholder="boardtitle"
              value={boardtitle}
              onChange={(e) => setBoardtitle(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="certification"
            >
              Certification
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="certification"
              type="text"
              placeholder="certification"
              value={certification}
              onChange={(e) => setCertification(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="jobtitle"
            >
              Job Title
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="province"
              type="text"
              value={jobtitle}
              placeholder="jobtitle"
              onChange={(e) => setJobtitle(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="employer"
            >
              Employer
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="employer"
              type="text"
              value={employer}
              placeholder="employer"
              onChange={(e) => setEmployer(e.target.value)}
            />
          </div>

          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="address"
              type="text"
              value={address}
              placeholder="address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="submit"
          onClick={handleSubmit}
        >
          Add Board Member
        </button>
      </form>
    </div>
  );
}

export default AddBoardMember;
