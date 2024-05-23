import React from "react";
import './hero.css';

function Hero() {
    return (
        <>
            <div className="web hero global border-2">
                <div className='Hero-section h-[70px] w-[100%] max-w-[1200px] m-auto position-relative'  >

                    <nav className='heroSection flex justify-between items-center pt-[12px] pl-[10%] pr-[10%] flex-row'>
                        <h2 className='text-2xl text-slate-50'>Bharat ||<span className="text-cyan-300"> prajapati </span></h2>
                        <ul className='nav-list inline-block flex text-white cursor-pointer '>
                            <li className='px-4 py-4 font-bold hover:text-[#ea1538] hover:scale-125 transitions duration-300 '><a href="#" />About</li>
                            <li className='px-4 py-4 font-bold hover:text-[#ea1538] hover:scale-125 transitions duration-300 '><a href="#" />Skilss</li>
                            <li className='px-4 py-4 font-bold hover:text-[#ea1538] hover:scale-125 transitions duration-300'><a href="#" />Projects</li>
                            <li className='px-4 py-4 font-bold hover:text-[#ea1538] hover:scale-125 transitions duration-300'><a href="#" />Education</li>
                            <li className='px-4 py-4 font-bold hover:text-[#ea1538] hover:scale-125 transitions duration-300'><a href="#" />Contact</li>
                        </ul>
                        <button class="github-button btn w-44 rounded-full btn-outline text-white  transitions duration-300">
                            <a href="https://github.com/cs-bharat"> Github-profile </a>
                        </button>
                        <div className="toggle-btn bold text-2xl text-white cursor-pointer hidden">
                            <i class="fa-solid fa-bars"></i>
                        </div>
                    </nav>

                    <div className="dropdown-menu ">
                        <li className='px-4 py-2 font-bold hover:text-[#ea1538] list-none hover:scale-125 transitions duration-300 '><a href="#" />About</li>
                        <li className='px-4 py-2 font-bold hover:text-[#ea1538] list-none  hover:scale-125 transitions duration-300 '><a href="#" />Skilss</li>
                        <li className='px-4 py-2 font-bold hover:text-[#ea1538] list-none  hover:scale-125 transitions duration-300'><a href="#" />Projects</li>
                        <li className='px-4 py-2 font-bold hover:text-[#ea1538] list-none hover:scale-125 transitions duration-200'><a href="#" />Education</li>
                        <li className='px-4 py-2 font-bold hover:text-[#ea1538] list-none  hover:scale-125 transitions duration-300'><a href="#" />Contact</li>
                        <button class="github-button btn w-44 rounded-full btn-outline text-white  transitions duration-300">
                            <a href="https://github.com/cs-bharat"> Github-profile </a>
                        </button>
                    </div>
                </div>
            </div>

        {/* <script>
            const toggleButton = document.querySelector(".toggle-btn")
            const toggleButtonIcon = document.querySelector(".toggle-btn i")
            const droupDown = document.querySelector(".dropDown-menu")

            toggleButton.onclick = function () {
                droupDown.classList.toggle('open')
                const isOpen = dropDown.classList.contains('open')

                toggleButtonIcon.classList = isOpen
                ? 'fa-solid fa-xmark'
                : 'fa-solid fa-bars'
            }
        </script> */}
        </>
    )
}
export default Hero;