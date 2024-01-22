import React, { useEffect, useRef, useState } from "react";
import "../styles/skill.css";
import {  useMotionValueEvent } from "framer-motion";
import { useScroll } from "framer-motion";
import { motion, useAnimation } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

function Skilles() {
  const { scrollY } = useScroll();
  const [Startaniamtion, handleanimaton] = useState(false);
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 300) {
      handleanimaton(true);
    }
  });

  const cardVariants = {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 2, x: 0 },
  };


  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }

  }, [ controls, inView]);
  return (
  
    <motion.div
    ref={ref}
    initial="hidden"
    animate={controls}
    variants={cardVariants}
    transition={{ duration: 1.5 }}
  >
      <div className="bg-yellow-500 rounded">
    <div className="   ">
      {Startaniamtion && (
        <div>
          <p
            className=" mb-1 text-[40px] h-5  text-center "
            style={{ color: "white", fontFamily: "Bebas Neue" }}
          ></p>

          <div class="container bg-gray-200 ">
            <div>
              <div class="skill-box">
                <span class="title">Javascript</span>

                <div class="skill-bar">
                  <span class="skill-per Javascript">
                    <span class="tooltip">80%</span>
                  </span>
                </div>
              </div>

              <div class="skill-box">
                <span class="title">React</span>

                <div class="skill-bar">
                  <span class="skill-per react">
                    <span class="tooltip">70%</span>
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div class="skill-box">
                <span class="title">Typescript</span>

                <div class="skill-bar">
                  <span class="skill-per typescript">
                    <span class="tooltip">50%</span>
                  </span>
                </div>
              </div>
              <div class="skill-box">
                <span class="title">nodejs</span>

                <div class="skill-bar">
                  <span class="skill-per nodejs">
                    <span class="tooltip">70%</span>
                  </span>
                </div>
              </div>

              <div class="skill-box">
                <span class="title">VueJs</span>

                <div class="skill-bar">
                  <span class="skill-per vue">
                    <span class="tooltip">30%</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
    </motion.div>

  );
}

export default Skilles;
