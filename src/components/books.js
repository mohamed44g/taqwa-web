import React, {useState} from "react";
import img1 from '../images/Webp.webp';
import img2 from '../images/Webp (1).webp';
import img3 from '../images/Webp (2).webp';
import img4 from '../images/Webp (3).webp';
import img5 from '../images/Webp.net-compress-image - 2020-06-06T140332.130.jpg';
import img6 from '../images/22170.jpg';
export default function Books() {
    const [data] = useState([
        {   id: 7,
            title: "كيف عاملهم",
            link : "https://www.kotobati.com/%D9%83%D8%AA%D8%A7%D8%A8-%D9%83%D9%8A%D9%81-%D8%B9%D8%A7%D9%85%D9%84%D9%87%D9%85-%D8%B5%D9%84%D9%89-%D8%A7%D9%84%D9%84%D9%87-%D8%B9%D9%84%D9%8A%D9%87-%D9%88%D8%B3%D9%84%D9%85-pdf",
            img : img1,
        },

        {   id: 8,
            title: "فاتتنى صلاة",
            link : "https://www.kotobati.com/%D9%83%D8%AA%D8%A7%D8%A8-%D9%81%D8%A7%D8%AA%D8%AA%D9%86%D9%8A-%D8%B5%D9%84%D8%A7%D8%A9-pdf",
            img : img2,
        },

        {   id: 9,
            title: "لأنك الله",
            link : "https://www.kotobati.com/%D9%83%D8%AA%D8%A7%D8%A8-%D9%84%D8%A3%D9%86%D9%83-%D8%A7%D9%84%D9%84%D9%87-%D8%B1%D8%AD%D9%84%D8%A9-%D8%A5%D9%84%D9%89-%D8%A7%D9%84%D8%B3%D9%85%D8%A7%D8%A1-%D8%A7%D9%84%D8%B3%D8%A7%D8%A8%D8%B9%D8%A9-pdf",
            img : img3,
        },

        {   id: 10,
            title: "الى لله",
            link : "https://www.kotobati.com/%D9%83%D8%AA%D8%A7%D8%A8-%D8%A5%D9%84%D9%89-%D8%A7%D9%84%D9%84%D9%87-pdf",
            img : img4,
        },

        {   id: 11,
            title: "الرحيق المختوم",
            link : "https://www.kotobati.com/%D9%83%D8%AA%D8%A7%D8%A8-%D8%A7%D9%84%D8%B1%D8%AD%D9%8A%D9%82-%D8%A7%D9%84%D9%85%D8%AE%D8%AA%D9%88%D9%85-pdf",
            img : img5,
        },

        {   id: 12,
            title: "البداية والنهاية",
            link : "https://www.kutubypdf.com/pdf-beginning-end/",
            img : img6,
        },
    ])


    function BooksCard(props) {
        return (
            <div className='Books-card shadow'>
                <div className='Books-card-img'>
                    <img src = {props.img} alt = '' className="shadow-sm"/>
                </div>

                <div className="Books-card-bg"></div>

                <div className='Books-card-content'>
                    <h4 className='Books-card-title'>{props.title}</h4>
                </div>

                <div className='Books-card-buttons'>
                        <svg eleid = {props.eleid} width= '40' viewBox="0 0 48 48" id="b" xmlns="http://www.w3.org/2000/svg" fill="#fff" stroke='#000'><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path className="c" d="m43,17.0766c0-5.6539-4.5835-10.2373-10.2374-10.2373-3.7223,0-6.9708,1.9932-8.7626,4.964-1.7919-2.9708-5.0403-4.964-8.7626-4.964-5.6539,0-10.2373,4.5834-10.2373,10.2373,0,1.2925.2496,2.524.6866,3.6627,3.3851,9.7368,18.3134,20.4215,18.3134,20.4215,0,0,14.9282-10.6847,18.3134-20.4215.437-1.1386.6867-2.3702.6867-3.6627Z"></path></g></svg>

                        <a href={`${props.link}`}><button className='btn Books-card-btn' eleid = {props.eleid}>المزيد</button></a>
                </div>
            </div>
        );
    }



    return (
        <div className="container Books">
            <h2 className="Books-title" >اهم الكتب</h2>
            <div className="Books-cards d-flex justify-content-between flex-wrap">
                {data.map(
                    ele => <BooksCard key = {ele.id} eleid = {ele.id} img = {ele.img} title = {ele.title} link = {ele.link}/>
                )}
            </div>
        </div>
    );
}