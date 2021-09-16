import React from 'react';
import Delete from "./Delete";

const Update = (props) => {
    return (
        < div className="input-group input-group-sm mb-3">
            <input type="text" className="form-control" aria-label="Sizing example input"
                   aria-describedby="inputGroup-sizing-sm"/>
            <button className="btn btn-outline-success">{props.updateButtonLabel}</button>
            <Delete deleteButtonLabel={props.deleteButtonLabel}/>
        </div>
    );
};

export default Update;