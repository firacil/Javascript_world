// we will have 'undefined' as a result, if we try to see unintialized var

let character = 'Hello';
console.log(character);
character = "World";
let secondCharacter;
console.log(secondCharacter);
