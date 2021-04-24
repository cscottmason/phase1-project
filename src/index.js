const characterURL = "https://rickandmortyapi.com/api/character/?page=1"

function fetchCharacters () {
    return fetch (characterURL)
    .then(res => res.json())
    //.then(character => 
    
}


function createCharacterList(cast) { //TODO- change character 
    const castDiv = document.createElement('div')
    const characterName = document.createElement('h2')
    const characterStatus = document.createElement('h3')
    const characterLoc = document.createElement('p')
    const characterImage = document.createElement('img')
    characterImage.src = 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
    const characterContainer = document.querySelector('#character-container')//document.createElement('div')

    characterName.id = 'character-info'

   characterName.textContent = cast.results[0].name
   characterStatus.textContent = cast.results[0].status
   characterLoc.textContent = cast.results[0].location.name
    
   
   castDiv.append(characterName, characterImage, characterStatus, characterLoc);
    characterContainer.appendChild(castDiv)

    
    return characterContainer
}





function characterAppend(characterList) {
    //const characterCast= document.getElementById('#character-container')
    //characterCast.append(characterList)
    //const characterInfo = document.querySelector('li')
    //characterInfo.append(characterList)
}

fetchCharacters().then(character => {
    const characterList = createCharacterList(character)
    //console.log(characterList)
    characterAppend(characterList)
    console.log(characterList)
})