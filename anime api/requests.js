const getAPI = async () => {
  const response = await fetch(
    "https://api.jikan.moe/v3/anime/31964/characters_staff"
  );

  if (response.status === 200) {
    const data = await response.json();
    console.log(data);
    return data.characters;
  } else {
    throw new Error("Unable to retrieve data");
  }
};

getAPI();
