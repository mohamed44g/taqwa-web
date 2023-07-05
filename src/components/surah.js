import React, {useEffect , useState} from "react";

export default function Surah() {
    const [data, setDate] = useState([]);

    function AzkarCard(props) {
        return (
            <>
                <div className="azkar-card">
                    <p className="azkar-card-text">
                        ({props.text})
                    </p>
                    <p>الأية : {props.number}</p>
                    <p><strong>التفسير :</strong> {props.tafseer}</p>
                </div>
                <hr/>
            </>
        );
    }

    useEffect(() => {
            testfunc();
    }, [])

    async function testfunc(){
        let api = await fetch(`https://quranenc.com/api/v1/translation/sura/arabic_moyassar/${localStorage.getItem("tafseer-surha")}`)
        let apijson = await api.json()
        setDate(apijson.result);
    }



    return (
        <div className="Azkar mt-5">
            <h1 className="text-center">{}</h1>
            <h4>{localStorage.getItem("surha")}</h4>
            <hr />
            <div className="azkar-cards">
                {data?.map(ele => <AzkarCard key = {ele.aya} text = {ele.arabic_text} tafseer = {ele.translation} number = {ele.aya}/>)}
            </div>
        </div>
    );
}