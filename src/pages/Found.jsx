import React from 'react';
import { Link } from 'react-router-dom';

const Found = ({ result, to }) => {
  return (
    <Link to={to}>
      <div>{result}</div>
    </Link>
  );
};

export default Found;
