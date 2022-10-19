import "./navBar.css";

import PropTypes from "prop-types";

import NavLinks from "../components/navLinks";

const NavBar = ({ isLargeDevice }) => {
    return (
        <nav className="navBar__container">
            <NavLinks isLargeDevice={isLargeDevice} />
        </nav>
    );
};

NavBar.propTypes = {
    isLargeDevice: PropTypes.bool.isRequired
};

export default NavBar;
