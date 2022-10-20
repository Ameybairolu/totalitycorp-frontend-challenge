import "./searchBar.css";

import PropTypes from "prop-types";

import LinkWithIcon from "commonComponents/linkWithIcon";

const SearchBar = ({ onClose, onInputFocus }) => {
    return (
        <>
            <form action="" className="searchBar__form">
                <LinkWithIcon className="search-icon" title="search" />
                <input
                    className="search__input"
                    type="text"
                    placeholder="Search apple.com"
                    {...(onInputFocus && { onFocus: onInputFocus })}
                />
                {!onInputFocus && (
                    <button type="button" onClick={onClose}>
                        X
                    </button>
                )}
            </form>
        </>
    );
};

SearchBar.propTypes = {
    onClose: PropTypes.func.isRequired,
    onInputFocus: PropTypes.func
};

export default SearchBar;
