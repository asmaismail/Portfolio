import React from "react";
import { motion } from "framer-motion";
// import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { MenuAnimate, SocialAnimate } from "../../Animations";

const Menu = ({ setActive, active }) => {
  return (
    <>
      <motion.div
        variants={MenuAnimate}
        animate={active ? "open" : "closed"}
        className="absolute flex flex-row w-full h-full z-10 bg-gray-900 top-0"
      >
        <div className="w-[10%] flex justify-center items-center bg-gray-900">
          <h1 className="-rotate-90 text-white text-[140px] font-bold tracking-wide bg-gray-900 ">
            Menu
          </h1>
        </div>
        <div className="w-[10%] border-l-2 ml-[70px] bg-gray-900"></div>
        <div className="w-[80%] flex flex-col justify-center relative  bg-gray-900">
          <div className="z-10 bg-transparent absolute top-[10px] right-[10px]">
            <FaTimes
              className="z-10 text-white text-[32px] cursor-pointer"
              onClick={() => setActive(false)}
            />
          </div>
          <div className="h-[100px] relative -top-[100px] bg-gray-900 flex justify-center items-center">
            {/* <img
              src={logo}
              alt="hamza"
              className="h-[100px] bg-gray-900 mt-[20px]"
            /> */}
          </div>
          <div className="bg-gray-900 w-fit ">
            <ul className="bg-gray-900 list-disc ">
              <motion.li
                className="bg-gray-900 text-[43px] text-white"
                whileHover={{ translateX: "5%" }}
              >
                <Link
                  to="/"
                  className="bg-gray-900 text-white text-[52px]"
                  onClick={() => setActive(false)}
                >
                  Home
                </Link>
              </motion.li>
              <motion.li
                className="bg-gray-900 text-[43px] text-white"
                whileHover={{ translateX: "5%" }}
              >
                <a href="#experience"
                  className="bg-gray-900 text-white text-[52px]"
                  onClick={() => setActive(false)}
                >
                  Experience
                </a>
              </motion.li>
              <motion.li
                className="bg-gray-900 text-[43px] text-white"
                whileHover={{ translateX: "5%" }}
              >
                <a href="#contact"
                  className="bg-gray-900 text-white text-[52px]"
                  onClick={() => setActive(false)}
                >
                  Contact
                </a>
              </motion.li>
            </ul>
          </div>
          <motion.div
            variants={SocialAnimate}
            initial="hidden"
            whileInView="show"
            className="flex relative top-[70px] justify-center"
          >
            <div className=" w-[200px] flex-row justify-start md:flex hidden p-[10px] rounded-[10px] ">
              <a
                href="https://www.linkedin.com/in/asma-ismail-306188259/"
                rel="noreferrer"
                target="_blank"
                className="bg-transparent"
              >
                <FaLinkedin className="text-white text-[24px] cursor-pointer  mr-[20px]  bg-transparent" />
              </a>
              <a
                href="https://github.com/asmaismail"
                rel="noreferrer"
                target="_blank"
                className="bg-transparent"
              >
                <FaGithub className="text-white text-[24px] cursor-pointer bg-transparent" />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Menu;
