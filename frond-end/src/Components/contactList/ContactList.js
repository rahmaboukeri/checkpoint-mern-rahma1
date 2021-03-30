import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../../JS/Action/ActionsContacts";
import  ContactCard  from "../ContactCard/ContactCard";

import { Spinner } from "react-bootstrap";

import "./contactList.css"

const ContactList = () => {

    const dispatch = useDispatch()
    const contacts = useSelector(state => state.contactReducer.contacts)
    const isLoading = useSelector(state => state.contactReducer.isLoading)

    useEffect (() =>{
            dispatch(getContacts())
    }, [dispatch])
    
    return (
        <div className="contacts-content"> 
           { isLoading ?   <Spinner animation="border" style={{width:"300px",height:"300px"}} variant="danger" />

            :
             <div className="contacts-content">
                 {contacts.map(contact => 
                    <ContactCard contact={contact} key={contact._id} />
                    ) }
             </div>
            }                         
        </div>
    )
}

export default ContactList
