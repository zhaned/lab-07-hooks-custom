export const fetchCharacters = async () => {
  const res = await fetch(
    'https://last-airbender-api.herokuapp.com/api/v1/characters'
  );
  const json = res.json();

  return json;
};
