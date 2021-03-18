
   let cats =
    ["Milo", "Otis", "Garfield"]

    beforeEach(function () {
        cats.length = 0;
  
        cats.push('Milo', 'Otis', 'Garfield');
      });
   
   
   function destructivelyAppendCat(name) {
       cats.push(name)
   }
        destructivelyAppendCat('Ralph');

        destructivelyAppendCat('Ralph');

function destructivelyPrependCat(name){

    cats.unshift(name);

}

    destructivelyPrependCat("Bob");

    

function destructivelyRemoveLastCat() {

    cats.pop()

}

    destructivelyRemoveLastCat();

    

function destructivelyRemoveFirstCat() {

    cats.shift()

}

   

function appendCat(name) {

  return [...cats, name];

}

    appendCat("Broom");

function prependCat(name) {

    return [name, ...cats];

}

    prependCat("Arnold");

function removeLastCat() {

    return cats.slice(0,2)

}

    removeLastCat();

function removeFirstCat() {

    return cats.slice(1);

}

removeFirstCat();

   
