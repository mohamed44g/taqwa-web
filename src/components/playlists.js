import React, {useState} from 'react';

export default function Playlists() {
    const [data] = useState([
        {   id : 1,
            img: 'https://i.ytimg.com/vi/tHvfqbfQuXg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDdCIODuynuy5tvPZNqUv0BqslB5Q',
            title: "كل يوم اية",
            link : "https://www.youtube.com/playlist?list=PLgqtKVxUxe2qJODDwEX6LA3-euaMbQb7Y",
            des: "رحلة مع محمد الغليظ فى تفسير ايات القرءان بطريقة بسيطة وسلسة كل يوم لمدة شهر."},

        {   id : 2,
            img: 'https://i.ytimg.com/vi/LI99lWP1zac/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC0ixj4zvUMM1P1cyzS3bz3VREX7Q',
            title: "السيرة النبوية",
            link : "https://www.youtube.com/playlist?list=PLSSxr3Rf2_X2oKwiy4UhzIdj4ACzB6dee",
            des: "رحلة مع احمد عامر من اجمل السير التى تتحدث عن الرسول صل لله عليه وسلم بشكل مبسط وعلى شكل قصة."},

        {   id : 3,
            img: 'https://i.ytimg.com/vi/bJEtsRGXAJM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDlojDVnh29H_ZnDW3uUnwHLgxoQg',
            title: "دورة علم النفس",
            link : "https://www.youtube.com/playlist?list=PLiyp8353pdD6xaLaeM-nI7f-_0KmVUlje",
            des: "رحلة مع عبدالرحيم ايمن فى علم النفس وعرض الاضرابات الشخصية والخرافات المنتشرة على انها حقائق."},

            {   id : 4,
                img: 'https://i.ytimg.com/vi/VFNumPUAAUA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBTM66ZS4h5ocYEMR-G8HbdwMqUlg',
                title: "الوعد الحق",
                link : "https://www.youtube.com/playlist?list=PL7PzPXcv-qixZCAGXILiGlYOP8HrDhqhu",
                des: "رحلة مع د.عمر عبدالكافى للتحدث عن رحلة الإنسان إلى الدار الآخرة وماذا بعد الموت ورحيلنا عن هذه الدنيا."},

                {   id : 5,
                    img: 'https://i.ytimg.com/vi/ySLr9IF1tk8/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCATqYj1J2iQgwZPwpC0obudLACOA',
                    title: "أصحاب رسول الله ﷺ",
                    link : "https://www.youtube.com/playlist?list=PLSSxr3Rf2_X1KkCTVpfCVEVcoY16ACSuf",
                    des: "رحلة مع احمد عامر للتعرف على صحابة رسول لله وسيرتهم وهديهم بطريقة ممتعة."},


                    {   id : 6,
                        img: 'https://i.ytimg.com/vi/O0qLV2BJTok/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDnGHqoszQlVN-cDoftse1upLun3Q',
                        title: "تاريخ القدس",
                        link : "https://www.youtube.com/playlist?list=PLdU4e0WLXLkE85fue1JQvLtSWPXO0M88Z",
                        des: "رحلة مع شريف سامى لمعرفة تاريخ فلسطين الحبيبة وكيفية دخول اليهود اليها وتداعيات اليهود عن هيكل سليمان."},
    ]);

    function PlaylistsCard(props) {
        return (
            <div className='playlists-card shadow'>
                <div className='playlists-card-img'>
                    <img src = {`${props.img}`} alt = ''/>
                </div>

                <div className='playlists-card-content'>
                    <h4 className='playlists-card-title'>{props.title}</h4>
                    <p className='playlists-card-des'>
                        {props.des}
                    </p>
                </div>

                <div className='playlists-card-buttons'>
                        <svg width= '40' viewBox="0 0 48 48" id="b" xmlns="http://www.w3.org/2000/svg" fill="#fff" stroke='#000'><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path className="c" d="m43,17.0766c0-5.6539-4.5835-10.2373-10.2374-10.2373-3.7223,0-6.9708,1.9932-8.7626,4.964-1.7919-2.9708-5.0403-4.964-8.7626-4.964-5.6539,0-10.2373,4.5834-10.2373,10.2373,0,1.2925.2496,2.524.6866,3.6627,3.3851,9.7368,18.3134,20.4215,18.3134,20.4215,0,0,14.9282-10.6847,18.3134-20.4215.437-1.1386.6867-2.3702.6867-3.6627Z"></path></g></svg>

                        <a href={`${props.link}`}><button className='btn playlists-card-btn'>المزيد</button></a>
                </div>
            </div>
        );
    }

    return (
        <div className='container playlists'>
            <h2 className='playlists-title'>اهم الدورات</h2>
            <div className='playlists-cards d-flex justify-content-evenly flex-wrap'>
                {data.map(ele => 
                    <PlaylistsCard key = {ele.id} img = {ele.img} title = {ele.title} des = {ele.des} link = {ele.link}/>
                    )}
            </div>
        </div>
    );
}