

function generarNumeroAleatorio() {
  const numeroAleatorio = Math.floor(Math.random() * 152);
  return numeroAleatorio;
}

const showRandomPokemon = async () => {
  // Genera un nuevo número aleatorio cada vez que se llama a la función
  const numero = generarNumeroAleatorio();
  //Llamamos a la API
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`);
  const dataJSON = await res.json();
  printData(dataJSON);
};

//Pintamos el DOM usando los datos del resutlado en JSON
const printData = (pokemon) => {
  const name = pokemon.name;
  document.querySelector("#pokeName").innerHTML = `This is ${name}`;

  const frontUrl = pokemon.sprites.other.dream_world.front_default;
  document.querySelector("#random-image").src = frontUrl;
};

//Añadimos un botón para que sea más intuitivo generar los nuevos pokemons
document.querySelector("#button").addEventListener("click", showRandomPokemon);

showRandomPokemon();