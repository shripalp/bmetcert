import React from "react";
import BoardFeed from "@/components/BoardFeed";

function About() {
  return (
    <div className="flex flex-col">
      <div className=" flex justify-center">
        <h1 className="text-xl">About</h1>
      </div>

      <div>
        <BoardFeed />
      </div>
    </div>
  );
}

export default About;
