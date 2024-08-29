function pokemonList() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
    .then(response => response.json())
    .then(data => {
        data.results.forEach(pokemon => {
            // Imprime los nombres de Pokémon con la primera letra en mayúscula
            console.log(nombreMayus(pokemon.name));
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Función para capitalizar la primera letra
function nombreMayus(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Función para obtener detalles de un Pokémon específico
function detallesPokemon(pokemonName) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(response => response.json())
    .then(pokemon => {
        console.log(`Nombre: ${nombreMayus(pokemon.name)}`);
        
        const types = pokemon.types.map(typeInfo => nombreMayus(typeInfo.type.name)).join(', ');
        console.log(`Tipo: ${types}`);
        
        const abilities = pokemon.abilities.map(abilityInfo => nombreMayus(abilityInfo.ability.name)).join(', ');
        console.log(`Habilidades: ${abilities}`);
        
        const stats = pokemon.stats.map(statInfo => `${nombreMayus(statInfo.stat.name)}: ${statInfo.base_stat}`).join(', ');
        console.log(`Stats: ${stats}`);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


detallesPokemon('ditto');  //Cambiar por el Pokémon deseado
