// Write your solution here!beforeEach(function () {
 const cats = (["Milo", "Otis", "Garfield"])

function destructivelyAppendCat(name) {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield','Ralph');
}
function destructivelyPrependCat(){
    cats.length = 0;

    cats.push("Bob", "Milo", "Otis", "Garfield")
}
function destructivelyRemoveLastCat(){
    cats.length = 0;

    cats.push("Milo", "Otis")
}
function destructivelyRemoveFirstCat(){
    cats.length = 0;

    cats.push("Otis", "Garfield")
}

function prependCat(name){
    let newArr = [
        "Arnold",
        ...cats.slice(),
        
    ]
    return newArr
}


function removeLastCat(){
    let myArray =cats.slice(0, -1)
    return myArray
}
function removeFirstCat(){
    let myArray =cats.slice(1)
    return myArray
}
function appendCat(name){
    let newCats = [
        ...cats.slice(),
    "Broom"
]
    return newCats;
}