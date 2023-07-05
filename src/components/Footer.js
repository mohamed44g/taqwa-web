import React from "react";
import Logo from '../images/cb8583e9-taqwa.png';
import facebook from '../images/facebook-svgrepo-com (1).svg';
import instagram from '../images/instagram-svgrepo-com (3).svg';
import whatsapp from '../images/whatsapp-svgrepo-com (1).svg';

export default function Footer() {
    return (
            <div className="footer">
                <div className="footer-bg">
                    <div className="footer-bg-text">
                        <h4>قال رسول الله صلى الله عليه وسلم</h4>
                        <h4>“مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُفَقِّهْهُ فِي الدِّينِ“</h4>
                        <h4>أخرجه البخاري ومسلم</h4>
                    </div>
                </div>

                <div className="footer-content container">
                    <img src={Logo} alt = "Logo" className="footer-logo"/>
                    <div>
                        <p>© Copyright 2021. Powered by WPDeveloper</p>
                    </div>

                
                    <div className="footer-icons d-flex justify-content-center">
                        <a href="https://www.facebook.com/profile.php?id=100041424555685&amp;mibextid=ZbWKwL"><img id="facebook" src={facebook} alt="facebook"/></a>
                        <a href="_"><img id="instgram" src={instagram} alt="instagram" /></a>
                        <a href="http://wa.me/+201017893980?text="><img id="whatsApp" src={whatsapp} alt="whatsApp" /></a>
                    </div>
                    
                </div>
            </div>
    )
}