import React from "react";
import photo from "../assets/Picture.jpg";

function Overview() {
    return (
        <>
            <div className="Overview-section h-[100vh] w-[100%] flex justify-between ">
                <div className="Intro-box  w-[50%] flex justify-center h-[100vh] items-center">
                    <div className="left w-[100%] pl-[15%] ">
                        <div className="text-6xl text-white w-full max-w-[520px]">
                            <h1>Hi,I am </h1>
                            <h1>Bharat Prajapati</h1>
                            <h4 className="pt-[8px] text-4xl">I am a <spna className="text-[#9F86C0]">full stack developer</spna></h4>
                        </div>

                        <div className="Intro-me text-2xl gap-[4px] pt-[20px]">
                            <p>Hi, I'm Bharat Prajapati, a dedicated Full Stack Developer and computer science student with a passion for creating dynamic web applications. I have hands-on experience in both front-end and back-end development, and I'm eager to apply my skills in a professional setting.</p>
                        </div>
                        <div className="pt-[40px]">
                            <button className="btn w-64  rounded-full btn-outline text-white  transitions duration-300 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold text-xl">
                                <a href="">Check Resume</a>
                            </button>
                        </div>
                    </div>
                </div>


                <div className="Img w-[50%] flex justify-center items-center  pt-[30px]">
                    <div className="right w-[40%]">
                        <img src={photo} alt="my-picture" className="rounded-3xl border-l-stone-500 border-2 border-stone-200"></img>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Overview