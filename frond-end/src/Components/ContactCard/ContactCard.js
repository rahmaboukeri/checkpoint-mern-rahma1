import React from 'react'
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";

import  deleteBtn  from "../../assets/delete.png";
import avatar  from "../../assets/avatar.png";
import editBtn from "../../assets/edit.png";
import { deleteContact, getOneContact, ToggleTrue } from '../../JS/Action/ActionsContacts';
import { Link } from "react-router-dom";


import "./ContactCard.css"


const ContactCard = ({contact}) => {
    const dispatch = useDispatch()
    return (
        <div className="contact-card">
            <img className="avatar" src={ avatar } alt="avatar" />
            <Card className="sousCard">
                    
                <Card.Body style={{width:"175px",justifyContent:"center"}}>
                    <Card.Title>{contact.name}</Card.Title>
                    <Card.Text>
                        <span>{contact.mail}</span><br />
                        <span>{contact.phone}</span>
                    </Card.Text>
                       <div>
                             
                        <img src={deleteBtn} className="btn-icon"
                        alt="edit-icon" 
                        onClick={ ()=>dispatch(deleteContact(contact._id)) }
                         /> 

                        <Link to="/editcontact" >
                    <img src={editBtn} className="btn-icon"
                        alt="edit-icon" onClick={ ()=>{dispatch(ToggleTrue()); dispatch(getOneContact(contact._id) ) } } />   
                        </Link> 
                        </div>              
                </Card.Body>
            </Card>
        </div>
    )
}

export default ContactCard
