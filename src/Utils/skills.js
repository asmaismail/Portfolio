import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaReact,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMaterialui,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiStyledcomponents,
} from "react-icons/si";
// import { TbBrandReactNative } from "react-icons/tb";

export const skills = [
  {
    name: "HTML / CSS ",
    percentage: 100,
    icon1: <FaHtml5 className="bg-transparent" />,
    icon2: <FaCss3Alt className="bg-transparent"/>,
  },
  {
    name: "JavaScript",
    percentage: 75,
    icon1: <SiJavascript className="bg-transparent"/>,
  },
  {
    name: "TypeScript",
    percentage: 60,
    icon1: <SiTypescript className="bg-transparent"/>,
  },
  {
    name: "Bootstrap",
    percentage: 95,
    icon1: <FaBootstrap className="bg-transparent"/>,
  },
  {
    name: "React JS",
    percentage: 80,
    icon1: <FaReact className="bg-transparent"/>,
  },
  {
    name: "Next JS",
    percentage: 70,
    icon1: <  SiNextdotjs className="bg-transparent"/>,
  },
  {
    name: "Styled Components",
    percentage: 85,
    icon1: <SiStyledcomponents className="bg-transparent"/>,
  },
  {
    name: "Material UI",
    percentage: 90,
    icon1: <SiMaterialui className="bg-transparent"/>,
  },
  {
    name: "Tailwind CSS",
    percentage: 85,
    icon1: <SiTailwindcss className="bg-transparent"/>,
  },

  // {
  //   name: "NodeJs",
  //   percentage: 80,
  //   icon1: <FaNodeJs className="bg-transparent"/>,
  // },
  // {
  //   name: "Firebase",
  //   percentage: 70,
  //   icon1: <SiFirebase className="bg-transparent"/>,
  // },
  // {
  //   name: "Databases",
  //   percentage: 75,
  //   icon1: <SiMongodb className="bg-transparent"/>,
  //   icon2: <SiMysql className="bg-transparent"/>,
  // },
];
