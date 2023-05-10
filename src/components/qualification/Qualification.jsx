import React, { useState } from "react";
import "./qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) =>{
        setToggleState(index);
    }
    return (
        <section id="qualification" className="qualification section" style={{ display:"grid",gridTemplateColumns:"1fr",justifyContent:"center"}}>
            <h2 className="section__title"><span class="color">Q</span>ualification</h2>
            <span className="section__subtitle">My accadmic journey</span>

            <div className="qualification__continer container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ?"qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={()=>toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>{" "}Education
                    </div>

                    <div className={toggleState === 2 ?"qualification__button qualification__active button--flex": "qualification__button button--flex"} onClick={()=>toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}Experience
                    </div>
                </div>

                <div className="qualification__Section">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Bachelor of Technology</h3>
                                <span className="qualification__subtitle" style={{color: "white"}}>Lovely Professional University, LPU</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2020  - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line" style={{color: "white"}}></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line" style={{color: "white"}}></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Senior Secondary Education</h3>
                                <span className="qualification__subtitle" style={{color: "white"}}>Bina Public School, Bina</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2017  - 2019
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Secondary Education</h3>
                                <span className="qualification__subtitle" style={{color: "white"}}>Spain University</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2017
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                {/* <span className="qualification__line"></span> */}
                            </div>
                        </div>

                        {/* <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">UI/UX eXPERT</h3>
                                <span className="qualification__subtitle">Spain University</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2021  - 2018
                                </div>
                            </div>
                        </div> */}
                    </div>




                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Data Science Intern</h3>
                                <span className="qualification__subtitle" style={{color: "white"}}>YoShop E-Commerce</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>Jan'23 - Mar'23
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line" style={{color: "white"}}></span>
                            </div>
                        </div>                       

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line" style={{color: "white"}}></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Data Science with Python</h3>
                                <span className="qualification__subtitle" style={{color: "white"}}>Coursera</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>Aug'22 - Oct'22
                                </div>
                            </div>
                        </div>                     

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Website Development (Freelancing)</h3>
                                <span className="qualification__subtitle" style={{color: "white"}}>Indian Rishng Shark</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>May'22
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line" style={{color: "white"}}></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                {/* <span className="qualification__line"></span> */}
                            </div>
                            <div>
                                <h3 className="qualification__title">Data Analysis with Python</h3>
                                <span className="qualification__subtitle" style={{color: "white"}}>Coursera</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>Sep'23 - Dec'23
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    )
}

export default Qualification