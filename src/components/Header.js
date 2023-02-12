import React, {useState} from 'react';
import {Breadcrumb} from 'react-bootstrap';

function Header() {
    /* breadcrumb from location */
    const [breadcrumb, setBreadcrumb] = useState({
        pathName: window.location.pathname,
        home: window.location.pathname,
    })
    return (
        <div className="header-pages d-flex align-items-center justify-content-center flex-column">
            <h2 className="page-name">{breadcrumb.pathName.toUpperCase().replaceAll("%20", " ").split("/")}</h2>
            <Breadcrumb className="custom-breadcrumb">
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                {/* remove space from location  */}
                <Breadcrumb.Item active>{breadcrumb.pathName.replaceAll("%20", " ").split("/")}</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
}

export default Header;
