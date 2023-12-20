
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      let {data} = await axios.get(
        'https://reqres.in/api/users'
      )
      setUsers(data);
      setLoading(false);
    }
    fetchData();
  }, [])

  return (
    <div>
        <div className="header">
          <h1>Blue Whales</h1>
          <button className="btn">Get User List</button>
        </div>
        <table>
          <thead>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </thead>
          {
            loading ? ( <h1>No data found</h1> ) : (
              <tbody>
                {users.map((user) => (
                  <tr>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td>
                    <td>{user.avatar}</td>
                  </tr>
                ))}
              </tbody>
            )
          }
        </table>
    </div>
  )
}

export default App
