import React from 'react';

const Search = (props) => {
    return (
        <div className="input-group input-group-sm mb-3">
            <input type="text" className="form-control" aria-label="Sizing example input"
                   aria-describedby="inputGroup-sizing-sm"/>

            <button className="btn btn-outline-success">{props.searchButtonLabel}</button>
        </div>
    );
};

export default Search;