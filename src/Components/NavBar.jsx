import React from "react";

export const NavBar = () => {
  return (
    <nav className="w-full h-[15vh] flex items-center px-[3%] justify-between fixed top-0 left-0 cursor-pointer z-50 ">
      <h1 className="text-2xl font-medium">NJENACHA DEVELOPMENT</h1>
      <ul className="w-2/6 flex justify-between">
        <li className="text-xl font-light cursor-pointer">About</li>
        <li className="text-xl font-light cursor-pointer">Projects</li>
        <li className="text-xl font-light cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};
