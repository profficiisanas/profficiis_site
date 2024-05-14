import React, { useRef, useEffect, useState } from 'react';
import { Container, Row, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import Logo from '../../assets/images/logo.png';
import "./header.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo3 from '../../assets/images/logo4.png'

const nav__links=[
    {   
      path:'/activities',
     display:'Notre  activité'


    },
    {
        path:'/about',
        display:'About',
        dropdown: [
          { path: '/about', display: 'Overview' },
          { path: '/about/team', display: 'Team' },
          { path: '/about/history', display: 'History' },
          { path: '/offresDemploi', display: `Offres D'emploi` },
        ],
      
    },
    {
        path:'/blog',
        display:'Blog'

    },
    {
        path:'/contact',
        display:'contact'

    }

];

const Header = () => {
  const headerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    window.onscroll = () => {
      closeMenu();
    };
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            <div className="logo">
            <Link to="/home">
              <img src={Logo3} alt="" className="logo-img" />
              </Link>

            </div>
            {menuOpen && (
              <div className="overlay" onClick={closeMenu}></div>
            )}
            <div className={`navbar ${menuOpen ? 'active' : ''}`}>
              <div className="navigation">
                <ul className="menu d-flex align-items-center gap-5">
                  {nav__links.map((item, index) => (
                    <li className="nav__item" key={index}>
                      {item.dropdown ? (
                        <Dropdown isOpen={menuOpen} toggle={toggleMenu}>
                          <DropdownToggle caret>
                            {item.display}
                          </DropdownToggle>
                          <DropdownMenu>
                            {item.dropdown.map((subItem, subIndex) => (
                              <DropdownItem key={subIndex}>
                                <NavLink
                                  to={subItem.path}
                                  activeclassname="active__link"
                                  onClick={closeMenu}
                                >
                                  {subItem.display}
                                </NavLink>
                              </DropdownItem>
                            ))}
                          </DropdownMenu>
                        </Dropdown>
                      ) : (
                        <NavLink
                          to={item.path}
                          activeclassname="active__link"
                          onClick={closeMenu}
                        >
                          {item.display}
                        </NavLink>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="nav_-right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">
               <Link to={'/login'}> <Button className="btn primary__btn">Login</Button></Link></div>
              {/* <div className="nav__btns d-flex align-items-center gap-4">
                <Button className="btn primary__btn"><Link to={'/register'}>register</Link></Button>
              </div> */}
              <span className="mobile__menu">
                <div id="menu-btn" onClick={toggleMenu}>
                  <FontAwesomeIcon icon={faBars} className={menuOpen ? 'fa-times' : ''} />
                </div>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
