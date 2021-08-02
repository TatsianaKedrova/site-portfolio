import React from "react";
import footerStyle from "./Footer.module.css";
import styleContainer from "../common/styles/Container.module.css";
import FooterIcon from "./FooterIcon";

function Footer() {
    return (
        <div className={footerStyle.footerContainer}>
            <div className={`${styleContainer.container} ${footerStyle.footerBox}`}>
                <h2 className={footerStyle.name}>Tatiana Kedrova</h2>
                <div className={footerStyle.footerInfo}>
                    <FooterIcon></FooterIcon>
                    <FooterIcon></FooterIcon>
                    <FooterIcon></FooterIcon>
                    <FooterIcon></FooterIcon>
                </div>
                <div className={footerStyle.footerText}>@ 2019 All right reserved</div>
            </div>

        </div>
    )
}

export default Footer;