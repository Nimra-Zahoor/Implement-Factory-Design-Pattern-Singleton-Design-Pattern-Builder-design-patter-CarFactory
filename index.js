// Car Factory
class CarFactory {
    constructor() {
      this.cars = [];
    }
  
    createCar(carType, options = {}) {
      let car;
      switch (carType) {
        case 'sedan':
          car = new SedanCar(options);
          break;
        case 'suv':
          car = new SUVCar(options);
          break;
        case 'sports':
          car = new SportsCar(options);
          break;
        default:
          throw new Error(`Invalid car type: ${carType}`);
      }
  
      this.cars.push(car);
      return car;
    }
  
    getCarList() {
      return this.cars;
    }
  }
  
  // Car Components
  class CarComponent {
    constructor(name, defaultOption) {
      this.name = name;
      this.option = defaultOption;
    }
  
    setOption(option) {
      this.option = option;
    }
  }
  
  class Seat extends CarComponent {
    constructor() {
      super('Seat', 'Standard Seat');
    }
  }
  
  class Engine extends CarComponent {
    constructor() {
      super('Engine', 'Standard Engine');
    }
  }
  
  class Door extends CarComponent {
    constructor() {
      super('Door', 'Standard Door');
    }
  }
  
  class Multimedia extends CarComponent {
    constructor() {
      super('Multimedia', 'Standard Multimedia');
    }
  }
  
  class Suspension extends CarComponent {
    constructor() {
      super('Suspension', 'Standard Suspension');
    }
  }
  
  class ElectricalSystem extends CarComponent {
    constructor() {
      super('Electrical System', 'Standard Electrical System');
    }
  }
  
  // Car Types
  class Car {
    constructor(carType, options) {
      this.carType = carType;
      this.components = {
        seat: new Seat(),
        engine: new Engine(),
        door: new Door(),
        multimedia: new Multimedia(),
        suspension: new Suspension(),
        electricalSystem: new ElectricalSystem()
      };
  
      for (const [component, option] of Object.entries(options)) {
        if (this.components.hasOwnProperty(component)) {
          this.components[component].setOption(option);
        }
      }
    }
  
    getComponents() {
      return this.components;
    }
  }
  
  class SedanCar extends Car {
    constructor(options) {
      super('Sedan', options);
    }
  }
  
  class SUVCar extends Car {
    constructor(options) {
      super('SUV', options);
    }
  }
  
  class SportsCar extends Car {
    constructor(options) {
      super('Sports Car', options);
    }
  }
  
  // Initialize Car Factory
  const carFactory = new CarFactory();
  
  // UI Interaction
  const createCarBtn = document.getElementById('createCarBtn');
  const carTypeSelect = document.getElementById('carType');
  const carListContainer = document.getElementById('carListContainer');
  
  createCarBtn.addEventListener('click', () => {
    const carType = carTypeSelect.value;
    const car = carFactory.createCar(carType);
    const carComponents = car.getComponents();
  
    const carItem = document.createElement('li');
    carItem.classList.add('carItem');
    carItem.innerHTML = `<strong>${car.carType}</strong><br>`;
    for (const [component, option] of Object.entries(carComponents)) {
      carItem.innerHTML += `${component}: ${option.option}<br>`;
    }
  
    carListContainer.appendChild(carItem);
  });
  