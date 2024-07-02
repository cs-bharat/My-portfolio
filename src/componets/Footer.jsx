import React from "react";
import { youtube3, Linkedin3, twitter, Instagram3,discord} from '../assets'
import './footer.css';
function Footer() {
    return (
        <div className="global">

            <div className="max-w-[1400px] flex justify-center items-center flex-col">
                <h1 className="text-center text-lg m-[20px] font-bold">Bharat M Prajapati</h1>
                <div className=" footer flex  text-center justify-center items-center gap-[40px] m-[20px]">
                    <a alt="img" href="https://www.linkedin.com/in/bharatk41/"  target="_blank">
                        <img src={Linkedin3} alt="img-linkedin" className="footer-img  w-[60px] "/>
                    </a>
                    <a href="https://www.youtube.com/channel/UCrPdqiHVWaw92sVO3AEW9yw"  target="_blank">
                        <img src={youtube3} alt="img-youtube" className="footer-img  w-[60px]  " />
                    </a>
                    <a href=""  target="_blank">
                        <img src={Instagram3} alt="img-instagram"  className="footer-img  w-[60px]"/>
                    </a>
                    <a href="https://twitter.com/Bharatp2004" target="_blank">
                        <img src={twitter} alt="twitter-img" className="footer-img  w-[30px] "/>
                    </a>
                    <a href="https://discord.com/channels/@me" target="_blank">
                        <img src={discord} alt="discord-img" className="footer-img w-[60px]  "/>
                    </a>
                </div>
                <div className="text-xl m-[10px] text-center">
                    <p>© 2024 Bharat Prajapati. All rights reserved.</p>
                </div>

            </div>
        </div>
    )
}
export default Footer;