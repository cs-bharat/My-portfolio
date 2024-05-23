import React from "react";
import { simonSays, githubCard,fanta,myntra,currency } from "../assets";
import './projects.css';

import Tilt from 'react-parallax-tilt';
function Projects() {
    return (
        <>
            <div id='projects' className="global">
                <div className="projects-container-head border-2 max-w-[1400px] w-[100%]  m-auto ">
                    <div className="projects-head gap-[12px] text-3xl flex flex-col justify-center items-center">
                        <h1 className="text-5xl bold text-white ">Projects</h1>
                        <p className="text-center">I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.</p>
                    </div>


                    <div className="projects-container-body flex justify-center items-center flex-wrap  mt-[60px]  m-auto">

                        <Tilt className="tilt" tiltMaxAngleX={10} tiltMaxAngleY={3} transitionSpeed={3000} scale={1.1}>
                            <div className="project1 p-[10px] max-w-[400px] h-[70vh] w-[550px] m-[30px] shadow-xl  shadow-indigo-500/50 outline-1 outline radius-[5px] rounded-lg flex flex-col items-center justify-center ">

                                <div className="img-box overflow-hidden m-[10px] ml-[15px] rounded-lg cursor-pointer ">
                                    <img src={githubCard} className="rounded-lg w-[370px]"></img>
                                </div>

                                <div className="language-used-project">
                                    <div className="lan-pro">JavaScript</div>
                                    <div className="lan-pro">APIS</div>
                                    <div className="lan-pro">CSS</div>
                                    <div className="lan-pro">Tailwind</div>
                                    <div className="lan-pro">Html</div>

                                </div>

                                <div className="description-project  m-[10px] ml-[15px] h-[30vh]">
                                    <div className="heading-project text-2xl font-bold text-white">Github Api Card</div>
                                    <div className="timing-project text-lg">jan 2024 - jan 2024</div>
                                    <div className="short-intro-project  text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ut assumenda atque harum, in corporis quod quos pariatur!</div>
                                    <div className="card-project-btn p-[20px] flex items-center justify-center">
                                        <button className="btn btn-outline btn-wide  btn-primary">
                                            <a href="https://cs-bharat.github.io/Javascript-Project/Github-Api-card/index.html" target="_blank"> Visit Projects</a>
                                        </button>
                                    </div>
                                </div>



                            </div>
                        </Tilt>

                        {/* 2 */}

                        <Tilt className="tilt" tiltMaxAngleX={10} tiltMaxAngleY={3} transitionSpeed={3000} scale={1.1}>
                            <div className="project2 p-[10px] max-w-[400px] h-[70vh]  w-[550px] m-[30px] shadow-xl shadow-indigo-500/50 outline-1 outline radius-[5px] rounded-lg  flex flex-col items-center justify-center">

                                <div className="img-box overflow-hidden m-[10px] ml-[15px] rounded-lg cursor-pointer">
                                    <img src={simonSays} className="rounded-lg w-[370px]"></img>
                                </div>

                                <div className="language-used-project items-center">
                                    <div className="lan-pro">Html</div>
                                    <div className="lan-pro">Css</div>
                                    <div className="lan-pro">Bootstrap</div>
                                    <div className="lan-pro">JavaScript</div>

                                </div>

                                <div className="description-project  m-[10px] ml-[15px] h-[30vh]">
                                    <div className="heading-project text-2xl font-bold text-white">Simon Says Game</div>
                                    <div className="timing-project text-lg">oct 2023 - nov 2023 </div>
                                    <div className="short-intro-project text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, necessitatibus voluptates. Minima, possimus iure. Est, necessitatibus voluptates. Minima, possimus iure.</div>
                                    <div className="card-project-btn p-[20px] flex items-center justify-center">
                                        <button className="btn btn-outline btn-wide  btn-primary">
                                            <a href="https://cs-bharat.github.io/Javascript-Project/simon-says-game/index.html" target="_blank"> Visit Projects</a>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </Tilt>

                        {/* 3 */}

                        <Tilt className="tilt" tiltMaxAngleX={10} tiltMaxAngleY={3} transitionSpeed={3000} scale={1.1}>
                            <div className="project2 p-[10px] max-w-[400px] h-[70vh]  w-[550px] m-[30px] shadow-xl shadow-indigo-500/50 outline-1 outline radius-[5px] rounded-lg  flex flex-col items-center justify-center">

                                <div className="img-box overflow-hidden m-[10px] ml-[15px] rounded-lg cursor-pointer">
                                    <img src={myntra} className="rounded-lg w-[370px]"></img>
                                </div>

                                <div className="language-used-project items-center">
                                    <div className="lan-pro">Html</div>
                                    <div className="lan-pro">Css</div>
                                    <div className="lan-pro">Tailwind</div>
                                    <div className="lan-pro">JavaScript</div>

                                </div>

                                <div className="description-project  m-[10px] ml-[15px] h-[30vh]">
                                    <div className="heading-project text-2xl font-bold text-white">Myntra Clone</div>
                                    <div className="timing-project text-lg">oct 2023 - nov 2023 </div>
                                    <div className="short-intro-project text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, necessitatibus voluptates. Minima, possimus iure. Est, necessitatibus voluptates. Minima, possimus iure.</div>
                                    <div className="card-project-btn p-[20px] flex items-center justify-center">
                                        <button className="btn btn-outline btn-wide  btn-primary">
                                            <a href=""> Visit Projects</a>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </Tilt>

                        {/* 4 */}
                        <Tilt className="tilt" tiltMaxAngleX={10} tiltMaxAngleY={3} transitionSpeed={3000} scale={1.1}>
                            <div className="project2 p-[10px] max-w-[400px] h-[70vh]  w-[550px] m-[30px] shadow-xl shadow-indigo-500/50 outline-1 outline radius-[5px] rounded-lg  flex flex-col items-center justify-center">

                                <div className="img-box overflow-hidden m-[10px] ml-[15px] rounded-lg cursor-pointer">
                                    <img src={currency} className="rounded-lg w-[370px]"></img>
                                </div>

                                <div className="language-used-project items-center">
                                    <div className="lan-pro">Html</div>
                                    <div className="lan-pro">Css</div>
                                    <div className="lan-pro">Tailwind</div>
                                    <div className="lan-pro">Apis</div>
                                    <div className="lan-pro">JavaScript</div>

                                </div>

                                <div className="description-project  m-[10px] ml-[15px] h-[30vh]">
                                    <div className="heading-project text-2xl font-bold text-white">Currency Converter</div>
                                    <div className="timing-project text-lg">oct 2023 - nov 2023 </div>
                                    <div className="short-intro-project text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, necessitatibus voluptates. Minima, possimus iure. Est, necessitatibus voluptates. Minima, possimus iure.</div>
                                    <div className="card-project-btn p-[20px] flex items-center justify-center">
                                        <button className="btn btn-outline btn-wide  btn-primary">
                                            <a href=""> Visit Projects</a>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </Tilt>

                        {/* 5*/}
                        <Tilt className="tilt" tiltMaxAngleX={10} tiltMaxAngleY={3} transitionSpeed={3000} scale={1.1}>
                            <div className="project2 p-[10px] max-w-[400px] h-[70vh]  w-[550px] m-[30px] shadow-xl shadow-indigo-500/50 outline-1 outline radius-[5px] rounded-lg  flex flex-col items-center justify-center">

                                <div className="img-box overflow-hidden m-[10px] ml-[15px] rounded-lg cursor-pointer">
                                    <img src={fanta} className="rounded-lg w-[370px]"></img>
                                </div>

                                <div className="language-used-project items-center">
                                    <div className="lan-pro">Html</div>
                                    <div className="lan-pro">Css</div>
                                    <div className="lan-pro">Gsap</div>
                                    <div className="lan-pro">Animation</div>

                                </div>

                                <div className="description-project  m-[10px] ml-[15px] h-[30vh]">
                                    <div className="heading-project text-2xl font-bold text-white">Fanta scroll animation</div>
                                    <div className="timing-project text-lg">oct 2023 - nov 2023 </div>
                                    <div className="short-intro-project text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, necessitatibus voluptates. Minima, possimus iure. Est, necessitatibus voluptates. Minima, possimus iure.</div>
                                    <div className="card-project-btn p-[20px] flex items-center justify-center">
                                        <button className="btn btn-outline btn-wide  btn-primary">
                                            <a href=""> Visit Projects</a>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </Tilt>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Projects;