import React, {useState, createContext} from "react";

export const VisitorContext = createContext();

export const VisitorProvider = (props) => {
    const [fullName, setFullName] = useState("");
    const [address, setAddress] = useState("");
    const [contact, setContact] = useState("");

    return(
        <VisitorContext.Provider value={{ fullName, setFullName, address, setAddress, contact, setContact }}>
            {props.children}
        </VisitorContext.Provider>
    );
}