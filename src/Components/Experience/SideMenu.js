import React from "react";
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";

const SideMenu = ({ show, setShow, companies, newIndex, setNewIndex }) => {
  return (
    <>
      <div
        className={`flex flex-row md:flex-col h-full ${
          show ? "w-[300px] rounded-[15px] " : "md:w-fit rounded-full"
        } md:pb-[20px] p-[5px] md:px-[10px]  overflow-hidden bg-[rgba(139,139,139,0.3)]`}
      >
        <div
          className={` hidden md:flex  flex-row p-[10px] ${
            show ? " w-fit justify-start" : "justify-center"
          }  h-[50px]  rounded-full items-center gap-2 md:mt-[20px] bg-[rgba(5,5,5,0.53)] cursor-pointer `}
          onClick={() => setShow(!show)}
        >
          {show ? (
            <>
              <BsArrowBarLeft className=" bg-transparent text-white text-[30px] cursor-pointer" />
              <p className={`text-white font-semibold bg-transparent`}>Close</p>
            </>
          ) : (
            <>
              <BsArrowBarRight
                className=" bg-transparent text-white text-[30px] cursor-pointer"
                onClick={() => setShow(!show)}
              />
            </>
          )}
        </div>
        {companies.map((val, index) => {
          return (
            <div
              key={index}
              className="flex flex-row items-center gap-2 md:mt-[20px] mr-[18px] md:mr-0 bg-transparent"
              onClick={() => setNewIndex(index)}
            >
              <img
                src={val.img}
                alt="raheem"
                className={`w-[50px] h-[50px] rounded-full cursor-pointer ${
                  index === newIndex ? "border-[4px] border-[purple]" : ""
                }`}
              />
              <p
                className={`text-white font-semibold bg-transparent cursor-pointer rounded-[4px] ${
                  show ? "block" : "hidden"
                } ${
                  index === newIndex ? "bg-[rgba(0,0,0,0.4)] p-[10px] " : ""
                } `}
              >
                {val.name}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SideMenu;
