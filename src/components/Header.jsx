import React, { useContext } from "react";
import { appContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";

function Header() {
  const { handleThemeSwitch } = useContext(appContext);
  const navigation = useNavigate();

  return (
    <div className="py-4 border-b-2 border-b-gray-300 drop-shadow-md fixed top-0 inset-x-0 bg-white dark:bg-slate-800 dark:text-white flex justify-between items-center">
      <h1 className="font-bold text-3xl uppercase flex-grow text-center cursor-pointer" onClick={() => navigation("/")}>IT-Insights-Blogs</h1>
      <div className="flex items-center">
        <label htmlFor="dark-toggle" className="flex items-center cursor-pointer">
          <div className="relative">
            <input type="checkbox" id="dark-toggle" className="checkbox hidden" onChange={handleThemeSwitch} />
            <div className="block border-[1px] dark:border-white border-gray-900 w-14 h-8 rounded-full transition-all ease-in-out duration-400"></div>
            <div className="dot absolute left-1 top-1 dark:bg-white bg-gray-800 w-6 h-6 rounded-full transition-all ease-in-out duration-400 transform translate-x-0"></div>
          </div>
        </label>
      </div>
    </div>
  );
}

export default Header;