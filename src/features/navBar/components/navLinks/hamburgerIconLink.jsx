import PropTypes from "prop-types";

const HamburgerIconLink = ({ isActive, onClick }) => {
    return (
        <li>
            <a onClick={onClick}>
                <div className={`hamburger ${isActive ? "active" : ""}`}>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </a>
        </li>
    );
};

HamburgerIconLink.propTypes = {
    isActive: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

export default HamburgerIconLink;
