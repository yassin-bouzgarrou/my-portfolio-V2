import React from "react";
import ImageMe from "../assets/PICVID/TryPic.png";

function AboutMe() {
  return (
    <div>

      <div className=" flex justify-center gap-5 mb-16">
     
        <div className="card-main  ">
          <figure class="card-photo">
            <img className=" w-[500px]" src={ImageMe}></img>
          </figure>
        </div>

        <div  >
          <p className="  mt-10 text-md py-5 text-left  md:w-[540px] gap-20 text-gray-800 dark:text-gray-200 max-w-xl md:text-xl">
            I'm an energetic and driven full-stack developer and instructor,
            fueled by an unending passion for learning and a steadfast
            dedication to excellence. My insatiable curiosity propels me
            forward, always eager to acquire new knowledge and skills.
          </p>
        </div>

      </div>
    </div>
  );
}

export default AboutMe;
