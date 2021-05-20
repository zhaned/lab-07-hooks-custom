import React from 'react';
import Character from './Character';
import { useCharacters } from '../../hooks/theCharacters.js';

const CharacterList = () => {
  const characters = useCharacters();
  return (
    <ul aria-label="characters">
      {characters.map(({ name, photoUrl }) => (
        <li key={`${name}`}>
          <Character name={name} image={photoUrl} />
        </li>
      ))}
    </ul>
  );
};

export default CharacterList;
