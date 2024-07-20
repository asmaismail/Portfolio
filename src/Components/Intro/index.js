import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IntroAnimate, picAnimate } from "../../Animations";
import pic from "../../Assets/img.jpeg";
const Intro = () => {
  const skills = [
    "JavaScript",
    "React",
    "TypeScript",
    // "MERN Stack",
    // "React Native",
    "NextJs",
  ];
  const [textIndex, setTextIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((textIndex + 1) % skills.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [textIndex, skills]);

  return (
    <div className="flex md:flex-row justify-center items-center w-full p-[30px] relative h-[550px] overflow-hidden 
    bg-transparent mt-[36px]">
      <div className=" bg-transparent flex flex-col md:flex-row md:absolute md:right-[80px] md:top-[20px] ">
        <div className="bg-transparent md:p-[30px] md:mt-[90px] md:w-[800px]">
          <motion.div
            variants={IntroAnimate}
            initial="hidden"
            whileInView="show"
            className="text-center bg-transparent"
          >
            <h1 className="bg-transparent text-white text-[45px] font-bold ">
              Here's Asma Ismail,
            </h1>
            <p className="text-white text-[40px] ">
              A <span className="text-orange-400">{skills[textIndex]} </span>
              Developer.
            </p>
            {/* <p className="mt-[20px] text-white text-[20px] ">
              Work for gaining experience, deep knowledge of any technology and
              design for love! I am Hamza Siddique, a Full Stack Engineer
              (JavaScript) based in Lahore, Pakistan
            </p> */}
          </motion.div>
        </div>
        <div className=" md:block hidden blur-2xl h-[100px]  md:h-[70px] w-[120px] md:w-[200px] absolute md:top-[100px] md:right-0 "></div>
        <motion.img
          variants={picAnimate}
          initial="hidden"
          whileInView="show"
          src={pic}
          alt="pic"
          className="h-[400px] w-1/2 rounded-lg md:block hidden bg-transparent"
        />
      </div>
    </div>
  );
};

export default Intro;
