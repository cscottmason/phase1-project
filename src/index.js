const characterURL = "https://rickandmortyapi.com/api/character/?page=1"



function fetchCharacters () {
    return fetch (characterURL)
    .then(res => res.json())
    /*.then(data => {
        characterResults = data.results
        console.log(characterResults)
        for (let i = 0; i < characterResults.length; i++) {
            
            let character = characterResults[i]
            let newCharacters = document.createElement('p')
            newCharacters.append(character)
            return newCharacters
           // document.querySelector('#character-containter').appendChild(character)
        }
    })*/
}


  






//console.log(data.results)
    //.then( data => {
        //})
        // res.forEach(character => {
            //console.log(character.name + character.status + character.location.name)
            // });
            // })
            //})
            //}
        
        
    
    

    
    
        


    
  

    //.then(character => 
    




function createCharacterOne(cast) { 
    const castDiv = document.createElement('div')
    const characterName = document.createElement('h2')
    const characterStatus = document.createElement('h3')
    const characterLoc = document.createElement('p')
    const characterImage = document.createElement('img')
    const characterContainer = document.querySelector('#character1-container')//document.createElement('div')
    
    characterName.id = 'character-info'
    
    characterImage.src = 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
   characterName.textContent = cast.results[0].name
   characterStatus.textContent = cast.results[0].status
   characterLoc.textContent = cast.results[0].location.name
    
   
   castDiv.append(characterName, characterImage, characterStatus, characterLoc);
    characterContainer.appendChild(castDiv)

    
    return characterContainer
}


function createCharacterTwo(cast) {
    const castTwo = document.createElement('div')
    const castTwoName = document.createElement('h2')
    const castTwoStatus  = document.createElement('h3')
    const castTwoLoc = document.createElement('p')
    const castTwoImage = document.createElement('img')
    const castTwoContainer = document.querySelector('#character2-container')
    const likeButton2 = document.createElement('button')

    likeButton2.id = 'button-2'


    castTwoImage.src = 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
    castTwoName.textContent = cast.results[1].name
    castTwoStatus.textContent = cast.results[1].status
    castTwoLoc.textContent = cast.results[1].location.name
    likeButton2.textContent = 'Like!'

    castTwo.append(castTwoName, castTwoImage, castTwoStatus, castTwoLoc, likeButton2);
    castTwoContainer.appendChild(castTwo)

    return castTwoContainer



}

function createCharacterThree(cast) {
    const castThree= document.createElement('div')
    const castThreeName = document.createElement('h2')
    const castThreeStatus  = document.createElement('h3')
    const castThreeLoc = document.createElement('p')
    const castThreeImage = document.createElement('img')
    const castThreeContainer = document.querySelector('#character3-container')
    const likeButton3= document.createElement('button')


    likeButton3.id = 'button-3'

    castThreeImage.src = 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
    castThreeName.textContent = cast.results[3].name
    castThreeStatus.textContent = cast.results[3].status
    castThreeLoc.textContent = cast.results[3].location.name
    likeButton3.textContent = ' Like!'

    castThree.append(castThreeName, castThreeImage, castThreeStatus, castThreeLoc, likeButton3)
    castThreeContainer.appendChild(castThree)

    return castThreeContainer
}











function characterAppend(characterList) {
    //const characterCast= document.getElementById('#character-container')
    //characterCast.append(characterList)
    //const characterInfo = document.querySelector('li')
    //characterInfo.append(characterList)
}


    


fetchCharacters().then(character => {
    const characterOne = createCharacterOne(character)
    const characterTwo = createCharacterTwo(character)
    const characterThree = createCharacterThree(character)
    //console.log(characterList)
    characterAppend(characterOne, characterTwo)
    console.log(characterOne)
})

const likeButton = document.querySelector('#button');

likeButton.addEventListener('click', (e) => {
    e.preventDefault()
    alert('You liked this character!')
})

const characterTwoButton = document.getElementsByClassName('button-2');



document.addEventListener('click',function(e){
    if(e.target && e.target.id== 'button-2'){
          alert('You liked this character!')
     }
 });


document.addEventListener('click',function(e){
    if(e.target && e.target.id== 'button-3'){
          //do something
          alert('You liked this character!')
     }
 });
