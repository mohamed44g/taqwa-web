import React , {useEffect , useState}from "react";
import { Link} from "react-router-dom";

export default function Tafsser() {
    const [data, setDate] = useState([]);
    
    function TafseerCard(props) {
        return (
            <div className="Tafsser-page-link shadow">
                <Link to= '/Surah' data = {`${props.number}`} data-name = {`${props.name}`}  onClick={handleClicked}>{props.name}</Link>
            </div>
        );
    }

    function handleClicked(event) {
        localStorage.setItem("tafseer-surha", event.currentTarget.getAttribute("data"));
        localStorage.setItem("surha", event.currentTarget.getAttribute("data-name"));
    }

    useEffect(() => {
        testfunc();
}, [])

    async function testfunc(){
        let api = await fetch("https://api.alquran.cloud/v1/meta")
        let apijson = await api.json();
        setDate(apijson.data.surahs.references);
    }


    return (
        <div className="Tafsser-page container mt-5">
        <div className="Tafsser-page-links d-flex justify-content-evenly flex-wrap gap-4">
            {data?.map(ele => <TafseerCard key = {ele.number} name = {ele.name} number = {ele.number}/>)}
        </div>
    </div>
        );
}