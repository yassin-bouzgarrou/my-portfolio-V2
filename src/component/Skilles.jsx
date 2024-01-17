import React,{useEffect,useRef, useState } from "react";
import "../styles/skill.css";
import { motion, useMotionValueEvent } from "framer-motion";
import { useScroll } from "framer-motion"

function Skilles() {
    const { scrollY } = useScroll()
   const [Startaniamtion,handleanimaton] = useState(false)

    useMotionValueEvent(scrollY, "change", (latest) => {

    if( latest > 500){
        handleanimaton(true)
    }
    })
  

  return (
    <div className="   ">
       {Startaniamtion  && 
       <div> 
       <p className=" mb-1 text-[40px] h-5  text-center "style={{ color: "white", fontFamily: "Bebas Neue" }}></p>
       
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
       }

      
    </div>
  );
}

export default Skilles;
