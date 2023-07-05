import React, {useEffect , useState} from "react";


export default function Zekr() {
    const [data, setDate] = useState([]);

    function AzkarCard(props) {
        return (
            <>
                <div className="azkar-card">
                    <p className="azkar-card-text">
                        ({props.text})
                    </p>
                
                    <p className="azkar-card-des">{props.des}</p>
                
                    <div className="azkar-card-footer d-flex justify-content-between mt-5">
                        <h4 className="mt-2">العدد: {props.count}</h4>
                        <button className="btn btn-azkar" onClick={handleClicked}>{props.count}</button>
                    </div>
                </div>
                <hr/>
            </>
        );
    }

    useEffect(() => {
            testfunc();
    }, [])

    async function testfunc(){
        let api = await fetch("https://raw.githubusercontent.com/nawafalqari/azkar-api/56df51279ab6eb86dc2f6202c7de26c8948331c1/azkar.json")
        let apijson = await api.json()
        setDate(apijson[`${localStorage.getItem("zekr-page")}`]);
    }

    function Cards() {
        let filered = data?.filter(data => data.content != "stop");
        return filered.map((ele, index) => Array.isArray(ele) ?
                    ele.map((e , index) => <AzkarCard key = {index} text = {e.content} des = {e.description == '' ? '' : `فضل الذكر : ${e.description}`} count = {e.count}/>) :
                    <AzkarCard key = {index} text = {ele.content} des = {ele.description == '' ? '' : `فضل الذكر : ${ele.description}`} count = {ele.count[0] == 0 ? ele.count.slice(0,0) + ele.count.slice(0+1) : ele.count}/>)
    }


    function handleClicked(event) {
        if(event.currentTarget.innerHTML != 0) {
            event.currentTarget.innerHTML--;
        }
    }
    return (
        <div className="Azkar">
            <h1 className="text-center">{}</h1>
            <h3>{localStorage.getItem("zekr-page")}</h3>
            <hr />
            <div className="azkar-cards">
                {Cards()}
            </div>
        </div>
    );
}