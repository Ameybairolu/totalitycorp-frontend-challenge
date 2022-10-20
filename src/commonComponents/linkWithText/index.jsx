import PropTypes from "prop-types";

const LinkWithText = ({ data }) => {
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

LinkWithText.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            index: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired
        })
    ).isRequired
};

export default LinkWithText;
