import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Avatar Character List Home Page!</h1>
      <Link to="/characters">Go to Characters List</Link>
    </div>
  );
};

export default HomePage;
