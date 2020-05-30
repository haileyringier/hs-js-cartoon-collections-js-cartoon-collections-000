function dwarfRollCall(dwarves) {
  var newArray = []
  for (let i = 0; i < dwarves.length; i += 1) {
    var position = ((i + 1) +  `. `)
    var line = position + dwarves[i] + ' '
    newArray.push(line)
  }
  return newArray.join('')
}

function summonCaptainPlanet(planeteerCalls){
  var newArray = []    
  for (let i = 0; i < planeteerCalls.length; i++) {
    var stepOne = planeteerCalls[i].toUpperCase()
    var stepTwo = stepOne + '!'
    newArray.push(stepTwo)
  }
  return newArray
}

function longPlaneteerCalls(words) {
 for (let i = 0; i < words.length; i++){
    if (words[i].length > 4){
      return true
    } 
  }
return false
}

function findTheCheese (foods) {
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] == "cheddar" || foods[i] == "gouda" || foods[i] == "camembert") {
      return foods[i]
      }
  }
  return 'no cheese!'
}
