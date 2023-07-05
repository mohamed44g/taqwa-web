import React, {useRef, useState} from "react";

export default function Quran_audio() {
    const input = useRef();
    const [name, setName] = useState("");

    function handleClick() {
        setName(input.current.value);
    }

    function Audio(props) {
        return (
            <audio controls autoPlay>
                <source src={`https://cdn.islamic.network/quran/audio-surah/128/${props.name}/${localStorage.getItem("tafseer-surha")}.mp3`} type="audio/mpeg" />
            </audio> 
        );
    }

    return (
        <div className="Azkar">
            <h1 className="text-center">{}</h1>
            <h3>{localStorage.getItem("surha")}</h3>
            <hr />
            <div className="azkar-cards">
                {
                    name == '' ? <Audio name = {"ar.yasseraldossari"} /> :<Audio name = {name}/> 
                }
                <div className="form">
                    <label htmlFor="cars">اسم القارئ:</label><br />
                    <select id="cars" name="cars" ref={input}>
                        <option value="ar.yasseraldossari">ياسر الدوسرى</option>
                        <option value="ar.alafasy">مشارى العفاسى</option>
                        <option value="ar.nasseralqatami">ناصر القطامى</option>
                        <option value="ar.abdulbasitmurattal">عبد الباسط عبد الصمد</option>
                    </select>
                    <input className = "btn btn-submit" type="submit" value="تشغيل" onClick={handleClick} />
                </div>
            </div>
        </div>
    );
}