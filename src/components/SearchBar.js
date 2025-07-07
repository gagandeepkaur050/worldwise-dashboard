import React, { useState } from 'react';

function SearchBar() {
  const [count, setCount] = useState(22);
// const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric') // sample API
//       .then((res) => res.json())
//       .then((data) => {
//         setUsers(data);
//         setLoading(false);
//       });
//   }, []);
  return (
    <div>
      <p>Count is: {count}</p>
      <button onClick={ () => setCount(count + 1)}>Increment</button>
      {/* {loading ? <p>loading</p> : (
        <ul>
             {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )} */}
      <ul>
        
      </ul>
    </div>
  );
}


export default SearchBar;