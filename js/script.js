//My own code

let funPeople = ["abby", "jack", "brian"];
let boringPeople = new Array ("abby", "jack", "brian");

console.log(funPeople);
console.log(boringPeople);

let wild = ["teeth"];
let bland = new Array ("finger");

console.log(wild);
console.log(bland);

//code from class
let numbers = [40, 100, 1];
let points = new Array (40, 100, 1);

console.log(numbers);
console.log(points);

let good = [40];
let bad = new Array (40);

console.log(good);
console.log(bad);

let dogs = ["golden retriever", "labrador", "staffie", "bulldog", "rotweiller", "toi-pomme"]

console.log(dogs);//whole array
console.log(dogs.length);//just length
console.log(dogs[0]);//specific item
console.log(dogs[dogs.length-1]);//last item
console.log(Array.isArray(dogs));//is array?
console.log(dogs.toString());
console.log(dogs.join(", "));

dogs.pop();
console.log(dogs);

dogs.push("toi-pomme");
console.log(dogs);

let dog = dogs.pop();

console.log(dog);
console.log(dogs);

let newDogs = dogs.slice(1, 4);

console.log(newDogs);
console.log(dogs);

dogs.splice(1, 2, "jack russel", "doberman", "pitbull");

console.log(dogs);

//my own code
function decreaseBook(){
    if (document.getElementById('ticketsBook').value != 0){
        document.getElementById('ticketsBook').value = parseInt(document.getElementById('ticketsBook').value) - 1;
    } else{
        document.getElementById('ticketsBook').value = 0;
    }
}

function increaseBook(){
    document.getElementById('ticketsBook').value = parseInt(document.getElementById('ticketsBook').value) + 1;
}

function decreaseMovie(){
    if (document.getElementById('ticketsMovie').value != 0){
        document.getElementById('ticketsMovie').value = parseInt(document.getElementById('ticketsMovie').value) - 1;
    } else{
        document.getElementById('ticketsMovie').value = 0;
    }
}

function increaseMovie(){
    document.getElementById('ticketsMovie').value = parseInt(document.getElementById('ticketsMovie').value) + 1;
}

function decreaseComic(){
    if (document.getElementById('ticketsComic').value != 0){
        document.getElementById('ticketsComic').value = parseInt(document.getElementById('ticketsComic').value) - 1;
    } else{
        document.getElementById('ticketsComic').value = 0;
    }
}

function increaseComic(){
    document.getElementById('ticketsComic').value = parseInt(document.getElementById('ticketsComic').value) + 1;
}


let totalBookCost = 0;
let totalMovieCost = 0;
let totalComicCost = 0;
let finalCost = 0;

function total(){
    totalBookCost = parseInt(document.getElementById('ticketsBook').value) * 50;
    totalMovieCost = parseInt(document.getElementById('ticketsMovie').value) * 70;
    totalComicCost = parseInt(document.getElementById('ticketsComic').value) * 60;
    finalCost = totalBookCost + totalMovieCost + totalComicCost;
    document.getElementById('total').innerHTML = "R " + finalCost;
}



console.log();