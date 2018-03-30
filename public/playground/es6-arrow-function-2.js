const add = (a , b) => {
    return a+b; 
}; 

console.log(add(55,1, 1000, 1)); 

const user = {
    name: 'Dmytro', 
    cities: ['Kyiv', 'Lviv', 'Itasca'], 
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city + '.'); 
    }
}; 

console.log(user.printPlacesLived()); 

const multiplier = {
    numbers: [ 4 , 4 , 3 , 9, 1], 
    multiplyBy: 2, 
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy); 
    }
}; 

console.log(multiplier.multiply()); 