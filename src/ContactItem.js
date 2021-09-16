import React from 'react';
import Update from "./Update";

const ContactItem = (props) => {
    return (
        <div>
            <br/>
            {props.contact.name},
            Phone numbers: {props.contact.phoneNumber1},
            {props.contact.phoneNumber2},
            Address: {props.contact.address}
            <div>
                <Update updateButtonLabel={props.updateButtonLabel}
                        deleteButtonLabel={props.deleteButtonLabel}
                />
            </div>
        </div>
    );
};

export default ContactItem;