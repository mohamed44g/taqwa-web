import React, {useState, useEffect} from 'react';

export default function Prayer() {
    const [time, setTime] = useState('');
    

    useEffect(() => {
        const d = new Date();
        const date = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
        testfunc(date);
}, [])

async function testfunc(date){
    let api = await fetch(`https://api.aladhan.com/v1/timingsByCity/${date}?city=qena&country=egypt&method=8&fbclid=IwAR2QXOGEI0kAnknYKNxHuoBQZ5hXa2ZBlQUiuf_bRxb5Omit4vdZAFL_RhA`)
    let apijson = await api.json()
    setTime(apijson.data.timings)
}

    function PrayerCard(props) {
        return (
                <div className='prayer-card shadow'>
                    <div className='prayer-card-title'>
                        <h4>{props.name}</h4>
                    </div>

                    <div className='prayer-card-text'>
                        <h4>{props.time}</h4>
                    </div>
                </div>
        );
    }

    function tConvert (time) {
        // Check correct time format and split into components
        time = time.toString().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
    
        if (time.length > 1) { // If time format correct
          time = time.slice (1);  // Remove full string match value
          time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        return time.join (''); // return adjusted time or original string
        }


    return (
        <div className='container'>
            <div className='Prayer-time'>
                    <h2 className='Prayer-time-title'>مواقيت الصلاة</h2>

                    <div className='Prayer-time-cards d-flex justify-content-between flex-wrap'>
                        <PrayerCard name = "الفجْر" time = {tConvert(`${time.Fajr}`)}/>
                        <PrayerCard name = "الظُّهْر" time = {tConvert(`${time.Dhuhr}`)}/>
                        <PrayerCard name = "العَصر" time = {tConvert(`${time.Asr}`)}/>
                        <PrayerCard name = "المَغرب" time = {tConvert(`${time.Maghrib}`)}/>
                        <PrayerCard name = "العِشاء" time = {tConvert(`${time.Isha}`)}/>
                    </div>
            </div>
        </div>
    );
}