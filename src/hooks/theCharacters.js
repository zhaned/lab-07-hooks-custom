import { useEffect, useState } from 'react';
import { fetchCharacters } from '../services/avatarApi';


export const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchCharacters()
      .then((item) => setCharacters(item))
      .finally(() => setLoading(false));

  }, []);


  return { loading, characters };
};
