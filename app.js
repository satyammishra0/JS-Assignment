const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');

let hpCharacters = [];

searchBar.addEventListener('keyup', (e) => {
    const targetvalue = e.target.value.toLowerCase();
    const filtercharacters = hpCharacters.filter((character) => {
        return (character.name.toLowerCase().includes(targetvalue) ||
            character.house.toLowerCase().includes(targetvalue));
    });
    displayCharacters((filtercharacters));
});

const loadCharacters = async() => {
    try {
        const res = await fetch('https://hp-api.herokuapp.com/api/characters');
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h2>${character.name}</h2>
                <p>House: ${character.house}</p>
                <img src="${character.image}"></img>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();