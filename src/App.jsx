import axios from 'axios';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState(null);
  console.log('data', data);

  useEffect(() => {
    // Replace the URL with the actual API endpoint
    // const apiUrl = 'http://13.232.171.97:4000/api/blogs/getblogs';
    const apiUrl = 'http://54.91.48.93:3001';

    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return <div>App</div>;
};

export default App;
