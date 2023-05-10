import React from "react";
import "./footer.css";

const Footer = () => {
       return (
           <footer className="footer">
            <div className="footer__container container">
                <div className="footer__links">
                    <a href="https://leetcode.com/Varun_Sethi_15/"><i class="footer__link-icon" target="blank"></i></a>
                    <a href="https://www.hackerrank.com/dashboard"><i class="footer__link-icon" target="blank"></i></a>
                    <a href="https://www.coursera.org/?skipBrowseRedirect=true"><i class="footer__link-icon" target="blank"></i></a>
                </div>
                <span className="footer__copy">
                    @515; Varun Sethi, all rights are reserved by the developer
                </span>
            </div>
           </footer>
    )
}

export default Footer