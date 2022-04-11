import React, { useReducer, createContext } from "react";

export const ContactContext = createContext();

const initialState = {
    contacts: [
        {
            id: "098",
            name: "Diane",
            email: "diane@gmail.com"
        },
        {
            id: "099",
            name: "Theresa",
            email: "theresa@gmail.com"
        },
        {
            id: "100",
            name: "Toby",
            email: "toby@gmail.com"
        }
    ],
    loading: false,
    error: null
};

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            return {
                contacts: [...state.contacts, action.payload]
            };
        case "DEL_CONTACT":
            return {
                contacts: state.contacts.filter (
                    contact => contact.id !== action.payload
                )
            };
        case "START":
            return {
                loading: true
            };
        case "COMPLETE":
            return {
                loading: false
            };
        default:
            throw new Error();
    }
};

export const ContactContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ContactContext.Provider value = {[state, dispatch]}>
            {props.children}
        </ContactContext.Provider>
    )
};