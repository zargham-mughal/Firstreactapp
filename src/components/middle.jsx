import React from "react";
import Child from "./child";

const Middle = ({ sendDown }) => {
    return (
        <>
            <Child sendDown={sendDown} />
        </>
    )
}
export default Middle;