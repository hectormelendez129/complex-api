//activate button, add event listener
document.querySelector('button').addEventListener('click', getPokemon)

function getPokemon() {
    //get user input, change back to document.querySelector('input').value.toLowerCase()
    const pokemonName = document.querySelector('input').value.toLowerCase()
    // Prep elements
    let imageEl = document.getElementById('pokemonImg')
    let pokeAgeGuess = document.querySelector('h2')

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
        .then(res => res.json()) //parse response into aa json
        .then(poke => {
                //Add sprite to src
                imageEl.src = poke.sprites.front_default
            
                fetch(`https://api.agify.io/?name=${poke.name}`)
                .then(res => res.json())
                .then(age =>
                    pokeAgeGuess.innerText = `${age.name} is ${age.age} years old!`
                )
            })
        .catch(err => {
            console.log(`error ${err}`)
        })
}