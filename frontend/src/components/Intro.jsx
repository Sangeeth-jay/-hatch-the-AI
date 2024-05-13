import { motion } from "framer-motion";
import img from "../assets/logo.png";

const Intro = () => {
  return (
    <>
      <motion.div className="flex flex-col  justify-center items-center h-screen bg-[#383A40]">
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: 360 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            className="absolute bg-[#55B500] w-40 h-40 rounded-3xl "
          ></motion.div>
          <motion.img 
            src={img} 
            alt="" 
            className="relative" 
            initial={{  scale: 0 }}
            animate={{  scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}/>
        </div>
      </motion.div>
    </>
  );
};

export default Intro;
