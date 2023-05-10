import React from "react";

const DataScience = () => {
    return (
        <div className="skills__content">
        <h3 className="skills__title">Data Science</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                <i class='uil uil-check-circle trophy' ></i>
                <div>
                    <h3 className="skills__name">Data Wrangling</h3>
                    <span className="skills__level">advanced</span>
                </div>
                </div>

                <div className="skills__data">
                <i class='uil uil-check-circle trophy' ></i>
                <div>
                    <h3 className="skills__name">Data Cleaning</h3>
                    <span className="skills__level">advanced</span>
                </div>
                </div>

                <div className="skills__data">
                <i class='uil uil-check-circle trophy' ></i>
                <div>
                    <h3 className="skills__name">Data Transformation (Expolatory Data Analysis EDA)</h3>
                    <span className="skills__level">advanced</span>
                </div>
                </div>
            </div>
            <div className="skills__group">
                <div className="skills__data">
                <i class='uil uil-check-circle trophy' ></i>
                <div>
                    <h3 className="skills__name">Visualisation</h3>
                    <span className="skills__level">advanced</span>
                </div>
                </div>

                <div className="skills__data">
                <i class='uil uil-check-circle trophy' ></i>
                <div>
                    <h3 className="skills__name">Machine Learning (Model Building)</h3>
                    <span className="skills__level">basic</span>
                </div>
                </div>

                <div className="skills__data">
                <i class='uil uil-check-circle trophy' ></i>
                <div>
                    <h3 className="skills__name">Flask Server</h3>
                    <span className="skills__level">basic</span>
                </div>
                </div>
            </div>
            </div>
    </div>
    )
}

export default DataScience