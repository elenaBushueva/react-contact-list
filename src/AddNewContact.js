import React from 'react';

const AddNewContact = (props) => {
    return (
        <div>
            <div className="input-group input-group-sm mb-3">
                <input type="text" placeholder="Phone Number # 1" className="form-control"
                       aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-sm"/>

                <input type="text" placeholder="Phone Number # 2" className="form-control"
                       aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-sm"/>
            </div>
            < div className="input-group input-group-sm mb-3">
                <input type="text" placeholder="Name" className="form-control" aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-sm"/>
                <input type="text" placeholder="Address" className="form-control" aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-sm"/>
            </div>


            <button className="btn btn-outline-success">{props.addNewButtonLabel}</button>
        </div>
    );
};

export default AddNewContact;