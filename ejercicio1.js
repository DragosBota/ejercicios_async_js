//Función de llamada asicrona
const getCharacterInfo  = async () => {
  //Hacemos la llamada con el fetch
  const res = await fetch('https://thronesapi.com/api/v2/Characters');
  //Pasamos los datos crudos a JSON
  const dataJSON = await res.json();
  //Guardamos los datos en una función para poder utilizarlos fuera
  printData(dataJSON);
};

const printData = (characters) => {
  const selector = document.querySelector("#character-list");

  characters.forEach(character => {
    const option = document.createElement("option");
    option.innerText = character.fullName;
    option.value = character.id;
    option.id = `char-${character.id}`; 
    selector.appendChild(option);
  });

  selector.addEventListener("change", () => {
    const selectedOption = document.querySelector(`#char-${selector.value}`);
    const fullName = characters.find(char => char.id == selectedOption.value).fullName;
    const imageUrl = characters.find(char => char.id == selectedOption.value).imageUrl;
    const title = characters.find(char => char.id == selectedOption.value).title;

    document.querySelector("main").innerHTML = `
      <h2>${fullName}</h2>
      <h3>${title}</h3>
      <img src="${imageUrl}" alt="${fullName}">
    `;
  });
};


getCharacterInfo();
