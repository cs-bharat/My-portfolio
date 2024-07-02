import React from "react"
import './skilss.css';
import {
     React1, css, express, git, Html, java, Js, mongoDb1, nextjs2, nodeJs, npm, sql, tailwind, threejs, aws, github,
     cloud, vn, django, docker, vs, figma, firebase, framer, grafana, inteliJ, materialUI, netlify, redux, Bootstrap
} from "../assets";

import Tilt from 'react-parallax-tilt';

function Skills() {
     return (
          <>
               <div className="skilss-container w-[100%] global overflow-hidden object-cover flex flex-col flex-wrap">

                    <div className="heading gap-[11px] text-3xl flex flex-col justify-center items-center mt-8">
                         <h1 className="text-5xl bold text-white ">Skilss</h1>
                         <p className=" text-center">Here are some of my skills on which I have been working on for the past 3 years.</p>
                    </div>

                    <div className="container  w-[100%] max-w-[800px] flex justify-center items-center flex-wrap mt-[60px] gap-[40px] m-auto " >

                         <Tilt className="tilt " tiltMaxAngleX={20} tiltMaxAngleY={15} perspective={1000} transitionSpeed={500} scale={1.1}>
                              <div className="skill-box1  shadow-indigo-500/50 outline-1 outline m-[30px] shadow-xl  radius-[5px] rounded-lg ">
                                   <div className="Heading-box box-H-1 text-center text-3xl font-medium  subpixel-antialiased cursor-pointer hover:-translate-y-1 transition ease-in-out delay-150 hover:scale-110">Frontend</div>
                                   <div className="skills-cont-box box-1 shadow-amber-800 shadow-lg max-w-[400px] pb-8">
                                        <div className="individual-skill shadow-zinc-600 shadow-lg  hover:scale-110">
                                             <img src={React1} className="imgLogo" />
                                             React Js
                                        </div>
                                        <div className="individual-skill  hover:scale-110">
                                             <img src={redux} className="imgLogo" />
                                             Redux
                                        </div>
                                        <div className="individual-skill  hover:scale-110 ">
                                             <img src={nextjs2} className="imgLogo" />
                                             Next Js
                                        </div>

                                        <div className="individual-skill shadow-zinc-600 shadow-lg   hover:scale-110">
                                             <img src={Html} className="imgLogo" />
                                             Html
                                        </div>

                                        <div className="individual-skill  hover:scale-110 ">
                                             <img src={css} className="imgLogo" />
                                             Css
                                        </div>

                                        <div className="individual-skill  hover:scale-110 ">
                                             <img src={Js} className="imgLogo" />
                                             JavaScript
                                        </div>

                                        <div className="individual-skill shadow-zinc-600 shadow-lg  hover:scale-110">
                                             <img src={Bootstrap} className="imgLogo" />
                                             Bootstrap
                                        </div>

                                        <div className="individual-skill shadow-zinc-600 shadow-lg   hover:scale-110">
                                             <img src="" className="imgLogo" />
                                             daisy Ui
                                        </div>
                                        <div className="individual-skill  hover:scale-110">
                                             <img src={materialUI} className="imgLogo" />
                                             Material Ui
                                        </div>
                                        <div className="individual-skill  hover:scale-110">
                                             <img src={tailwind} className="imgLogo" />
                                             Tailwind
                                        </div>
                                   </div>
                              </div>

                         </Tilt>

                         <Tilt className="tilt " tiltMaxAngleX={20} tiltMaxAngleY={15} perspective={1000} transitionSpeed={500} scale={1.1}>
                              {/*  h-[400px] w-[550px]  */}
                           <div className="skill-box2 m-[30px] shadow-xl shadow-indigo-500/50 rounded-lg outline-1 outline">

                               <div className="Heading-box box-H-2 text-center text-3xl font-medium  subpixel-antialiased cursor-pointer hover:-translate-y-1 transition ease-in-out delay-150 hover:scale-110">
                                   Backend
                              </div>
                                   <div className="skills-cont-box box-2 shadow-cyan-200 shadow-xl pb-8" >
                                        <div className="individual-skill  hover:scale-110 ">
                                             <img src={nodeJs} className="imgLogo" />
                                             Node Js
                                        </div>
                                        <div className="individual-skill  hover:scale-110 shadow-zinc-600 shadow-lg ">
                                             <img src={express} className="imgLogo" />
                                             Express Js
                                        </div>
                                        <div className="individual-skill   hover:scale-110">
                                             <img src={sql} className="imgLogo" />
                                             MySQL
                                        </div>

                                        <div className="individual-skill  hover:scale-110 shadow-zinc-600 shadow-lg ">
                                             <img src={mongoDb1} className="imgLogo" />
                                             MongoDB
                                        </div>

                                        <div className="individual-skill  hover:scale-110 ">
                                             <img src={django} className="imgLogo" />
                                             Django
                                        </div>

                                        <div className="individual-skill  hover:scale-110 shadow-zinc-600 shadow-lg">
                                             <img src={firebase} className="imgLogo" />
                                             Firebase
                                        </div>

                                        <div className="individual-skill   hover:scale-110">
                                             <img src={npm} className="imgLogo" />
                                             NPM
                                        </div>

                                        <div className="individual-skill  hover:scale-110 ">
                                             <img src={java} className="imgLogo" />
                                             JAVA
                                        </div>
                                        <div className="individual-skill  hover:scale-110 ">
                                             <img src="" className="imgLogo" />
                                             Appwrite
                                        </div>
                                       
                                    </div>
                              </div>
                         </Tilt>


                         {/* <Tilt className="tilt " tiltMaxAngleX={20} tiltMaxAngleY={15} perspective={1000} transitionSpeed={500} scale={1.1}>
                              <div className="skill-box3 h-[400px] w-[550px] m-[30px] shadow-xl shadow-indigo-500/50 rounded-lg outline-1 outline">

                                   <div className="Heading-box box-H-3 text-center text-3xl font-medium  subpixel-antialiased cursor-pointer hover:-translate-y-1 transition ease-in-out delay-150 hover:scale-110">DevOps</div>
                                   <div className="skills-cont-box box-3 shadow-amber-200 shadow-xl">
                                        <div className="individual-skill   hover:scale-110 shadow-zinc-600 shadow-lg">
                                             <img src={aws} className="imgLogo" />
                                             AWS
                                        </div>
                                        <div className="individual-skill  hover:scale-110 ">
                                             <img src={cloud} className="imgLogo" />
                                             Google Cloud
                                        </div>
                                        <div className="individual-skill  hover:scale-110 shadow-zinc-600 shadow-lg ">
                                             <img src={docker} className="imgLogo" />
                                             Docker
                                        </div>

                                        <div className="individual-skill   hover:scale-110 shadow-zinc-600 shadow-lg ">
                                             <img src={grafana} className="imgLogo" />
                                             Grafana
                                        </div>
                                   </div>
                              </div>
                         </Tilt> */}
                         
                         <Tilt className="tilt " tiltMaxAngleX={20} tiltMaxAngleY={15} perspective={1000} transitionSpeed={500} scale={1.1}>
                              <div className="skill-box4  m-[30px] shadow-xl shadow-indigo-500/50 rounded-lg outline-1 outline">
                                   <div className="Heading-box box-H-4 text-center text-3xl font-medium  subpixel-antialiased cursor-pointer hover:-translate-y-1 transition ease-in-out delay-150 hover:scale-110">
                                        Others
                                   </div>
                                   <div className="skills-cont-box box-4 shadow-stone-300 shadow-lg pb-8">
                                        <div className="individual-skill   hover:scale-110 ">
                                             <img src={git} className="imgLogo" />
                                             Git
                                        </div>
                                        <div className="individual-skill   hover:scale-110 shadow-zinc-600 shadow-lg">
                                             <img src={github} className="imgLogo" />
                                             GitHub
                                        </div>
                                        <div className="individual-skill   hover:scale-110 ">
                                             <img src={vs} className="imgLogo" />
                                             Vs Code
                                        </div>

                                        <div className="individual-skill   hover:scale-110 shadow-zinc-600 shadow-lg ">
                                             <img src={inteliJ} className="imgLogo" />
                                             Inteli Je
                                        </div>

                                        <div className="individual-skill  hover:scale-110 ">
                                             <img src={figma} className="imgLogo" />
                                             Figma
                                        </div>

                                        <div className="individual-skill  hover:scale-110 shadow-zinc-600 shadow-lg">
                                             <img src={vn} className="imgLogo" />
                                             VN
                                        </div>

                                        <div className="individual-skill  hover:scale-110">
                                             <img src={threejs} className="imgLogo" />
                                             ThreeJs
                                        </div>

                                        <div className="individual-skill  hover:scale-110 shadow-zinc-600 shadow-lg ">
                                             <img src={framer} className="imgLogo" />
                                             Framer
                                        </div>
                                        <div className="individual-skill   hover:scale-110 shadow-zinc-600 shadow-lg  ">
                                             <img src={netlify} className="imgLogo" />
                                             Netlify
                                        </div>
                                   </div>

                              </div>
                         </Tilt>
                    </div>

               </div>
          </>
     )
}
export default Skills