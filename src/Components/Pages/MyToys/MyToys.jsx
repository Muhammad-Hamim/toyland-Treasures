import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/toys?email=${user?.email}`;
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [url]);
  console.log(toys);
  return (
    <div>
      
    </div>
  );
};

export default MyToys;