import React from "react";
import Logo from '../../assets/monarch_logo.png'
import styles from './Sidebar.module.scss'
import { ORGANISATION_NAME } from "./SidebarData";

const Sidebar: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.organisation}>
                <img src={Logo} className={styles.logo} />
                <span>{ORGANISATION_NAME}</span>
            </div>
            {/* TODO */}
            {/* Logo along with Organisation */}
            {/* Project Select Dropdown */}
            {/* Issue Team Releases Tab */}
        </div>
    );
}

export default Sidebar;