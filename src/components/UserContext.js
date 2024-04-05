// UserContext.js
import React, { createContext, useState, useEffect } from 'react';

 const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

 const [totalUsers, setTotalUsers] = useState("0");
 const [activeUsers, setActiveUsers] = useState(0);
 const [inactiveUsers, setInactiveUsers] = useState(0);


  const fetchUsers = async () => {

    setLoading(true); // Set loading state to true

    try {
      // Simulate a 3-second delay
    setTimeout(async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);

      // Calculate total number of users
      setTotalUsers(data.length); 
      // Calculate number of active users (assuming active if email contains 'april.biz')
      const activeUsersCount = data.filter(user => user.email.includes('april.biz')).length;
      setActiveUsers(activeUsersCount);
      //console.log(activeUsersCount);
      // Calculate number of inactive users
      setInactiveUsers(data.length - activeUsersCount);
      
      setLoading(false); // Set loading state to false after data fetching
    }, 1000);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <UserContext.Provider value={{ users, loading, error, fetchUsers,totalUsers, activeUsers, inactiveUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
