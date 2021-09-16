import React from 'react';

const Delete = (props) => {
    return (
        <>
            <button className="btn btn-outline-danger">{props.deleteButtonLabel}</button>
        </>
    );
};

export default Delete;