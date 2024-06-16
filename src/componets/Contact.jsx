import React from "react";
function Contact() {
    return (
        <div className="contact-container-outer global ">
            <div className="contact-container-inner max-w-[1400px]  text-center  flex flex-col justify-center items-center flex-wrap">
                <div className="contact-heading  gap-[12px] text-3xl flex flex-col justify-center items-center  w-[100%]">
                    <h1 className="text-5xl bold text-white mt-[30px]">Contact</h1>
                    <p className="text-center">Feel free to reach out to me for any questions or Query!</p>
                </div>
                <div className="form-outer text-center mt-[20px] p-[10px]  max-lg: w-[800px]  max-md:w-[600px] max-sm:w-[400px] ">
                    <div className="form-inner mb-[10px] m-[10px] shadow-xl shadow-indigo-500/50 outline-1 outline radius-[5px] rounded-lg">
                        <h3 className=" text-3xl bold text-white mt-[30px]">Email ME🚀</h3>
                        <input type="text" name="email" placeholder="Your Email" className=" w-[80%] m-[10px] text-xl p-[10px]  bg-transparent  border-blue-300 rounded-xl  outline-1 outline outline-blue-800" />
                        <input type="text" name="name" placeholder="Your Name" className=" w-[80%] m-[10px] text-xl p-[10px]  bg-transparent  border-blue-300 rounded-xl  outline-1 outline outline-blue-800 " />
                        <input type="text" name="subject" placeholder="Your Subject" className=" w-[80%] m-[10px] text-xl p-[10px]  bg-transparent  border-blue-300 rounded-xl  outline-1 outline outline-blue-800 " />
                        <textarea type="text" name="msg" placeholder="Your Message" className=" w-[80%] m-[10px] text-xl p-[10px] h-[200px]  bg-transparent  border-blue-300 rounded-xl  outline-1 outline outline-blue-800 "></textarea>
                        <button className="contact-btn btn btn-outline btn-wide  btn-primary text-xl m-[20px]">Submit</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;