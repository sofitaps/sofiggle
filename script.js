// array definition

const categories = [
	['Pais', 'Provincia','Lugar', 'Calle','Mar', 'Rio', 'Accidente Geografico'],
	['Famosx Argentino', 'Presidente', 'Politicx', 'Cantante', 'Actor/Actriz','Novix famosx'],
	['Comida','Sabor de Helado','Fruta o Verdura', 'Postre','Sanguche', 'Bar'],
	['Olor','Sabor','Sentimiento','Miedo','Fetiche','Demostracion de amor'],
	['Serie','Pelicula','Libro','Cancion','TV','Personaje'],
	['Deporte','Hobby','Talento','Profesion','Equipo','Distraccion'],
];

const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

// Function to pick a random element from an array (Categories)

function displayRandomCategories() {
	const ccontainer = document.getElementById('categories_container');
	ccontainer.innerHTML = ''; 

	categories.forEach(array => {
		const randomIndex = Math.floor(Math.random() * array.length);
		const element = array[randomIndex];
		const item = document.createElement('div');
		item.classList.add('item');
		item.textContent = element;
		ccontainer.appendChild(item);
	});
}

// Function to display 10 different random letters

function displayRandomLetters() {
    const lcontainer = document.getElementById('letters_container');
    lcontainer.innerHTML = ''; // Clear previous content

    const usedIndexes = []; // Array to keep track of used indexes
    let count = 0;

    while (count < 9) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        if (!usedIndexes.includes(randomIndex)) { // Check if the index is not used
            const element = letters[randomIndex];
            const item = document.createElement('div');
            item.classList.add('item');
            item.textContent = element;
            lcontainer.appendChild(item);
            usedIndexes.push(randomIndex); // Add used index to the array
            count++;
        }
    }
}

// Function to refresh both grids
function refreshGrids() {
    displayRandomLetters();
    displayRandomCategories();
}

// Call the refresh function when the page loads initially
refreshGrids();

// Add event listener to the refresh button
const refreshButton = document.getElementById('refreshButton');
refreshButton.addEventListener('click', refreshGrids);

//
displayRandomLetters();

displayRandomCategories();

//console.log("Script loaded");

