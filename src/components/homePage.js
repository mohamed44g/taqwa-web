import React, {useRef} from 'react';
import { Link } from "react-router-dom";
import Logo from '../images/cb8583e9-taqwa.png';
import Menu from '../images/icons8-menu-96 (6).png';

export default function Homepage() {
    const sidenav = useRef();

    function Close_nav(){
        sidenav.current.classList.remove("side-width");
    }

    function Navbar() {
        function Menu_clicked() {
            sidenav.current.classList.add("side-width");
        }
        return (
            <div className='Navpar' id = "id">
                <div className='container'>
                    <div className='Navbar-content d-flex justify-content-between'>
                        <div className='Logo mt-3'>
                            <img src={Logo} alt = "Logo"/>
                        </div>

                        <div className='Links mt-3'>
                            <div className='d-flex justify-content-between'>
                                <Link to = "/Quran">القرءان الكريم</Link>
                                <Link to = '/tafsser'>تفسير</Link>
                                <Link to="/azkar">اذكار</Link>
                            </div>
                        </div>

                        <div className='button mt-3'>
                            <button className='btn'>تسجيل</button>
                        </div>

                        <div className='Menu mt-2' >
                            <img src={Menu} alt = 'Menu-icon' onClick={Menu_clicked}/> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section className='Home'>
                <div id="mySidenav" className="sidenav"  ref={sidenav}>
                    <div className="side-content">
                        <div className="closebtn" onClick={Close_nav}>&times;</div>
                            <div className='d-flex flex-column mt-3'>
                                <Link to = "/Quran">القرءان الكريم</Link>
                                <Link to = '/tafsser'>تفسير</Link>
                                <Link to="/azkar">اذكار</Link>
                            </div>
                </div>
    </div>
            <Navbar />
            <div className='Homepage'>
                <div className='bg'></div>

                <div className='Home-content'>
                    <div className='Home-title'>
                        <h1>الطريق الى الحق</h1>
                    </div>

                    <p className='Home-des'>(وَمَن يَبْتَغِ غَيْرَ الْإِسْلَامِ دِينًا فَلَن يُقْبَلَ مِنْهُ وَهُوَ فِي الْآخِرَةِ مِنَ الْخَاسِرِينَ)</p>

                    <button className='Home-btn btn'>المزيد</button>
                </div>
            </div>
        </section>
    );
}