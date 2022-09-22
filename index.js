const cats = ["Milo", "Otis", "Garfield"]
console.log(cats)
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
cats.push("Ralp")
console.log(cats)  

function destructivelyAppendCat(name) {
    return cats.push(name)
}

function destructivelyPrependCat(name) {
    return cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    return cats.pop("Garfield")
}

function destructivelyRemoveFirstCat() {
    return cats.shift("Milo")
}

function appendCat(name) {
    return appendCat = [...cats, "Broom"]
}
function prependCat(name) {
    return prependCat = ["Arnold", ...cats]
}
function removeLastCat() {
    return cats.slice(0, cats.length - 1);
}
function removeFirstCat() {
    return cats.slice(1)
}