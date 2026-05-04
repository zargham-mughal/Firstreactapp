import { useParams } from 'react-router-dom';
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
function Usersdetail() {
    const { id } = useParams()
    const [user, setUser] = useState(null)
    const fetchuserid = async () => {
        if (id) {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
                setUser(response.data)
            } catch (error) {
                console.error('Error fetching user details:', error)
            }
        }
    }
    useEffect(() => {
        fetchuserid()
    }, [])

    return (
        <>
            <div className="user-details">
                <h1>User Details Page</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Street</th>
                            <th>Suite</th>
                            <th>City</th>
                            <th>Zipcode</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user && (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.address?.street}</td>
                                <td>{user?.address?.suite}</td>
                                <td>{user?.address?.city}</td>
                                <td>{user?.address?.zipcode}</td>
                                <td><Link to="/users">Back to Users</Link></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Usersdetail