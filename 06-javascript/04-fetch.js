const pokemonColors = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#db5b56",
  poison: "#ea7ce8",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#9f7b63",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

const createNewElement = function (data) {
  const { name: pokemonName, types } = data;
  const { front_default: pokemonImg } = data.sprites.other["official-artwork"];
  const pokemonTypesArr = types.map((item) => item.type.name);

  const card = document.createElement("div");
  const h2 = document.createElement("h2");
  const img = document.createElement("img");
  const typesDiv = document.createElement("div");

  h2.textContent = pokemonName;
  img.src = pokemonImg;
  img.alt = pokemonName;
  img.width = "240";
  img.height = "240";

  card.setAttribute("class", "pokemonCard");
  card.append(h2, img);

  pokemonTypesArr.map((item) => {
    const span = document.createElement("span");
    span.textContent = item;
    span.style.backgroundColor = pokemonColors[item];
    span.setAttribute("class", "pokemonType");
    typesDiv.append(span);
  });

  card.append(typesDiv);
  return card;
};

const fetchData = async function () {
  const url = "https://pokeapi.co/api/v2/pokemon/bulbasaur";
  const pokeList = document.querySelector(".poke-list");

  try {
    const response = await fetch(url);
    const bodyData = await response.json();

    console.log(bodyData);
    const elem = createNewElement(bodyData);
    pokeList.append(elem);
  } catch (error) {
    console.error("Error fetching data from the PokeAPI", error);
    const errorElement = document.createElement("p");
    errorElement.textContent = "Error fetching data from the PokeAPI";
    errorElement.setAttribute("class", "errorMessage");
    pokeList.append(errorElement);
  } finally {
    console.log("Executes either way");
    const loading = document.querySelector(".loading-container");
    loading.setAttribute("class", "display-none");
  }
};

const fetchDataAll = async function () {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=25&offset=0";
  const pokeList = document.querySelector(".poke-list");

  try {
    const response = await fetch(url);
    const data = await response.json();

    const pokemonList = data.results;
    console.log(data.results);

    const promises = pokemonList.map((pokemon) =>
      fetch(pokemon.url)
        .then((res) => res.json())
        .catch((error) => console.error("An error occurred")),
    );

    const pokemonData = await Promise.all(promises);
    console.log(pokemonData);

    pokemonData.forEach((pokemon) => {
      const elem = createNewElement(pokemon);
      pokeList.append(elem);
    });
  } catch (error) {
    console.error("Error fetching data from the PokeAPI", error);
    const errorElement = document.createElement("p");
    errorElement.textContent = "Error fetching data from the PokeAPI";
    errorElement.setAttribute("class", "errorMessage");
    pokeList.append(errorElement);
  } finally {
    console.log("Executes either way");
    const loading = document.querySelector(".loading-container");
    loading.setAttribute("class", "display-none");
  }
};

fetchDataAll();

const queryPokemon = function () {
  const input = document.getElementById("search-bar");

  // Create an h2 element to alert the user if no pokemon with the inputted name exists
  // Append it to the DOM, but set its class to display-none so it isn't visible
  const notFoundText = document.createElement("h2");
  notFoundText.textContent = "Looking for Pokemon with a specific name...";
  notFoundText.setAttribute("class", "display-none");
  document.body.append(notFoundText);

  input.addEventListener("input", (name) => {
    // Get the value of the user input
    const value = name.target.value.toLowerCase();
    // Get all pokemon cards on the webpage
    const pokemons = document.querySelectorAll(".pokemonCard");

    // Assume that there is no Pokemon with the name the user inputted
    let found = false;

    // Iterate through each Pokemon card
    pokemons.forEach((element) => {
      // Compare the heading text content to the user input
      const pokemonFound = element
        .querySelector("h2")
        .textContent.includes(value);
      // If the user inputted a substring of one of the existing Pokemon names, it will not add the display-none class.
      // Otherwise, the Pokemon cards will get the class attribute display-none, ultimately hiding the card.
      element.classList.toggle("display-none", !pokemonFound);

      if (pokemonFound === true) {
        found = true;
      }
    });

    // If there was no Pokemons found with the user inputted name, display the header by giving it the class attribute display-error.
    // Otherwise, don't display the heading and give it the class attribute display-none to hide it.
    if (found === false) {
      notFoundText.textContent = `There was no Pokemon found with the name ${value}`;
      notFoundText.classList.remove("display-none");
      notFoundText.classList.add("display-error");
    } else {
      notFoundText.classList.remove("display-error");
      notFoundText.classList.add("display-none");
    }
  });
};

queryPokemon();
