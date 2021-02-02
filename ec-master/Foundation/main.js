import {hello, starify, spacify, sun} from './stringfunctions.js'

export function start(){

    document.getElementById("test").innerHTML = 
    `
    <h1>Starify</h1>
    ${starify('Hello')}
    
    <h1>Spacify</h1>
    ${spacify('Hello')}
    
    <h1>${sun.name}</h1>
    ${sun.radiusInKm}km in radius<br/>
    ${sun.ageInYears}years old<br/>
    `
}
