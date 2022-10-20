import PropTypes from "prop-types";

const LinkWithIcon = ({ className, title, onClick }) => {
    return (
        <li>
            <a className={className} {...(onClick ? { onClick: onClick } : {})}>
                <span>{title}</span>
            </a>
        </li>
    );
};

LinkWithIcon.propTypes = {
    className: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

export default LinkWithIcon;
