import React from "react";

export default function Documents() {
  return (
    <div className="flex flex-col">
      <div className=" flex justify-center">
        <h1>Documents</h1>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col w-full justify-center items-center md:w-1/2">
          <h2>Dialysis</h2>
          <div>links</div>
        </div>
        <div className="flex flex-col w-full justify-center items-center md:w-1/2">
          <h2>Biomed</h2>
          <div>links</div>
        </div>
      </div>
    </div>
  );
}
