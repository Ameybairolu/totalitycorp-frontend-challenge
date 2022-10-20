import "./navLinks.css";

import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import HamburgerIconLink from "./hamburgerIconLink";
import SearchBar from "../searchBar";

import LinkWithIcon from "commonComponents/linkWithIcon";
import LinkWithText from "commonComponents/linkWithText";

import { navlinkData, quickLinkData } from "constant-data";

const NavLinks = ({ isLargeDevice }) => {
    const [isHamburgerActive, setIsHamburgerActive] = useState(false);

    const [isSearchBarActive, setIsSearchBarActive] = useState(false);

    useEffect(() => {
        if (isHamburgerActive && isLargeDevice) {
            setIsHamburgerActive(false);
        }
        if (isSearchBarActive && !isLargeDevice) {
            setIsSearchBarActive(false);
        }
    }, [isLargeDevice]);

    const onCloseHandler = (e) => {
        if (e.currentTarget !== e.target) {
            return;
        }
        setIsSearchBarActive(false);
    };

    return (
        <div className={`navLinks__wrapper ${isHamburgerActive ? "sideMenu__active" : ""}`}>
            <ul className={`navLinks__list ${isSearchBarActive ? "opacity-0" : ""}`}>
                {!isLargeDevice && (
                    <HamburgerIconLink
                        isActive={isHamburgerActive}
                        onClick={() => setIsHamburgerActive(!isHamburgerActive)}
                    />
                )}
                <LinkWithIcon className="apple-logo" title="apple" />
                {isLargeDevice && (
                    <>
                        <LinkWithText data={navlinkData} />
                        <LinkWithIcon
                            className="search-icon"
                            title="search"
                            onClick={() => setIsSearchBarActive(true)}
                        />
                    </>
                )}
                <LinkWithIcon className={`bag-icon ${isHamburgerActive ? "opacity-0" : ""}`} title="bag" />
            </ul>
            <div className="sideMenu__searchBar__wrapper">
                <div>
                    <SearchBar
                        onClose={() => setIsSearchBarActive(false)}
                        onInputFocus={() => setIsSearchBarActive(true)}
                    />
                </div>

                <button
                    type="button"
                    onClick={onCloseHandler}
                    style={{ color: "blue" }}
                    className={`${isSearchBarActive ? "" : "opacity-0"}`}
                >
                    Cancel
                </button>
            </div>
            <hr />
            {!isLargeDevice && (
                <ul className={`sideMenu__list ${isSearchBarActive ? "quickLinks__wrapper" : ""}`}>
                    {isSearchBarActive && <span className="quickLinks__title">QUICK LINKS</span>}
                    <LinkWithText data={isSearchBarActive ? quickLinkData : navlinkData} />
                </ul>
            )}
            {isLargeDevice && (
                <div className={`searchBar__wrapper ${isSearchBarActive ? "" : "opacity-0"}`} onClick={onCloseHandler}>
                    {isSearchBarActive && (
                        <>
                            <SearchBar onClose={onCloseHandler} />
                            <div className="quickLinks__wrapper">
                                <span className="quickLinks__title">QUICK LINKS</span>
                                <ul>
                                    <LinkWithText data={quickLinkData} />
                                </ul>
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

NavLinks.propTypes = {
    isLargeDevice: PropTypes.bool.isRequired
};

export default NavLinks;
