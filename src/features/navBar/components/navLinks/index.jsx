import "./navLinks.css";

import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import NavOptions from "./navOptions";
import HamburgerIconLink from "./hamburgerIconLink";

import { navlinkData } from "constant-data";

const NavLinkIcon = ({ className, title }) => {
    return (
        <li>
            <a className={className}>
                <span>{title}</span>
            </a>
        </li>
    );
};

const NavLinks = ({ isLargeDevice }) => {
    const [isHamburgerActive, setIsHamburgerActive] = useState(false);

    useEffect(() => {
        if (isHamburgerActive && isLargeDevice) {
            setIsHamburgerActive(false);
        }
    }, [isLargeDevice]);

    return (
        <div className={`navLinks__wrapper ${isHamburgerActive ? "sideMenu__active" : ""}`}>
            <ul className="navLinks__list">
                {!isLargeDevice && (
                    <HamburgerIconLink
                        isActive={isHamburgerActive}
                        onClick={() => setIsHamburgerActive(!isHamburgerActive)}
                    />
                )}
                <NavLinkIcon className="apple-logo" title="apple" />
                {isLargeDevice && (
                    <>
                        <NavOptions data={navlinkData} />
                        <NavLinkIcon className="search-icon" title="search" />
                    </>
                )}
                <NavLinkIcon className={`bag-icon ${isHamburgerActive ? "opacity-0" : ""}`} title="bag" />
            </ul>
            <hr />
            {!isLargeDevice && (
                <ul className="sideMenu__list ">
                    <NavOptions data={navlinkData} />
                </ul>
            )}
        </div>
    );
};

NavLinkIcon.propTypes = {
    className: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

NavLinks.propTypes = {
    isLargeDevice: PropTypes.bool.isRequired
};

export default NavLinks;
