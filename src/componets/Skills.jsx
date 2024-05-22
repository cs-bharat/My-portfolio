import React from "react"
import './skilss.css';

function Skills() {
   return (
      <>
         <div className="skilss-container width-screen h-[100%]">

            <div className="heading gap-[11px] text-3xl flex flex-col justify-center items-center">
               <h1 className="text-5xl bold text-white ">Skilss</h1>
               <p className="opacity-90">Here are some of my skills on which I have been working on for the past 3 years.</p>
            </div>

            <div className="container  w-[100%] flex justify-center items-center flex-wrap gap-[40px] mt-[60px] gap-[40px] m-auto " >

               <div className="skill-box1 shadow-indigo-500/50 outline-1 outline h-[400px] w-[550px] m-[30px] shadow-xl  radius-[5px] rounded-lg">
                  <div className="Heading-box box-H-1 text-center text-3xl font-medium  subpixel-antialiased cursor-pointer hover:-translate-y-1 transition ease-in-out delay-150 hover:scale-110">Frontend</div>
                  <div className="skills-cont-box box-1 shadow-amber-800 shadow-lg">
                     <div className="individual-skill shadow-zinc-600 shadow-lg">
                          <img src=""/>
                          React Js
                     </div>
                     <div className="individual-skill ">
                          <img src=""/>
                          Redux
                     </div>
                     <div className="individual-skill ">
                          <img src=""/>
                          Next Js
                     </div>

                     <div className="individual-skill shadow-zinc-600 shadow-lg ">
                          <img src=""/>
                          Html
                     </div>

                     <div className="individual-skill ">
                          <img src=""/>
                          Css
                     </div>

                     <div className="individual-skill ">
                          <img src=""/>
                          JavaScript
                     </div>

                     <div className="individual-skill shadow-zinc-600 shadow-lg">
                          <img src=""/>
                          Bootstrap
                     </div>

                     <div className="individual-skill shadow-zinc-600 shadow-lg ">
                          <img src=""/>
                          daisy Ui
                     </div>
                     <div className="individual-skill ">
                          <img src=""/>
                          Material Ui
                     </div>
                  </div>
               </div>


               <div className="skill-box2  h-[400px] w-[550px] m-[30px] shadow-xl shadow-indigo-500/50 rounded-lg outline-1 outline">
                   
               <div className="Heading-box box-H-2 text-center text-3xl font-medium  subpixel-antialiased cursor-pointer hover:-translate-y-1 transition ease-in-out delay-150 hover:scale-110">Backend</div>
                  <div className="skills-cont-box box-2 shadow-cyan-200 shadow-xl" >
                     <div className="individual-skill ">
                          <img src=""/>
                          Node Js
                     </div>
                     <div className="individual-skill shadow-zinc-600 shadow-lg ">
                          <img src=""/>
                          Express Js
                     </div>
                     <div className="individual-skill ">
                          <img src=""/>
                          MySQL
                     </div>

                     <div className="individual-skill shadow-zinc-600 shadow-lg ">
                          <img src=""/>
                          MongoDB
                     </div>

                     <div className="individual-skill ">
                          <img src=""/>
                          Django
                     </div>

                     <div className="individual-skill shadow-zinc-600 shadow-lg">
                          <img src=""/>
                          Firebase
                     </div>

                     <div className="individual-skill ">
                          <img src=""/>
                          NPM
                     </div>

                     <div className="individual-skill ">
                          <img src=""/>
                          JAVA
                     </div>
                     <div className="individual-skill shadow-zinc-600 shadow-lg">
                          <img src=""/>
                          Flask
                     </div>
                  </div>
               </div>

               <div className="skill-box2 h-[400px] w-[550px] m-[30px] shadow-xl shadow-indigo-500/50 rounded-lg outline-1 outline">

               <div className="Heading-box box-H-3 text-center text-3xl font-medium  subpixel-antialiased cursor-pointer hover:-translate-y-1 transition ease-in-out delay-150 hover:scale-110">DevOps</div>
                  <div className="skills-cont-box box-3 shadow-amber-200 shadow-xl">
                     <div className="individual-skill  shadow-zinc-600 shadow-lg">
                          <img src=""/>
                          AWS
                     </div>
                     <div className="individual-skill ">
                          <img src=""/>
                          Google Cloud
                     </div>
                     <div className="individual-skill shadow-zinc-600 shadow-lg ">
                          <img src=""/>
                          Docker
                     </div>

                     <div className="individual-skill shadow-zinc-600 shadow-lg ">
                          <img src=""/>
                          Grafana
                     </div>
                  </div>
               </div>

               <div className="skill-box2 h-[400px] w-[550px] m-[30px] shadow-xl shadow-indigo-500/50 rounded-lg outline-1 outline">
               <div className="Heading-box box-H-4 text-center text-3xl font-medium  subpixel-antialiased cursor-pointer hover:-translate-y-1 transition ease-in-out delay-150 hover:scale-110">Others</div>
                  <div className="skills-cont-box box-4 shadow-stone-300 shadow-lg">
                     <div className="individual-skill  ">
                          <img src=""/>
                          Git
                     </div>
                     <div className="individual-skill shadow-zinc-600 shadow-lg">
                          <img src=""/>
                          GitHub
                     </div>
                     <div className="individual-skill ">
                          <img src=""/>
                          Vs Code
                     </div>

                     <div className="individual-skill shadow-zinc-600 shadow-lg ">
                          <img src=""/>
                          Inteli Je
                     </div>

                     <div className="individual-skill ">
                          <img src=""/>
                          Figma
                     </div>

                     <div className="individual-skill shadow-zinc-600 shadow-lg">
                          <img src=""/>
                          VN
                     </div>

                     <div className="individual-skill ">
                          <img src=""/>
                          Divanci
                     </div>

                     <div className="individual-skill shadow-zinc-600 shadow-lg ">
                          <img src=""/>
                          Framer
                     </div>
                     <div className="individual-skill shadow-zinc-600 shadow-lg  ">
                          <img src=""/>
                          Netlify
                     </div>
                  </div>

               </div>
            </div>

         </div>
      </>
   )
}
export default Skills