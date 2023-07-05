import React from 'react';
import img1 from '../images/icons8-qibla-direction-50.png';
import img2 from '../images/icons8-no-money-64.png';
import img3 from '../images/icons8-mosque-64.png'

export default function About() {
    function About(props) {
        return (
            <div className='About-us-card shadow'>
                <div className='About-us-card-img'>
                    <img src={props.img} alt='prayer' />
                </div>

                <div className='About-us-card-text'>
                    <h5>{props.text}</h5>
                </div>
            </div>
        );
    }
    return(
        <div className='container About-us'>
            <h2 className='About-us-title'>عنا</h2>
            <div className='About-us-cards d-flex justify-content-between flex-wrap'>
                <About img = {img1} text = "معرفة مواقيت الصلاة"/>
                <About img = {img3} text = "مجتمع اسلامى متكامل"/>
                <About img = {img2} text = "محتوى مجانى ومفتوح"/>
            </div>
        </div>
    );
}