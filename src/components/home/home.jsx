import React from "react";
import './home.css'
import Social from "./social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid" >
                <div className="home__content grid">
                    <Social />

                    <div className="home__img"></div>

                    <Data />
                </div>


                <section className="banner__container">
            <div className="banner__box banner__text">
                <p class="quote">" Data is the new oil of corporate World "</p>
            </div>
            </section>

            
                <ScrollDown />
            </div>
        </section>
    )
}

export default Home