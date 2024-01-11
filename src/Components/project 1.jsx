import React, { useEffect, useState } from "react";

function UserDetailsPage({ user }) {
  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>ID: {user.id}</p>
      <p>UserName: {user.username}</p>
      <p>EMail: {user.email}</p>
      <p>:Phone {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>Address: {user.address.length}</p>
    </div>
  );
}

function App() {
  const [data, setData] = useState([]);
  const [Name, setName] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch( "https://jsonplaceholder.typicode.com/users"
        );
        const json = await response.json();
        setData(json);
        console.log(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const fetchNextName = () => {
    const user = data[currentIndex];
    if (user) {
      setName(user.name);
      setCurrentIndex((prevIndex) => prevIndex + 1);
      console.log(user.name);
    }
  };
  const showUserDetails = () => {
    setShowDetails(true);
  };
  return (
    <>
      <button onClick={fetchNextName}>NAME</button>
      {Name && <p> Name: {Name}</p>}
      <button onClick={showUserDetails}>DETAILS</button>
      {showDetails && <UserDetailsPage user={data[currentIndex - 1]} />}
    </>
  );
}
export default App;
