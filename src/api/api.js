const API = 'https://api.pexels.com/v1/search?query=';
const KEY = 'FUF46zmaymVZvGw1wx0nala6QHuqbE1w0kI9oWyzHnobGgsDvb6qlK4J';
export const fetchPhotos = async query => {
  const result = await fetch(`${API}${query}&size=small`, {
    headers: {
      Authorization: KEY,
    },
  });
  const { photos } = await result.json();
  return photos;
};
