import React, {useEffect}from 'react'
import { motion, useAnimation } from "framer-motion";



import { TfiServer } from "react-icons/tfi";
import { RiTeamLine } from "react-icons/ri";

import { CgWebsite } from "react-icons/cg";
import { useInView } from "react-intersection-observer";

export default function GreatCards() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
 
  }, [ controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, x: -800 },
    visible: { opacity: 2, x: 0 },
  };
  return (
    <div> 
    <p
    className="  text-[55px]  mb-7 mt-20 flex justify-center  "
    style={{ color: "white", opacity: "0.8", fontFamily: "Bebas Neue" }}
  >
    {" "}
    What i Am Great At{" "}
  </p>
  <motion.div
    ref={ref}
    initial="hidden"
    animate={controls}
    variants={cardVariants}
    transition={{ duration: 1.5 }}
  >
    <div className="cardsflex">
      <div class="e-card playing">
        <div class="image"></div>

        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>

        <div class="infotop">
          <div className="frontedn-icon">
            {" "}
            <CgWebsite size={"80px"} />
          </div>
          <p className=" text-[22px]">Frontend Development</p>
        </div>
      </div>
      <div class="e-card playing">
        <div class="image"></div>

        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>

        <div class="infotop">
          <div className="frontedn-icon  mb-1 ">
            <TfiServer size={"60px"} />
          </div>

          <p className=" text-[23px]   ">Backend Development</p>
        </div>
      </div>
      <div class="e-card playing">
        <div class="image"></div>

        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>

        <div class="infotop">
          <div className="frontedn-icon">
            <RiTeamLine size={"60px"} />
          </div>
          Collaboration and Communication
        </div>
      </div>
    </div>
  </motion.div>
  </div>
  )
}
