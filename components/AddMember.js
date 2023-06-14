"use client";
import React from "react";
import { useRouter } from "next/navigation";

function AddMember() {
  const router = useRouter();
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [certification, setCertification] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [province, setProvince] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const memberObject = {
      firstname: firstname,
      lastname: lastname,
      certification: certification,
      status: status,
      province: province,
    };
    const postMember = async () => {
      try {
        const response = await fetch(
          "https://us-central1-express-rest-api-276b6.cloudfunctions.net/api/members",
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
    setProvince("");
    setCertification("");
    setStatus("");
    router.push("/members");
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
        </div>

        <div className="flex flex-wrap -mx-3 mb-2">
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
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="status"
            >
              Status
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="status"
                onSelect={(e) => setStatus(e.target.value)}
              >
                <option>Active</option>
                <option>Expired</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="province"
            >
              Province
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="province"
              type="text"
              value={province}
              placeholder="province"
              onChange={(e) => setProvince(e.target.value)}
            />
          </div>
        </div>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="submit"
          onClick={handleSubmit}
        >
          Add a Member
        </button>
      </form>
    </div>
  );
}

export default AddMember;
