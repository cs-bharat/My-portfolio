import React from "react";
import './overview.css';
import photo from "../assets/Picture.jpg";
import  Tilt from 'react-parallax-tilt';

function Overview() {
    return (

        <>  
            <div className="global  overview-section  flex justify-center flex-wrap items-center ">
                <div className="intro-box max-w-[600px] w-[50%] flex justify-center h-[100vh] items-center">
                    <div className="left-box w-[100%] pl-[15%] ">
                        <div className="top-intro text-6xl text-white w-full max-w-[520px] ">
                            <h1>Hi,I am </h1>
                            <h1>Bharat Prajapati</h1>
                            <h4 className="pt-[8px] text-4xl">I am a <spna className="text-[#9F86C0]">full stack developer</spna></h4>
                        </div>

                        <div className="intro-me text-2xl gap-[4px] pt-[20px] text-wrap flex items-center justify-center ">
                            <p className="">Hi, I'm Bharat Prajapati, a dedicated Full Stack Developer and computer science student with a passion for creating dynamic web applications. I have hands-on experience in both front-end and back-end development, and I'm eager to apply my skills in a professional setting.</p>
                        </div>
                        <div className="pt-[40px]">
                            <button className="btn w-64 hover:scale-110 rounded-full shadow-lg shadow-cyan-500/50 btn-outline text-white  transitions duration-300 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold text-xl">
                                <a href="">Check Resume</a>
                            </button>
                        </div>
                    </div>
                </div>


                <div className="img w-[50%]  flex justify-center items-center flex-wrap pt-[30px]">
                    <div className="right-img w-[40%] ">
                        <Tilt className="tilt " tiltMaxAngleX={25} tiltMaxAngleY={25} perspective={1000} transitionSpeed={1000} scale={1.1}>
                        <img src={photo} alt="my-picture" className=" rounded-3xl shadow-xl shadow-indigo-500/50 border-l-stone-500 border-2 border-stone-200"></img>
                        </Tilt>
                    </div>
                </div>
            </div>
          
        </>
    )
}
export default Overview