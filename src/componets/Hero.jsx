import React from "react";

function Hero() {
    return (
        <>
            <div className="web w-[100%] bg-cover bg-center" style={{ backgroundImage: `url('assets/herobg.png')` }}>


                <div className='Hero-section h-[12vh] w-[100%] bg-[#9F86C0] fixed'  >

                    <nav className='flex justify-between items-center pt-[20px] pl-[10%] pr-[10%] '>
                        <h2 className='text-2xl text-slate-50'>Bharat <span className="text-color-[#5E548E]">||</span> prajapati</h2>
                        <ul className='inline-block flex text-white cursor-pointer '>
                            <li className='px-4 py-4 font-bold hover:text-[#ea1538] hover:scale-125 transitions duration-300 '><a href="#" />About</li>
                            <li className='px-4 py-4 font-bold hover:text-[#ea1538] hover:scale-125 transitions duration-300 '><a href="#" />Skilss</li>
                            <li className='px-4 py-4 font-bold hover:text-[#ea1538] hover:scale-125 transitions duration-300'><a href="#" />Projects</li>
                            <li className='px-4 py-4 font-bold hover:text-[#ea1538] hover:scale-125 transitions duration-300'><a href="#" />Education</li>
                            <li className='px-4 py-4 font-bold hover:text-[#ea1538] hover:scale-125 transitions duration-300'><a href="#" />Contact</li>
                        </ul>
                        <button class="btn w-44 rounded-full btn-outline text-white  transitions duration-300">
                            <a href="https://github.com/cs-bharat"> Github-profile </a>
                        </button>
                    </nav>
                </div>
            </div>

        </>
    )
}
export default Hero;