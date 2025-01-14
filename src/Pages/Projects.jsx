import React from "react";
import { Projectitem } from "../Components/Projectitem";

export const Projects = () => {
  return (
    <main className="h-screen w-full flex flex-col gap-8  items-center justify-center text-center">
      <h1 className="text-6xl">
        <strong>Projects</strong>
      </h1>
      <h6 className="font-light text-2xl">
        Things we have worked on to further development.
      </h6>
      <div className="flex px-[3%] justify-between items-center w-full h-[50%]">
        <Projectitem></Projectitem>
        <Projectitem></Projectitem>
        <Projectitem></Projectitem>
      </div>
    </main>
  );
};
