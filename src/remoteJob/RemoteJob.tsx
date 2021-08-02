import React from "react";
import styles from "./RemoteJob.module.css";
import styleContainer from "../common/styles/Container.module.css";

function RemoteJob() {
    return (
        <div className={styles.remoteJobContainer}>
            <div className={`${styleContainer.container} ${styles.remoteJobBox}`}>
                    <h2 className={styles.remoteJobText}>I consider a remote job</h2>
                <div>
                    <button className={styles.btn}>Hire me</button>
                </div>
            </div>

        </div>
    )
}

export default RemoteJob;