import React from "react";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.linkedin.com/in/-varun-sethi-5-/" className="home__social-icon" id="linkedin" target="_blank">
            <i class="uil uil-linkedin-alt"></i>
            {/* <p class="social-icon-name">Linkedin</p> */}
            </a>
            <a href="https://github.com/varunsethi515" className="home__social-icon" id="github" target="_blank">
            <i class="uil uil-github-alt"></i>
            {/* <p class="social-icon-name">Git Hub</p> */}
            </a>
            <a href="https://api.whatsapp.com/send?phone=9425706747&text=HOLA, more information please!" className="home__social-icon" id="whatsapp" target="_blank">
            <i class="uil uil-whatsapp"></i>
            {/* <p class="social-icon-name">What's app</p> */}
            </a>
            <a href="https://leetcode.com/Varun_Sethi_15/" className="home__social-icon" id="leetcode" target="_blank">
            <i class="uil uil-code-branch"></i>
            {/* <p class="social-icon-name">Leetcode</p> */}
            </a>
            <a href="https://www.hackerrank.com/varunsethi515" className="home__social-icon" id="hackerrank" target="_blank">
            <i class="uil uil-arrow"></i>
            {/* <p class="social-icon-name">HackerRank</p> */}
            </a>
            
        </div>
    )
}

export default Social