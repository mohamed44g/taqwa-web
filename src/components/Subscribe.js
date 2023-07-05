import React from 'react';

export default function Subscribe() {
    return (
        <div className='subscribe container'>
            <h2 className='subscribe-title'>اشترك الان</h2>
            <p className='subscribe-des'> للاستفادة بالمحتوى كامل ومعرفة كل المعلومات الجديدة ومعرفة كل التحديثات.</p>
            <div className='subscribe-form'>
                <button className='btn subscribe-form-btn'>
                    اشترك
                </button>
                <input type='text' placeholder='Your Email Address' id='subscribe-form-input' dir='ltr'/>
            </div>
        </div>
    )
}