import React from 'react';
import ContactItem from "./ContactItem";
import Sort from "./Sort";
import Search from "./Search";
import AddNewContact from "./AddNewContact";
import "bootstrap/dist/css/bootstrap.css";

function App() {
    const contacts = [
        {
            name: 'Angel',
            phoneNumber1: '777777777',
            phoneNumber2: '333333333',
            address: 'Always with you',
        },
        {
            name: 'Lena',
            phoneNumber1: '987654321',
            phoneNumber2: '789456123',
            address: 'Las Vegas',
        },
        {
            name: 'Galia',
            phoneNumber1: '123456789',
            phoneNumber2: '321654987',
            address: 'Sochi',
        },
    ]

    const searchButtonLabel = 'Search';
    const updateButtonLabel = 'Update Contact';
    const deleteButtonLabel = 'Delete';
    const addNewButtonLabel = 'Delete';

    return (
        <div>
            <h2>Contact List</h2>
            <Search searchButtonLabel={searchButtonLabel}/>
            <Sort/>
            {contacts.map(el =>
                <ContactItem
                    contact={el}
                    updateButtonLabel={updateButtonLabel}
                    deleteButtonLabel={deleteButtonLabel}
                />)}
            <hr/>
            <AddNewContact
                addNewButtonLabel={addNewButtonLabel}
            />
        </div>
    );
}

export default App;
