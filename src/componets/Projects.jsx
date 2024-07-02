import React from "react";
import { simonSays, githubCard, fanta, myntra , currency, spotify, textTranslate, virtual } from "../assets";
import './projects.css';
import Tilt from 'react-parallax-tilt';


function Projects() {
    return (
        <>
            <div id='projects' className="global overflow-hidden object-cover ">
                <div className="projects-container-head max-w-[1400px] w-[100%]  m-auto  ">
                    <div className="projects-head gap-[12px] text-3xl flex flex-col justify-center items-center">
                        <h1 className="text-5xl bold text-white mt-[30px] ">Projects</h1>
                        <p className="text-center">I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.</p>
                    </div>


                    <div className="projects-container-body flex justify-center items-center flex-wrap  mt-[60px]  m-auto max-lg:w-[600px] max-md:w-[400px]">

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
                                    <div className="short-intro-project  text-md">this is github Data card. Fatching data from github Api . </div>
                                    <div className="card-project-btn p-[20px] flex items-center justify-center">
                                        <button className="btn btn-outline btn-wide  btn-primary absolute bottom-10">
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
                                    <div className="short-intro-project text-md">"Simon Says is a classic memory game where players follow sequences of colors or patterns. Test your memory and agility as you try to keep up with increasingly complex challenges. How far can you go?"</div>
                                    <div className="card-project-btn p-[20px] flex items-center justify-center">
                                        <button className="btn btn-outline btn-wide  btn-primary absolute bottom-10">
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
                                    <img src={spotify} className="rounded-lg w-[370px]"></img>
                                </div>

                                <div className="language-used-project items-center">
                                    <div className="lan-pro">Html</div>
                                    <div className="lan-pro">Css</div>
                                    <div className="lan-pro">Tailwind</div>
                                    <div className="lan-pro">JavaScript</div>

                                </div>

                                <div className="description-project  m-[10px] ml-[15px] h-[30vh]">
                                    <div className="heading-project text-2xl font-bold text-white">Spotify ui Clone</div>
                                    <div className="timing-project text-lg">oct 2023 - nov 2023 </div>
                                    <div className="short-intro-project text-md">Myntra UI clone , I am build front page of myntra online shopping app . </div>
                                    <div className="card-project-btn p-[20px] flex items-center justify-center">
                                        <button className="btn btn-outline btn-wide  btn-primary absolute bottom-10">
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
                                    <div className="short-intro-project text-md">Developed a real-time currency exchange calculator.
                                        Created a live currency exchange calculator, enabling seamless
                                        conversions with precision and accuracy.
                                    </div>
                                    <div className="card-project-btn p-[20px] flex items-center justify-center">
                                        <button className="btn btn-outline btn-wide  btn-primary  absolute bottom-10">
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
                                    <div className="short-intro-project text-md">Fanta scroll animation , i am used fanta assets and leaf  , fruit , to design  page and gsap scroll animation used .</div>
                                    <div className="card-project-btn p-[20px] flex items-center justify-center">
                                        <button className="btn btn-outline btn-wide  btn-primary  absolute bottom-12">
                                            <a href="https://github.com/cs-bharat"> Visit Projects</a>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </Tilt>


                        {/* 6 */}
                        <Tilt className="tilt" tiltMaxAngleX={10} tiltMaxAngleY={3} transitionSpeed={3000} scale={1.1}>
                            <div className="project2 p-[10px] max-w-[400px] h-[70vh]  w-[550px] m-[30px] shadow-xl shadow-indigo-500/50 outline-1 outline radius-[5px] rounded-lg  flex flex-col items-center justify-center">

                                <div className="img-box overflow-hidden m-[10px] ml-[15px] rounded-lg cursor-pointer">
                                    <img src={textTranslate} className="rounded-lg w-[370px]"></img>
                                </div>

                                <div className="language-used-project items-center">
                                    <div className="lan-pro">ReactJS</div>
                                    <div className="lan-pro">Tailwind</div>
                                    <div className="lan-pro">Apis</div>
                                    <div className="lan-pro">JavaScript</div>

                                </div>

                                <div className="description-project  m-[10px] ml-[15px] h-[30vh]">
                                    <div className="heading-project text-2xl font-bold text-white">Text translate</div>
                                    <div className="timing-project text-lg">oct 2023 - nov 2023 </div>
                                    <div className="short-intro-project text-md">Text Translator helps in translating text from one language to another
                                        language. 
                                    </div>
                                    <div className="card-project-btn p-[20px] flex items-center justify-center">
                                        <button className="btn btn-outline btn-wide  btn-primary absolute bottom-10">
                                            <a href="https://text-translate-kappa.vercel.app/"> Visit Projects</a>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </Tilt>

                        {/* 7 */}
                        <Tilt className="tilt" tiltMaxAngleX={10} tiltMaxAngleY={3} transitionSpeed={3000} scale={1.1}>
                            <div className="project2 p-[10px] max-w-[400px] h-[70vh]  w-[550px] m-[30px] shadow-xl shadow-indigo-500/50 outline-1 outline radius-[5px] rounded-lg  flex flex-col items-center justify-center">

                                <div className="img-box overflow-hidden m-[10px] ml-[15px] rounded-lg cursor-pointer">
                                    <img src={virtual} className="rounded-lg w-[370px]"></img>
                                </div>

                                <div className="language-used-project items-center">
                                    <div className="lan-pro">ReactJS</div>
                                    <div className="lan-pro">Tailwind</div>
                                    <div className="lan-pro">responsive</div>

                                </div>

                                <div className="description-project  m-[10px] ml-[15px] h-[30vh]">
                                    <div className="heading-project text-2xl font-bold text-white">Virtual Reality responsive page</div>
                                    <div className="timing-project text-lg">oct 2023 - nov 2023 </div>
                                    <div className="short-intro-project text-md">virtual Reality responsive page build useing React , tailwind.
                                    </div>
                                    <div className="card-project-btn p-[20px] flex items-center justify-center">
                                        <button className="btn btn-outline btn-wide  btn-primary absolute bottom-12">
                                            <a href="https://virtual-reality-responsive-page.vercel.app/"> Visit Projects</a>
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