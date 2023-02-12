import React ,{useState ,useEffect}from 'react';
import {NavLink} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

function Nav() {
    const [navPos , setNavPos] = useState(false)
    /* ❕❕❕❕❕❕❕ set nav position  if scroll > 70 ❕❕❕❕❕❕❕  */
    useEffect(()=>{
        function handleScroll(){
            window.scrollY > 70 ? setNavPos(true) : setNavPos(false) ;
        }
        window.addEventListener('scroll', handleScroll )
        /* clean up */
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })
    return (
        <div className={`mynavbar ${navPos? `nav-fixed` : ` `}`}>
            <div className={`${navPos? `container-fluid` : `container`}`}>
                <nav className="navbar bg-dm navbar-expand-lg">
                        <div className="d-flex justify-content-between d-lg-none col-12  nav-toggler">
                            <span>Menu</span>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa fa-bars nav-icon"></i>
                        </button>
                        </div>
                        <div className="collapse navbar-collapse align-items-center justify-content-between" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-links col-md-10 align-items-center">
                                <li className="nav-item  nav-li">
                                    <NavLink exact activeClassName="nav-item-active" className="nav-link"to="/">Home</NavLink>
                                </li>
                                <li className="nav-item nav-li">
                                    <NavLink activeClassName="nav-item-active" className="nav-link " to="/about">About</NavLink>
                                </li>
                                <li className="nav-item  nav-li">
                                    <NavLink activeClassName="nav-item-active" className="nav-link "  to="/service">Sevice</NavLink>
                                </li>
                                <li className="nav-item  nav-li">
                                    <NavLink activeClassName="nav-item-active" className="nav-link "  to="/team">Team</NavLink>
                                </li>
                                <li className="nav-item  nav-li">
                                    <NavLink activeClassName="nav-item-active" className="nav-link" to="/projects">Projects</NavLink>
                                </li>
                                <li className="nav-item  nav-li">
                                    <NavLink activeClassName="nav-item-active" className="nav-link" to="/contact">Contact</NavLink>
                                </li>
                                <li className="nav-item  nav-li">
                                    <Dropdown>
                                        <Dropdown.Toggle className="nav-dropdown-btn" id="dropdown-basic">
                                            Pages
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <NavLink  to="/single" className="dropdown-item">Single Page</NavLink>
                                            <NavLink  to="/blog" className="dropdown-item">Blog Page</NavLink>
                                        </Dropdown.Menu>
                                    </Dropdown>     
                                </li>
                            </ul>
                            <button className="btn nav-btn d-none d-md-block bt-bg-yl">
                                <NavLink  to="/Contact" >Get A Qoute</NavLink>
                            </button>
                    </div>
            </nav>
        </div>
    </div>
    )
}

export default Nav
