import React from "react";
import styles from "./RemoteJob.module.css";
import styleContainer from "../common/styles/Container.module.css";

function RemoteJob() {
    return (
        <div className={styles.remoteJobContainer}>
            <div className={`${styleContainer.container} ${styles.remoteJobBox}`}>

                    <p className={styles.remoteJobText}>I consider a remote job</p>

                <div>
                    <button className={styles.btn}>Hire me</button>
                </div>
            </div>

        </div>
    )
}

export default RemoteJob;