import React from "react";
import "./education.css";
import { logo, bhavnaSchool } from '../assets'

import Tilt from 'react-parallax-tilt';
function Education() {
    return (
        <>
            <div className="container-Education global   ">

                <div id="Education max-w-[1400px]  w-[100%] m-auto " >
                    <div className=" gap-[12px] text-3xl flex flex-col justify-center items-center  w-[100%] ">
                        <div className="heading-education text-5xl bold text-white mt-[30px]">Education</div>
                        <div className="education-intro text-center ">My education has been a journey of self-discovery and growth. My educational details are as follows.</div>
                    </div>

                    <div className="flex justify-center items-center flex-wrap">
                    <Tilt className="tilt " tiltMaxAngleX={14} tiltMaxAngleY={12} transitionSpeed={2500} scale={0.9}>
                        {/* card 1 education */}
                        <div className="verticle-timline p-[10px] max-w-[600px]  m-[30px] shadow-xl  shadow-indigo-500/50 outline-1 outline radius-[5px] rounded-lg  ">
                            <div className="logo-title flex max-w-[700px] justify-center gap-[40px]">
                                <div className="logo-college h-[70px] w-[70px] rounded-lg border-2 m-[18px] flex flex-wrap">
                                    <img className="img-college" src={logo}></img>
                                </div>
                                <div className="college-intro">
                                    <div className=" text-2xl font-bold text-white"> Swarrnim startup and innovation University</div>
                                    <div className="text-md"> Bachelor of Technology - BTech, Computer Science and Engineering</div>
                                    <div className="text-lg"> mar 2021 - mar 2025 </div>
                                </div>
                            </div>
                            <div className="text-2xl m-[10px]  p-[10px]">Grade : 8.58 cgpa</div>
                            <div className="text-xl m-[10px] p-[10px]">I am currently pursuing a Bachelor's degree in Computer Science and Engineering at swarrnim startup and innovetion university Ghandhinagar. I have completed 4 semesters and have a CGPA of 8.71. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, DBMS, and Computer Networks, among others. I am also a member of the Google Developers Student Club (GDSC), where I am learning and working on exciting projects with a team of talented developers.
                            </div>
                        </div>
                     </Tilt>

                        {/* card- 2 education */}
                     <Tilt className="tilt " tiltMaxAngleX={4} tiltMaxAngleY={7} transitionSpeed={1500} scale={1.1}>
                        <div className="verticle-timline p-[10px] max-w-[600px]  m-[30px] shadow-xl  shadow-indigo-500/50 outline-1 outline radius-[5px] rounded-lg relative l-[30px] ">
                            <div className="logo-title flex max-w-[700px] justify-center gap-[40px]">
                                <div className="logo-college h-[70px] w-[70px] rounded-lg border-2 m-[18px] flex flex-wrap">
                                    <img className="img-college" src={bhavnaSchool}></img>
                                </div>
                                <div className="college-intro">
                                    <div className=" text-2xl font-bold text-white"> Ashish HR. Secoundary School </div>
                                    <div className="text-md"> complated XI and XII in Science stream.</div>
                                    <div className="text-lg"> mar 2019 - mar 2021 </div>
                                </div>
                            </div>
                            <div className="text-2xl m-[10px]  p-[10px]">Grade : 7.86 cgpa</div>
                            <div className="text-xl m-[10px] p-[10px]">I completed my class 12 high school education at Ashish Bhavna School, Ahmedabad, where I studied Science with Computer Science.
                            </div>
                        </div>
                     </Tilt>

                    </div>

                    <Tilt className="tilt " tiltMaxAngleX={2} tiltMaxAngleY={3} transitionSpeed={1500} scale={0.8}>
                        <div className="flex justify-center flex-col pl-[85px]">
                        <div className="verticle-timline p-[10px]  max-w-[1000px]  m-[30px] shadow-xl  shadow-indigo-500/50 outline-1 outline radius-[5px] rounded-lg relative l-[30px] ">
                            <div className="logo-title flex max-w-[700px] justify-center gap-[40px]">
                                <div className="logo-college h-[70px] w-[70px] rounded-lg border-2 m-[18px] flex flex-wrap">
                                    <img className="img-college" src={bhavnaSchool}></img>
                                </div>
                                <div className="college-intro">
                                    <div className=" text-2xl font-bold text-white"> Ashish HR. Secoundary School </div>
                                    <div className="text-md"> complated X  Science with computer stream.</div>
                                    <div className="text-lg"> mar 2018 - mar 2019 </div>
                                </div>
                            </div>
                            <div className="text-2xl m-[10px]  p-[10px]">Grade : 84%</div>
                            <div className="text-xl m-[10px] p-[10px]">I completed my class 10 education at Methodist School, Dankuni, where I studied Science with Computer Application.
                            </div>
                        </div>
                        </div>
                     </Tilt>

                </div>
            </div>


        </>
    )
}

export default Education;