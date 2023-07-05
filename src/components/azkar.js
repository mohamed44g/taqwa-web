import React from "react";
import { Link } from "react-router-dom";

export default function Azkar() {

    function handleClicked(event) {
        localStorage.setItem("zekr-page", event.currentTarget.getAttribute("data"));
    }


    return (
        <div className="Azkar-page container mt-5">
            <div className="Azkar-page-links d-flex justify-content-center flex-wrap gap-5">
                <div className="Azkar-page-link shadow">
                    <Link to= '/zekr' data = "أذكار الصباح" onClick={handleClicked}>أذكار الصباح</Link>
                </div>

                <div className="Azkar-page-link shadow">
                    <Link to= '/zekr' data = "أذكار المساء" onClick={handleClicked}>أذكار المساء</Link>
                </div>

                <div className="Azkar-page-link shadow">
                    <Link to= '/zekr' data = "أذكار بعد السلام من الصلاة المفروضة" onClick={handleClicked}>أذكار بعد الصلاة المفروضة</Link>
                </div>

                <div className="Azkar-page-link shadow">
                    <Link to= '/zekr' data = "تسابيح" onClick={handleClicked}>تسابيح</Link>
                </div>

                <div className="Azkar-page-link shadow">
                    <Link to= '/zekr' data = "أذكار النوم" onClick={handleClicked}>أذكار النوم</Link>
                </div>

                <div className="Azkar-page-link shadow">
                    <Link to= '/zekr' data = "أذكار الاستيقاظ" onClick={handleClicked}>أذكار الاستيقاظ</Link>
                </div>

                <div className="Azkar-page-link shadow">
                    <Link to= '/zekr' data = "أدعية قرآنية" onClick={handleClicked}>أدعية قرآنية</Link>
                </div>

                <div className="Azkar-page-link shadow">
                    <Link to= '/zekr' data = "أدعية الأنبياء" onClick={handleClicked}>أدعية الأنبياء</Link>
                </div>

            </div>
        </div>
    );
}