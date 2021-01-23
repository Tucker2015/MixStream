import React from "react";
import { withRouter } from "react-router";
import '../styles/SideBar.scss'

const Side = props => {


    return (
        <>

            <nav className="col-md-12 d-none d-md-block bg-dark sidebar text-light"
                activeKey="/home"
                onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"></div>
                <h5> MixStream </h5>
                <li>
                    <a href="/home">Active</a>
                </li>
                <li>
                    <a eventKey="link-1">Link</a>
                </li>
                <li>
                    <a eventKey="link-2">Link</a>
                </li>
                <li>
                    <a eventKey="disabled" disabled>
                        Disabled
                </a>
                </li>
            </nav>

        </>
    );
};
const Sidebar = withRouter(Side);
export default Sidebar