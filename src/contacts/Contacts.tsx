import React from "react";
import classes from "./Contacts.module.css";
import styleContainer from "../common/styles/Container.module.css";

function Contacts() {
    return (
        <div className={classes.contactsContainer}>
            <div className={`${styleContainer.container} ${classes.contactsBox}`}>
                <h2 className={classes.contactTitle}>Contacts</h2>
                <form className={classes.formStyle}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="" id=""></textarea>
                </form>
                <button className={classes.contactsBtn}>Contact me</button>
            </div>

        </div>
    )
}

export default Contacts;