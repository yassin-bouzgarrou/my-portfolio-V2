import { useState, useEffect } from "react";

import "./App.css";
import ImgYas from "./assets/PICVID/yassin.png";
import AboutMe from "./component/AboutMe.jsx";

import Skilles from "./component/Skilles.jsx";
import { useSpring, animated } from "@react-spring/web";
import styles from "./styles.module.css";
import { motion, useAnimation } from "framer-motion";
import cv from "./assets/MedYassinBouzgarrouCv .pdf";
import Typewriter from "./assets/animation/TextAnimation.jsx";
import { MdOutlineWeb } from "react-icons/md";
import { TfiServer } from "react-icons/tfi";
import { RiTeamLine } from "react-icons/ri";
import { MdOutlineWebAsset } from "react-icons/md";
import Svganimate from "./assets/PICVID/underpic.gif"
import { CgWebsite } from "react-icons/cg";
import { useInView } from "react-intersection-observer";

export default function App() {
  const [state, toggle] = useState(true);
  const [dark, setDarkemode] = useState(true);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 },
  });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    document.body.classList.toggle("dark", dark);
  }, [dark, controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 2, x: 0 },
  };

  return (
    <div
      className={`h-full bg-white px-10 md:px-20 lg:px-40 ${
        dark ? "dark:bg-gray-900" : ""
      }`}
    >
      <div>
        <nav className="py-5 md:py-11 flex justify-between dark:text-white mb-7">
          <h1
            className="text-xl text-left md:text-[32px]"
            style={{ fontFamily: "Teko" }}
          >
            yassin-<span style={{ color: "#FFD60A" }}>bouzgarrou 👋</span>
          </h1>
          <ul className="flex items-center">
            <li>
              <button onClick={() => setDarkemode(!dark)}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  className="cursor-pointer text-2xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
                  <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path>
                </svg>
              </button>
            </li>
            <li>
              <a className="" href={cv} download="yassinBozugarrouCV">
                <button className="continue-application ml-5">
                  <div>
                    <div className="pencil"></div>
                    <div className="folder">
                      <div className="top">
                        <svg viewBox="0 0 24 27">
                          <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                        </svg>
                      </div>
                      <div className="paper"></div>
                    </div>
                  </div>
                  Contact Me
                </button>
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex justify-center">
        <div className=" rounded-full relative">
        <div className="absolute top-0 left-0 w-full h-full">
    <img   className="   w-[400px]   opacity-95   h-52" src={Svganimate} alt="Description of the SVG animation" />
  </div>
  <motion.img
    className="counded-full w-44 h-44"
    src={ImgYas}
    alt="Description of the image"
    initial={{ scale: 0 }}
    animate={{ rotate: 360, scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 30,
    }}
    style={{ borderRadius: "50%" }}
  />

</div>

        </div>

        <div onClick={() => toggle(!state)}>
          <animated.div
            className="text-xl text-center py-2 text-teal-600 font-medium dark:text-teal-400 md:text-5xl mt-9"
            style={{
              opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
              scale: x.to({
                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
              }),
            }}
          >
            <div>
              <p style={{ fontFamily: "Rubik Broken Fax ", color: "#FFD60A" }}>
                {" "}
                I am <Typewriter text="Yassin Bouzgarrou" delay={150} />
              </p>
            </div>
          </animated.div>
        </div>
        <p className="mb-5 text-md py-5 text-left md:text-center md:w-[540px] gap-20 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
          I'm an energetic and driven full-stack developer and instructor,
          fueled by an unending passion for learning and a steadfast dedication
          to excellence. My insatiable curiosity propels me forward, always
          eager to acquire new knowledge and skills.
        </p>

        <div className="card">
          <div className="header">
            <div className="top">
              <div className="circle">
                <span className="red circle2"></span>
              </div>
              <div className="circle">
                <span className="yellow circle2"></span>
              </div>
              <div className="circle">
                <span className="green circle2"></span>
              </div>
              <div className="title">
                <p id="title2">socialMedia.jsx</p>
              </div>
            </div>
          </div>
          <div className="code-container">
            <div class="cards">
              <a class="socialContainer containerOne" href="#">
                <svg viewBox="0 0 16 16" class="socialSvg instagramSvg">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                </svg>
              </a>

              <a class="socialContainer containerTwo" href="#">
                <svg viewBox="0 0 16 16" class="socialSvg twitterSvg">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                </svg>
              </a>

              <a class="socialContainer containerThree" href="#">
                <svg viewBox="0 0 448 512" class="socialSvg linkdinSvg">
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </svg>
              </a>

              <a class="socialContainer containerFour" href="#">
                <svg viewBox="0 0 16 16" class="socialSvg whatsappSvg">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <p
        className="  text-[40px]  mb-7 mt-20 flex justify-center  "
        style={{ color: "white", opacity: "0.8", fontFamily: "Bebas Neue" }}
      >

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
            

            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>

            <div class="infotop">
              <div className="frontedn-icon">
                {" "}
                <CgWebsite className="icons" size={"80px"} />
              </div>
              <p className=" text-[22px] titlePhon">Frontend Development</p>
          
            </div>
          </div>
          <div class="e-card playing">
            <div class="image"></div>

            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>

            <div class="infotop">
              <div className="frontedn-icon  mb-1 ">
                <TfiServer className="icons" size={"60px"} />
              </div>

              <p className=" text-[23px]  titlePhon  ">Backend Development</p>
            </div>
          </div>
          <div class="e-card playing">
            <div class="image"></div>

            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>

            <div class="infotop">
              <div className="frontedn-icon">
                <RiTeamLine className="icons" size={"60px"} />
              </div>
              <p className="titlePhon">Collaboration and Communication</p> 
            </div>
          </div>
        </div>
      </motion.div>
      <div className=" bg-slate-600">
     
       </div>
       <p className=" mb-1 text-[40px] mt-10  text-center "style={{ color: "white", fontFamily: "Bebas Neue" }}>SKILLES</p>
   

        
       <Skilles> </Skilles>
       
       <p className=" mb-1 text-[40px] mt-10  text-center "style={{ color: "white", fontFamily: "Bebas Neue" }}>Project</p>
    </div>
  );
}
