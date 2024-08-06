import React from 'react';
import { useMatch } from 'react-router-dom';

const Repository: React.FC = () => {

    const match = useMatch('/repositories/*');

    const repositoryParam = match?.params['*'];



  return (
    <div>
      <h1>Repository:{repositoryParam}</h1>
    </div>
  );
}

export default Repository;
