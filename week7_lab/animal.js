function Zebra(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "A description of a zebra.";
    this.image = "images/zebra.jpg";

}

  function Tiger(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "A description of a tiger.";
    this.image = "images/tiger.jpg";

}

  function Elephant(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "A description of an elephant.";
    this.image = "images/elephant.jpg";

}

var animal = [new Zebra(), new Tiger(), new Elephant()];
var nameValues = ["Helen", "Anna", "Mike", "Jason", "Bella", "Tyson"];

function generateRandomIndex(maxIndex) {
    return Math.floor(Math.random() * (maxIndex + 1));
}

function generateRandomName() {
    let i = generateRandomIndex(nameValues.length - 1);
    return nameValues[i];
}

function generateRandomAge() {
    let maxAge = 15;
    return generateRandomIndex(maxAge);
}

function generateRandomAnimal() {
    let i = generateRandomIndex(animal.length - 1);
    let randomAnimal = animal[i];

    if (randomAnimal instanceof Zebra) {
        return new Zebra(generateRandomName(), generateRandomAge())
    }

    if (randomAnimal instanceof Tiger) {
        return new Tiger(generateRandomName(), generateRandomAge())
    }

    if (randomAnimal instanceof Elephant) {
        return new Elephant(generateRandomName(), generateRandomAge())
    }
}

function onLoad() {
    var animal = generateRandomAnimal()

    // Change details of animal on the top description.
    var details = document.getElementById("animal-details");
    details.innerHTML = `Name: ${animal.name}, Age: ${animal.age}`;

    // Next, get the image and change the src and alt text:
    var animalImage = document.getElementById("animal-img");
    animalImage.setAttribute("src", animal.image);
    animalImage.setAttribute("alt", animal.image_alt);
}