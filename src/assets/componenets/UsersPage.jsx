
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function UsersPage() {
    const [users, setUsers] = useState([])
    const fetchUsers = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
            console.log('Users:', response.data)
        } catch (error) {
            console.error('Error fetching users:', error)
        }
    }
    useEffect(() => {
        fetchUsers()
    }, [])
    return (
        <div>
            <h1>Users List</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead >
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><Link to={`/users/${user.id}`}>View Details</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}
export default UsersPage