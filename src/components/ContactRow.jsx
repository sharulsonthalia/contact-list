import React from "react"
import ContactList from "./ContactList"

const ContactRow = ({contact}) => {

    return (
        <tr>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
        </tr>
    )
}

export default ContactRow