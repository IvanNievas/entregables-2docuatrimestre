// Lista de Pokémon para mostrar
const pokemonList = ['arcanine', 'pidgeot', 'blastoise', 'garchomp', 'blaziken', 'meganium', 'hitmontop', 'suicune', 'lugia', 'torterra', 'empoleon', 'staraptor', 'luxray', 'lucario', 'zoroark', 'chesnaught'];

// Lo defino como funcion para poder pasarla algunos pokemones de los que tengo en la lista
function mostrarPokemon(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            const contenedor = document.getElementById('contenedor'); // Referencia al contenedor que tengo en el HTML
            const { name, stats, sprites } = data; // De todos los datos que me traje, me quedo con el nombre, peso, altura, una imagen

            // Crea un string con las estadísticas del Pokémon
            const statsHtml = stats.map(stat => `
                <p>${stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}: ${stat.base_stat}</p>
            `).join('');

            // Crea la tarjeta para mostrar en el HTML
            const tarjeta = `
                <div class="tarjeta">
                    <h3>Nombre: ${name}</h3>
                    <img src="${sprites.front_default}" alt="${name}">
                    ${statsHtml} 
                </div>
            `;

            contenedor.innerHTML += tarjeta;
        })
        .catch(err => console.log(err));
}

// Itera sobre la lista de pokemones, y se los paso a la funcion
pokemonList.forEach(pokemon => mostrarPokemon(pokemon));
