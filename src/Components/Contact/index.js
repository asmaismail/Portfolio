import React from "react";
import { FaEnvelope, FaMapMarkedAlt, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { picAnimate } from "../../Animations";

const Contact = () => {
  return (
    <>
      <div id="contact" className="w-full p-[30px] flex flex-col md:flex-row ">
        <div className="md:w-1/2 w-full flex flex-col gap-8 mb-[20px] md:mb-0 md:p-[20px] ">
          <div className="flex flex-row items-center gap-3 md:gap-6">
            <FaEnvelope className="text-white md:text-[32px]  " />
            <div>
              <p className="text-white md:text-[24px] font-bold">Email:</p>
              <p className="text-white md:text-[20px] ">asmaismail202020@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-3 md:gap-6">
            <FaWhatsapp className="text-white md:text-[32px]  " />
            <div>
              <p className="text-white md:text-[24px] font-bold">WhatsApp:</p>
              <p className="text-white md:text-[20px] ">+92 334 7645797</p>
            </div>
          </div>
          {/* <div className="flex flex-row items-center gap-3 md:gap-6">
            <FaMapMarkedAlt className="text-white md:text-[32px]  " />
            <div>
              <p className="text-white md:text-[24px] font-bold">Location:</p>
              <p className="text-white md:text-[20px]  ">
                106-A, Street 3, Sector A, DHA Phase 6, Lahore, Pakistan
              </p>
            </div> 
          </div> */}
        </div>
        <div className="md:w-1/2 w-full">
          <motion.iframe
            variants={picAnimate}
            initial="hidden"
            whileInView="show"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217898.30227830488!2d72.92414677389378!3d31.42346560260752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242a895a55ca9%3A0xdec58f88932671c6!2sFaisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1720352162649!5m2!1sen!2s"
            className="w-full h-[350px] rounded-[10px] opacity-70"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></motion.iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;


<iframe 
src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
