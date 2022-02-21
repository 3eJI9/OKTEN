//      1) Створити функцію конструктор яка дозволяє створювати об'єкти car,
//      з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//      -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//      -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//      -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//      -- changeYear (newValue) - змінює рік випуску на значення newValue
//      -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

//     function Car (model, automakers, year, maxSpeed, power) {

//     this['model'] = model;
//     this['automakers'] = automakers;
//     this['year'] = year;
//     this['maxSpeed'] = maxSpeed;
//     this['power'] = power;
//
//     this.drive = function () {
//     return console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };

//     this.info = function () {
//     console.log(`Модель - ${model}`);
//     console.log(`Виробник - ${automakers}`);
//     console.log(`Рік випуску - ${this.year}`);
//     console.log(`Максимальна швидкість - ${this.maxSpeed}`);
//     console.log(`Об'єм двигуна - ${power}`);
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//     this.maxSpeed = this.maxSpeed + newSpeed;
//     };
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     };
//     this.addDriver = function (driver) {
//       this.driver = driver;
//     }
//     }

//        let car1 = new Car('A6', 'Audi', 2005, '260km/h', 2.0);
//        console.log(car1);
//        console.log(' ');
//        car1.drive();
//        console.log(' ');
//        car1.info();
//        console.log(' ');
//        car1.increaseMaxSpeed('260km/h');
//        car1.drive();
//        console.log(' ');
//        car1.changeYear(2012);
//        console.log(car1.year);
//        console.log(' ');
//        car1.addDriver({name: '3eJI9', age: 29});
//        console.log(car1);

//      - (Те саме, тільки через клас)
//      --Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник,
//      --рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//      -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//      -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//      -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//      -- changeYear (newValue) - змінює рік випуску на значення newValue
//      -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

//         class Car {
//         constructor(model, automakers, year, maxSpeed, power) {
//         this['model'] = model;
//         this['automakers'] = automakers;
//         this['year'] = year;
//         this['maxSpeed'] = maxSpeed;
//         this['power'] = power;
//         this.drive = function () {
//         return console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//            };
//         this.info = function () {
//         console.log(`Модель - ${model}`);
//         console.log(`Виробник - ${automakers}`);
//         console.log(`Рік випуску - ${this.year}`);
//         console.log(`Максимальна швидкість - ${this.maxSpeed}`);
//         console.log(`Об'єм двигуна - ${power}`);
//         };
//         this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = this.maxSpeed + newSpeed;
//         };
//         this.changeYear = function (newValue) {
//             this.year = newValue;
//         };
//         this.new_Driver = function (driver) {
//           this.driver = driver;
//         }
//     }
// }

//      let car1 = new Car('A6', 'Audi', 2005, 260, '2.0 tfsi');
//      console.log(car1);
//      console.log(' ');
//      car1.drive();
//      console.log(' ');
//      car1.info();
//      console.log(' ');
//      car1.increaseMaxSpeed(20);
//      car1.drive();
//      console.log(' ');
//      car1.changeYear(2010);
//      console.log(car1.year);
//      console.log(' ');
//      car1.new_Driver({name: '3eJI9', age: 30});
//      console.log(car1);


//      2) Створити клас/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

      class Cinderella {
          constructor(name, age, size) {
          this.name = name;
          this.age = age;
          this.size = size;
      }
      }
//
      let arrCinderella = [
      new Cinderella('Ingrid', 3, 19),
      new Cinderella('Susanne', 4, 15),
      new Cinderella('Milena', 4, 21),
      new Cinderella('Milana', 66, 32),
      new Cinderella('Jeni', 43, 16),
      new Cinderella('Milo', 23, 8),
      new Cinderella('Banana', 87, 23),
      new Cinderella('Nelly', 132, 12),
      new Cinderella('Monkey', 21, 31),
      new Cinderella('Christina', 9, 24),
      ]
//
//      console.log(arrCinderella);

//      3) Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

//      class Prince {
//      constructor(name, age, size) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//      }
//      }

//      let princePerson = new Prince('3eJI9', 30, 44);
//      console.log(princePerson);

///        4)Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку



//        let newPopelushka = arrCinderella.find((item) => item.size === Prince.size);
//        console.log(newPopelushka);
