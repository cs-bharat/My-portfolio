import React from "react";

function Hero() {
    return (
        <>

            <div className='Hero-section h-[100vh] w-[100%] '>

                <nav className='flex justify-between items-center pt-[20px] pl-[10%] pr-[10%]'>
                    <h2 className='text-2xl text-slate-50'>Bharat || prajapati</h2>
                    <ul className='inline-block flex text-white cursor-pointer '>
                        <li className='px-4 py-4 font-bold hover:text-[#ea1538] '><a href="#" />About</li>
                        <li className='px-4 py-4 font-bold hover:text-[#ea1538]'><a href="#" />Skilss</li>
                        <li className='px-4 py-4 font-bold hover:text-[#ea1538]'><a href="#" />Projects</li>
                        <li className='px-4 py-4 font-bold hover:text-[#ea1538]'><a href="#" />Education</li>
                        <li className='px-4 py-4 font-bold hover:text-[#ea1538]'><a href="#" />Contact</li>
                    </ul>
                    <button class="btn w-44 rounded-full btn-outline">Github-profile</button>
                </nav>
            </div>

        </>
    )
}
export default Hero;