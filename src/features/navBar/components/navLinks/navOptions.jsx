import PropTypes from "prop-types";

const NavOptions = ({ data }) => {
    return (
        <>
            {data.map((eachLink) => (
                <li key={eachLink.index}>
                    <a href="#">{eachLink.title}</a>
                </li>
            ))}
        </>
    );
};

NavOptions.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            index: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired
        })
    ).isRequired
};

export default NavOptions;
