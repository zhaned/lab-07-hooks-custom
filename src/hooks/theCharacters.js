import { useEffect, useState } from 'react';
import { fetchCharacters } from '../services/avatarApi';

export const useCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters()
      .then((item) => setCharacters(item));

  }, []);
  
  return characters;
};
