import React, { useState } from 'react';
const Child = ({ sendDown }) => {
    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [indexValue, setIndexValue] = useState(1);
    const eventHandler = () => {

        if (nameValue === "") {
            alert("Please enter a name");
        } else if (emailValue === "") {
            alert("Please enter an email    address");
        } else {

            sendDown({ index: indexValue, name: nameValue, email: emailValue });
            setNameValue("");
            setEmailValue("");
            setIndexValue(indexValue + 1);
        }
    }
    return (
        <div className="form-group">
            <input
                type="text"
                placeholder="Name"
                value={nameValue}
                onChange={(e) => setNameValue(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email Address"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
            />
            <button onClick={eventHandler}>Add User</button>
        </div>
    )
};
export default Child;
