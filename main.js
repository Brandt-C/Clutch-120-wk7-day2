console.log('Hello there JS!!!!');

//interesting things with JS
// NaN  is a number. . . 
console.log(typeof NaN);

// and not equal to itself. . . 
console.log(NaN == NaN);
console.log(NaN === NaN);

// JS Objects!

//1. simple object is like a python dictionary
//2.  Object Prototype -- these are the JS term for a class

// OOP in JS
// Traditionally not but now can be. . . 
//  With TypeScript you can really make OOP work


// Simple object

let animal = {
    name : 'Golden Eagle',
    age : 45,
    color : 'Brown'
}

// access props:

// w/ bracket notation
console.log(animal['name']);

// w/ dot notation
console.log(animal.color);

// adding k/v pairs:
animal['legs'] = 2;
console.log(animal.legs);

//re-assign
animal.legs = 4;
console.log(animal.legs);
// re-re-assign. . .  cuz eagles have 2 legs.
animal['legs'] = 2;
console.log(animal.legs);

// to delete -->  del in python delete here

delete animal.legs;
console.log(animal.legs);

// complex object
let animals = {
    eagles : {
        'Bald': {
            prey : ['fish', 'mice'],
            flight : true
        },
        'Golden' : {
            prey : ['squirrels', 'mice', 'chipmunks'],
            flight : true
        }
    },
    cats : ['house cat', 'tiger', 'lion', 'leopard'],
    dogs : 'Fido'
};
console.log(animals.eagles.Golden.prey[0]);

// looping through objects

// for in: iterates through keys in an object or in array it's indices
// for each: is each item

for (property in animals){
    console.log(property)
};

//dict.keys(), dict.values() in Python
/*
Object.keys(<object>)
Object.values(<object>)
returns an array of keys or values (properties)
*/
console.log(Object.keys(animals));
console.log(Object.values(animals));

let vals = Object.values(animals);
for (let i =0; i<vals.length;i++){
    console.log(vals[i])
};

console.log("Time to talk about Classes. . . Oh I mean object prototypes", '\n');

// Custom object prototypes
//  3 ways to do it!


//1.
function Dog(name, breed, color, tail=true){
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.tail = tail;

    this.printInfo = function(){
        console.log(`This is a ${color} ${breed} dog named ${name}.`)
    };
}

let my_dog = new Dog('Isis', 'Lab', 'Black', true);
my_dog.printInfo();

// class based object
class DogC {
    constructor(name, breed, color, tail=true){
        this.name = name;
        this.breed = breed;
        this.color = color;
        this.tail = tail;
    }
    printInfo(){
        console.log(`This is a ${this.color} ${this.breed} dog named ${this.name}.`)
    }
}

let next_dog = new DogC('Fido', 'Pitbull', 'Brindle', tail=false);
next_dog.printInfo();

class Lab extends Dog{
    constructor(name, breed, color, tail=true){
        super(name, breed, color, tail=true);
        this.loyal = 'VERY';
        this.lazy = true;
    }
    bark(){
        console.log('WOOF');
        this.loyal += " very loyal. . .";
        console.log(this.loyal)
    };
}

let a_lab = new Lab('Lassie', 'Lab', 'Golden', true);
a_lab.printInfo();
a_lab.bark();

//  function-based object with arrow funcs for methods

function ArrDog(name, breed, color, tail=true){
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.tail = tail;

    this.printInfo = () => {
        console.log(`This is a ${this.color} ${this.breed} dog named ${this.name}.`);
    }
}

let another_dog = new ArrDog('Frankenweenie', 'mutt', 'white/black', false);
another_dog.printInfo()

//Callbacks

// a function that executes another function
// the frozen pizza example: pullOutPizza() --> cookPizza() --> preheatOven()

// In JS functions are objects. SOOOOO, functions can take functions as parameters
// and/or return functions by other functions.

// Higher order function is a function getting a function passed to it

//callback function- any func passed as input to another

// some examples:  Map/ filter / sort


let first = () => {
    setTimeout(()=>(console.log(1)), 4000);
}
let second = () => {
    console.log(2);
}

first();
second();

// let attendClass = (subject, callback) => {
//     alert(`Attending ${subject} class!`);
//     callback();
// }

// let endClass = () => {
//     console.log('class is over!');
// }

// endClass(attendClass('Math', endClass));

// the problem with the callback solution:
// func1( () => {
//     func2( () => {
//         func3( () => {
//             func4( () => {

//             })
//         })
//     })
// })

// Callback hell!

// the JS solution? Promises

let isEven = (num) => {
    return new Promise((resolve, reject)=>{
        if (num % 2 == 0){
            resolve(num);
        } else {
            reject(num);
        }
    })
}

// call the func and use promise with .then() and .catch()
// .then() method represents the resolve path
//  .catch() reps the reject path
isEven(2)
.then( (result) => {
    console.log(`It's an EVEN number ${result}`);
}).catch( (result) => {
    console.log(`ODD number ${result}`)
});

isEven(253)
.then( (result) => {
    console.log(`It's an EVEN number ${result}`);
}).catch( (result) => {
    console.log(`ODD number ${result}`)
});
let p = isEven(2)
.then( (result) => {
    console.log(`It's an EVEN number ${result}`);
}).catch( (result) => {
    console.log(`ODD number ${result}`)
});
console.log(p);

// async await syntax

let increaseSlow = (base, increase) => {
    return new Promise( (resolve) => {setTimeout( () => resolve(base+increase), 2000)});
}

let giveRaise = async (salary, raise) => {
    let new_salary = await increaseSlow(salary, raise);
    console.log(`Your New Salary is ${new_salary}`);
}

giveRaise(90000, 30000);

// JS Closure

/*
A closure is a self-invoking function that can then be set to a variable
and return a func expression.
*/

let count_up = ( function () {
    let counter = 0; // A note, THIS is a private variable
    return function () {console.log(counter++)}
})()
count_up();
count_up();
count_up();
count_up();
count_up();

let addNames = ( () => {
    let names = [];
    console.log('adding names');
    return (na) => {
        names.push(na);
        console.log(names);
    }
})()

addNames('David');
addNames('Orlando');




