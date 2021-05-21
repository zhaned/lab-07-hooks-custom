import React from 'react';
import Character from './Character';
import { useCharacters } from '../../hooks/theCharacters.js';
import Loading from '../Loading';

const CharacterList = () => {
  const list = useCharacters();

  if(list.loading) return <Loading />;
  return (
    <ul aria-label="characters">
      {list.characters.map(({ name, photoUrl }) => (
        <li key={`${name}`}>
          <Character name={name} image={photoUrl} />
        </li>
      ))}
    </ul>
  );
};

export default CharacterList;
