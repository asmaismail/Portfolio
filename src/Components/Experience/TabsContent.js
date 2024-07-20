import React from "react";
import {
  backendAlayzone,
  backendRaheem,
  databases,
  frontEndRaheem,
  frontendAlayzone,
  frontendStep,
} from "../../Utils/TechnologiesIcons";
import { motion } from "framer-motion";
import { ListAnimate } from "../../Animations";

const Raheem = () => {
  return (
    <>
      <div className=" p-[10px] md:p-[30px] bg-[rgba(96,184,235,0.21)] rounded-[15px]">
        <h1 className="bg-transparent text-white text-[22px] md:text-[40px] font-semibold ">
          Raheem Solution (Pvt) Ltd.
        </h1>
        <div className="bg-transparent mt-[10px]">
          <h1 className="text-white text-[18px] md:text-[24px] font-semibold bg-transparent">
            Location:
          </h1>
          <p className="text-orange-400 text-[16px] md:text-[20px] ml-[10px] bg-transparent">
            Johar Town, Lahore
          </p>
        </div>
        <div className="bg-transparent mt-[10px]">
          <h1 className="text-white text-[18px] md:text-[24px] font-semibold bg-transparent">
            Job Position:
          </h1>
          <p className="text-orange-400 text-[16px] md:text-[20px] ml-[10px] bg-transparent">
            Software Engineer
          </p>
        </div>
        <div className="bg-transparent mt-[10px]">
          <h1 className="text-white text-[18px] md:text-[24px] font-semibold bg-transparent">
            Stack:
          </h1>
          <p className="text-orange-400 text-[16px] md:text-[20px] bg-transparent">
            Full Stack (JavaScript)
          </p>
        </div>
        <div className="bg-transparent mt-[10px]">
          <h1 className="text-white text-[18px] md:text-[24px] font-semibold bg-transparent">
            Duration:
          </h1>
          <p className="text-orange-400 text-[16px] md:text-[20px] bg-transparent">
            26 September 2022 - Present
          </p>
        </div>
        <div className="bg-transparent">
          <h1 className="text-white text-[18px] md:text-[24px] font-semibold bg-transparent mt-[10px]">
            Technologies:
          </h1>
          <div className="bg-transparent px-[10px]">
            <h1 className="bg-transparent text-orange-400 text-[16px] md:text-[20px] font-semibold  ">
              Front End Technologies
            </h1>
            <div className="flex flex-row flex-wrap bg-transparent gap-3 md:gap-10 my-[15px]">
              {frontEndRaheem.map((val, index) => {
                return (
                  <div
                    className="bg-transparent relative cursor-pointer"
                    key={index}
                  >
                    {val.icon}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="px-[10px] py-[3px] rounded-[3px] absolute -top-[10px] z-10 left-[10px] cursor-pointer"
                    >
                      <p className="text-orange-600 text-[13px] font-bold">
                        {val.name}
                      </p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-transparent px-[10px]">
            <h1 className="bg-transparent text-orange-400 text-[16px] md:text-[20px] font-semibold  ">
              Back End Technologies
            </h1>
            <div className="flex flex-row flex-wrap bg-transparent gap-3 md:gap-10 my-[15px]">
              {backendRaheem.map((val, index) => {
                return (
                  <div
                    className="bg-transparent relative cursor-pointer"
                    key={index}
                  >
                    {val.icon}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="px-[10px] py-[3px] rounded-[3px] absolute -top-[10px] z-10 left-[10px] cursor-pointer"
                    >
                      <p className="text-orange-600 text-[13px] font-bold">
                        {val.name}
                      </p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-transparent px-[10px]">
            <h1 className="bg-transparent text-orange-400 text-[16px] md:text-[20px] font-semibold  ">
              Databases
            </h1>
            <div className="flex flex-row flex-wrap bg-transparent gap-3 md:gap-10 my-[15px]">
              {databases.map((val, index) => {
                return (
                  <div
                    className="bg-transparent relative cursor-pointer"
                    key={index}
                  >
                    {val.icon}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="px-[10px] py-[3px] rounded-[3px] absolute -top-[10px] z-10 left-[10px] cursor-pointer"
                    >
                      <p className="text-orange-600 text-[13px] font-bold">
                        {val.name}
                      </p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="bg-transparent">
          <h1 className="text-white text-[18px] md:text-[24px] font-semibold bg-transparent mt-[10px]">
            Experience:
          </h1>
          <motion.ul
            variants={ListAnimate}
            initial="hidden"
            whileInView="show"
            className="bg-transparent "
          >
            <li className="bg-[rgba(207,207,207,0.3)] p-[10px] rounded-[10px] text-white text-justify mt-[10px]">
              Worked on Blockchain and manipulate the contracts of Blockchain
              using EtherJs Library and Third Web with ReactJs.
            </li>
            <li className="bg-[rgba(207,207,207,0.3)] p-[10px] rounded-[10px] text-white text-justify mt-[10px]">
              Worked on Chat Features using Web Sockets with Socket.Io Package
              in NodeJs (ExpressJs). The Chat Features included One - One Chat
              functionality and Group Chat functionality like Rooms or Community
              Channels.
            </li>
            <li className="bg-[rgba(207,207,207,0.3)] p-[10px] rounded-[10px] text-white text-justify mt-[10px]">
              Worked on Social Media Features like Facebook / Messenger
            </li>
            <li className="bg-[rgba(207,207,207,0.3)] p-[10px] rounded-[10px] text-white text-justify mt-[10px]">
              Create Ecommerce Mobile App using React Native. The state
              management in this app done by using Redux and backend for this
              app is created in NodeJs (expressJs) with MongoDB as database
            </li>
            <li className="bg-[rgba(207,207,207,0.3)] p-[10px] rounded-[10px] text-white text-justify mt-[10px]">
              Created APIs in NodeJs (ExpressJs) for different functionalities
              in Company Projects
            </li>
          </motion.ul>
        </div>
      </div>
    </>
  );
};

const Alayzone = () => {
  return (
    <>
      <div className=" p-[10px] md:p-[30px] bg-[rgba(191,96,235,0.21)] rounded-[15px]">
        <h1 className="bg-transparent text-white text-[22px] md:text-[40px] font-semibold ">
          Alayzone Software House
        </h1>
        <div className="bg-transparent mt-[10px]">
          <h1 className="text-white text-[18px] md:text-[24px] font-semibold bg-transparent">
            Location:
          </h1>
          <p className="text-orange-400 text-[16px] md:text-[20px] ml-[10px] bg-transparent">
            Nazimabad, Faisalabad
          </p>
        </div>
        <div className="bg-transparent mt-[10px]">
          <h1 className="text-white text-[18px] md:text-[24px] font-semibold bg-transparent">
            Job Position:
          </h1>
          <p className="text-orange-400 text-[16px] md:text-[20px] ml-[10px] bg-transparent">
            Junior Software Engineer
          </p>
        </div>
        <div className="bg-transparent mt-[10px]">
          <h1 className="text-white text-[18px] md:text-[24px] font-semibold bg-transparent">
            Stack:
          </h1>
          <p className="text-orange-400 text-[16px] md:text-[20px] bg-transparent">
            MERN Stack (JavaScript)
          </p>
        </div>
        <div className="bg-transparent mt-[10px]">
          <h1 className="text-white text-[18px] md:text-[24px] font-semibold bg-transparent">
            Duration:
          </h1>
          <p className="text-orange-400 text-[16px] md:text-[20px] bg-transparent">
            15 December 2021 - 20 September 2022
          </p>
        </div>
        <div className="bg-transparent">
          <h1 className="text-white text-[18px] md:text-[24px] font-semibold bg-transparent mt-[10px]">
            Technologies:
          </h1>
          <div className="bg-transparent px-[10px]">
            <h1 className="bg-transparent text-orange-400 text-[16px] md:text-[20px] font-semibold  ">
              Front End Technologies
            </h1>
            <div className="flex flex-row flex-wrap bg-transparent gap-3 md:gap-10 my-[15px]">
              {frontendAlayzone.map((val, index) => {
                return (
                  <div
                    className="bg-transparent relative cursor-pointer"
                    key={index}
                  >
                    {val.icon}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="px-[10px] py-[3px] rounded-[3px] absolute -top-[10px] z-10 left-[10px] cursor-pointer"
                    >
                      <p className="text-orange-600 text-[13px] font-bold">
                        {val.name}
                      </p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-transparent px-[10px]">
            <h1 className="bg-transparent text-orange-400 text-[16px] md:text-[20px] font-semibold  ">
              Back End Technologies
            </h1>
            <div className="flex flex-row flex-wrap bg-transparent gap-3 md:gap-10 my-[15px]">
              {backendAlayzone.map((val, index) => {
                return (
                  <div
                    className="bg-transparent relative cursor-pointer"
                    key={index}
                  >
                    {val.icon}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="px-[10px] py-[3px] rounded-[3px] absolute -top-[10px] z-10 left-[10px] cursor-pointer"
                    >
                      <p className="text-orange-600 text-[13px] font-bold">
                        {val.name}
                      </p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-transparent px-[10px]">
            <h1 className="bg-transparent text-orange-400 text-[16px] md:text-[20px] font-semibold  ">
              Databases
            </h1>
            <div className="flex flex-row flex-wrap bg-transparent gap-3 md:gap-10 my-[15px]">
              <div className="bg-transparent relative cursor-pointer">
                {databases[0].icon}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="px-[10px] py-[3px] rounded-[3px] absolute -top-[10px] z-10 left-[10px] cursor-pointer"
                >
                  <p className="text-orange-600 text-[13px] font-bold">
                    {databases[0].name}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-transparent">
          <h1 className="text-white text-[18px] md:text-[24px] font-semibold bg-transparent mt-[10px]">
            Experience:
          </h1>
          <motion.ul
            variants={ListAnimate}
            initial="hidden"
            whileInView="show"
            className="bg-transparent "
          >
            <li className="bg-[rgba(207,207,207,0.3)] p-[10px] rounded-[10px] text-white text-justify mt-[10px]">
              Worked on Role Base Authentication and Two-Way Authentication with
              MERN Development.
            </li>
            <li className="bg-[rgba(207,207,207,0.3)] p-[10px] rounded-[10px] text-white text-justify mt-[10px]">
              Worked on company project. Integrated Firebase in front end to use
              it as Backend Service.
            </li>
            <li className="bg-[rgba(207,207,207,0.3)] p-[10px] rounded-[10px] text-white text-justify mt-[10px]">
              Create Ecommerce Web App using ReactJs. The state management in
              this app done by using Redux and backend for this app is created
              in NodeJs (expressJs) with MongoDB as database. The payment method
              was used in this module using Stripe.
            </li>
            <li className="bg-[rgba(207,207,207,0.3)] p-[10px] rounded-[10px] text-white text-justify mt-[10px]">
              Created APIs in NodeJs (ExpressJs) for different functionalities
              in Company Projects
            </li>
          </motion.ul>
        </div>
      </div>
    </>
  );
};

const StepUp = () => {
  return (
    <>
      <div className=" p-[10px] md:p-[30px] bg-[rgba(133,235,96,0.21)] rounded-[15px]">
        <h1 className="bg-transparent text-white text-[22px] md:text-[40px] font-semibold ">
          StepUp IT Solutions
        </h1>
        <div className="bg-transparent mt-[10px]">
          <h1 className="text-white text-[18px] md:text-[24px] font-semibold bg-transparent">
            Location:
          </h1>
          <p className="text-orange-400 text-[16px] md:text-[20px] ml-[10px] bg-transparent">
            Madina Town, Faisalabad
          </p>
        </div>
        <div className="bg-transparent mt-[10px]">
          <h1 className="text-white text-[18px] md:text-[24px] font-semibold bg-transparent">
            Job Position:
          </h1>
          <p className="text-orange-400 text-[16px] md:text-[20px] ml-[10px] bg-transparent">
            Front End Developer
          </p>
        </div>
        <div className="bg-transparent mt-[10px]">
          <h1 className="text-white text-[18px] md:text-[24px] font-semibold bg-transparent">
            Stack:
          </h1>
          <p className="text-orange-400 text-[16px] md:text-[20px] bg-transparent">
            ReactJs
          </p>
        </div>
        <div className="bg-transparent mt-[10px]">
          <h1 className="text-white text-[18px] md:text-[24px] font-semibold bg-transparent">
            Duration:
          </h1>
          <p className="text-orange-400 text-[16px] md:text-[20px] bg-transparent">
            January 2021 - June 2021
          </p>
        </div>
        <div className="bg-transparent">
          <h1 className="text-white text-[18px] md:text-[24px] font-semibold bg-transparent mt-[10px]">
            Technologies:
          </h1>
          <div className="bg-transparent px-[10px]">
            <h1 className="bg-transparent text-orange-400 text-[16px] md:text-[20px] font-semibold  ">
              Front End Technologies
            </h1>
            <div className="flex flex-row flex-wrap bg-transparent gap-3 md:gap-10 my-[15px]">
              {frontendStep.map((val, index) => {
                return (
                  <div
                    className="bg-transparent relative cursor-pointer"
                    key={index}
                  >
                    {val.icon}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="px-[10px] py-[3px] rounded-[3px] absolute -top-[10px] z-10 left-[10px] cursor-pointer"
                    >
                      <p className="text-orange-600 text-[13px] font-bold">
                        {val.name}
                      </p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="bg-transparent">
          <h1 className="text-white text-[18px] md:text-[24px] font-semibold bg-transparent mt-[10px]">
            Experience:
          </h1>
          <motion.ul
            variants={ListAnimate}
            initial="hidden"
            whileInView="show"
            className="bg-transparent "
          >
            <li className="bg-[rgba(207,207,207,0.3)] p-[10px] rounded-[10px] text-white text-justify mt-[10px]">
            Worked on Material UI Package for company projects in ReactJs
            </li>
            <li className="bg-[rgba(207,207,207,0.3)] p-[10px] rounded-[10px] text-white text-justify mt-[10px]">
            Worked on Static Websites using HTML, CSS, Bootstrap
            </li>
           
          </motion.ul>
        </div>
      </div>
    </>
  );
};

const ShowTabs = ({ index }) => {
  if (index === 0) {
    return <Raheem />;
  }
  if (index === 1) {
    return <Alayzone />;
  }
  if (index === 2) {
    return <StepUp />;
  }
};

const TabsContent = ({ index }) => {
  return (
    <>
      <div className="">
        <ShowTabs index={index} />
      </div>
    </>
  );
};

export default TabsContent;
