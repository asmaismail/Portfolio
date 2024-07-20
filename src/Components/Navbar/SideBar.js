import React from "react";
import { motion } from "framer-motion";
import { SidebarAnimate } from "../../Animations";
// import logo from "../../Assets/logo2.png";
import { FaFacebookF, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBar = ({ toggle, setToggle, routes, active, setActive }) => {
  return (
    <>
      <motion.div
        variants={SidebarAnimate}
        className=" md:hidden bg-white h-screen absolute top-0 w-[300px] px-[15px] py-[20px] z-10 "
        animate={toggle ? "open" : "closed"}
      >
        <div className="flex flex-row justify-between items-center bg-white ">
          {/* <img src={logo} alt="hamza" className="h-[50px] bg-white " /> */}
          <FaTimes
            className="bg-white text-[20px] relative -top-[20px]"
            onClick={() => setToggle(!toggle)}
          />
        </div>
        <div className="border-b-[2px] bg-white mt-[20px] "></div>
        <div className="bg-white my-[20px] ">
          {routes.map((val, index) => (
            <Link
              className={`block ${
                active === val.path
                  ? "bg-[#121821] text-white rounded-[5px]"
                  : "bg-white"
              }  py-[10px] px-[10px] `}
              onClick={() => {
                setToggle(!toggle);
                setActive(val.path);
              }}
              key={index}
              to={val.path}
            >
              {val.name}
            </Link>
          ))}
        </div>
        <div className="border-b-[2px] bg-white mt-[20px] "></div>
        <div className="bg-white flex flex-row mt-[20px] ">
          <a
            href="https://www.linkedin.com/in/asma-ismail-306188259/"
            rel="noreferrer"
            target="_blank"
            className="bg-white"
          >
            <FaLinkedin className="text-[#121821] text-[28px] cursor-pointer  mr-[20px] bg-white " />
          </a>
          <a
            href="https://github.com/asmaismail"
            rel="noreferrer"
            target="_blank"
            className="bg-white"
          >
            <FaGithub className="text-[#121821] text-[28px] cursor-pointer bg-white" />
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default SideBar;
