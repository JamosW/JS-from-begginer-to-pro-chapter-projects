let employees = [];

class Employee {
    constructor(firstName, lastName, yearsWorked){
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearsWorked = yearsWorked;
    }
}

/*create some employees */
let timmy = new Employee("Tim", "Bacon", 12)
let carol = new Employee("Carol", "Sweets", 4)

/* add employees to employee array*/
employees.push(timmy, carol)

Employee.prototype.getInfo = function () {
    return (`${this.firstName} ${this.lastName} has worked ${this.yearsWorked} years`)
}

console.log(employees[1].getInfo())

class Prices {

    #bikePrice;
    #carPrice;
    #boughtBikes
    #boughtCars

    constructor(bikePrice, carPrice, boughtBikes, boughtCars){
        this.#bikePrice = bikePrice;
        this.#carPrice = carPrice;
        this.#boughtBikes = boughtBikes;
        this.#boughtCars = boughtCars;

    }

    totalCostBike () {
        return (this.#bikePrice * this.#boughtBikes)
    }

    totalCostCar () {
        return (this.#carPrice * this.#boughtCars)
    }

    get bikePrice(){
        return this.#bikePrice;
    }
    set bikePrice(bikePrice){
        this.#bikePrice = bikePrice;
    }

    get carPrice(){
        return this.#carPrice;
    }
    set carPrice(carPrice){
        this.#carPrice = carPrice;
    }


}

let pricey = new Prices(bikePrice = 20, carPrice = 100, boughtBikes = 3, boughtCars = 40);

pricey.bikePrice = 333;

console.log(pricey.totalCostBike())