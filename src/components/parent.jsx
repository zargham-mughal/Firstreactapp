import React, { useState } from 'react';
import Middle from './middle';
import './parent.css';

const Parent = () => {
    const [userList, setUserList] = useState([]);

    const propfromparent = (data) => {
        setUserList([...userList, data]);
    }

    return (
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((user, index) => (
                        <tr key={index}>
                            <td>{user.index}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Middle sendDown={propfromparent} />
        </div>
    )
};
export default Parent;