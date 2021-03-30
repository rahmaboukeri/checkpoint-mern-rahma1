import axios from "axios";

import { 
    GET_CONTACTS_LOAD,
    GET_CONTACTS_SUCCESS,
    GET_CONTACTS_FAIL,
    GET_ONE_CONTACT,
    TOGGLE_TRUE,
    TOGGLE_FALSE
} from "../Constants/ActionType";

//get all contacts
export const getContacts = () => async (dispatch) => {
        dispatch({type : GET_CONTACTS_LOAD})

    try {
        const res = await axios.get('/api/contacts')
        dispatch({ type : GET_CONTACTS_SUCCESS,payload : res.data.listContact })
        
    } catch (error) {
        dispatch({type : GET_CONTACTS_FAIL,payload: error})
        console.log(error)
            
    }
}


//DELET contact
export const deleteContact =(id)=> async(dispatch)=>
{
    dispatch({type: GET_CONTACTS_LOAD})
    try {
        await axios.delete(`/api/contacts/${id}`)
        // dispatch({type: GET_CONTACTS_SUCCESS })
        dispatch(getContacts())
    } catch (error) {
        console.log(error)
    }
}

//ADD contact
export const addContact =(newContact)=> async(dispatch)=>
{
    dispatch({type: GET_CONTACTS_LOAD})
    try {
        await axios.post(`/api/contacts/`,newContact)
        dispatch(getContacts())
    } catch (error) {
        console.log(error)
    }
}


//update contact
export const updateContact =(id,newContact)=> async(dispatch)=>
{
    dispatch({type: GET_CONTACTS_LOAD})
    try {
        await axios.put(`/api/contacts/${id}`,newContact)
        dispatch(getContacts())
    } catch (error) {
        console.log(error)
    }
}

//getOne contact
export const getOneContact =(id)=> async(dispatch)=>
{
    dispatch({type: GET_CONTACTS_LOAD})
    try {
        const res = await axios.get(`/api/contacts/${id}`)
        dispatch({type : GET_ONE_CONTACT,payload : res.data.contactToFind})
    } catch (error) {
        console.log(error)
    }
}

// toggle false
export const ToggleFalse =() =>
{
    return {type:TOGGLE_FALSE}
      
}

//toggle true
export const ToggleTrue =() =>
{
    return {type:TOGGLE_TRUE } 
}