//Implement flow of a factory pattern for the creation of a car, 
//in which there are different objects like seats, engine, doors, multimedia, 
//suspension, electrical system etc. Ensuring only a single object of the Car 
//Factory is ever available, keep track of cars produced by the factory and 
//provide an interface to get a list of all those cars and their counts.
//Factory should help make a car with custom requirements for all mentioned components,
// with sensible defaults set.
// let globalState = {
//   seats : 0,
//   engine : 0,
//   doors : null,
//   multimedia : "",
//   suspension : "",
//   electrical_system : "",

// };
let countCar = {
    suv : 0,
    ferrari : 0,
    honda : 0
}
class CarFactory{
    constructor(name,seats,engine,doors,multimedia,suspension,electrical_system){
        this.name = name;
        this.seats = seats;
        this.engine = engine;
        this.doors = doors;
        this.multimedia = multimedia;
        this.suspension = suspension;
        this.electrical_system = electrical_system;
        
    } 
    getCar=(carType)=>{
        console.log("carType",carType);
        console.log("this.carType",this.carType)
        if(carType === 'suv')
        {
             countCar.suv = countCar.suv +1 ;
             this.name = 'Suv'
             this.seats = 4;
             this.engine = 'unbreakable';
             this.doors = 2;
             this.multimedia = 'no-multimedia';
             this.suspension ='no-suspension';
             this.electrical_system = 'yes';
             
             return this;
        }
        else if(carType ==='ferrari')
        {    
            countCar.ferrari = countCar.ferrari +1; 
            this.name = 'Ferrari'
            this.seats = 2;
            this.engine = 'best';
            this.doors = 4;
            this.multimedia = 'yes';
            this.suspension ='no-suspension';
            this.electrical_system = 'yes';
            return this;
        }
        else if(carType === 'honda')
        {
            countCar.honda = countCar.honda+1;
            this.name = 'Honda'
            this.seats = 5;
             this.engine = 'Excellent';
             this.doors = 4;
             this.multimedia = 'songs';
             this.suspension ='no-suspension';
             this.electrical_system = 'yes';
            return this;
        }

    }
}
//console.log(getValue())
let instance = new CarFactory();
console.log("returning honda object",instance.getCar('honda'));
console.log("Suv",countCar.suv,"count HOnda",countCar.honda)
var input = document.getElementById("carList");
console.log(input)

const createCar = () =>{
    const value = document.getElementById('carType').value;
    let carValues = instance.getCar(value);
    console.log("value", value);
    console.log("CarValues", carValues);
    
    let Cars = "Car Name = " + carValues.name + "\nCar doors = " + carValues.doors + "\nCar Engine =" + carValues.engine +
      "\nSeats = " + carValues.seats + "\nMultimedia = " + carValues.multimedia;
    console.log('Cars', Cars);
    
    document.getElementById('carListContainer').value = Cars;
}



