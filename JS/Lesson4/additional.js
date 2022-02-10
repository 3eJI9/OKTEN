//      1) Створити функцію, яка якщо приймає один аргумент, просто виводить його,
//      якщо два аргументи - складає або конкатенує їх між собою.


//      function argMen() {
//      if (arguments.length === 1){
//      console.log(arguments[0]);
//      }
//      else if (arguments.length === 2) {
//      xxx = arguments[0] + arguments [1];
//      console.log(xxx);
//      }
//      else {
//      console.log(arguments);
//      }
//      }
//      argMen('3eJI', '9');
//
//      2)Створити функцію яка приймає два масиви та складає
//      значення елементів з однаковими індексами  та повертає новий результуючий масив.
//      EXAMPLE:
//      [1,2,3,4]
//      [2,3,4,5]
//      Результат
//      [3,5,7,9]
//
//      function sumArray(mas1, mas2) {
//      const new_Arr = [];
//      for (let i = 0; i < mas1.length, i < mas2.length; i++) {
//      new_Arr[i] = mas1[i] + mas2[i];
//      }
//      return new_Arr;
//      }
//      console.log( sumArray([1, 2, 3, 4], [2, 3, 4, 5]));
//
//
//
//      3) Створити функцію яка приймає масив будь яких обєктів, та повертає масив ключів всіх обєктів
//      EXAMPLE:
//      [{name: '3eJI9', age: 29}, {model: 'A6'}]  ===> [ name, age, model ]
//
//      let person = [{name: '3eJI9', age: 29}, {model: 'A6'}];
//
//      function keyArray(mas) {
//      const newArr = [];
//      for (let i = 0; i < mas.length; i++) {
//      if (typeof mas[i] === "object") {
//      key_a = Object.keys(mas[i]);
//      for (let j = 0, l = key_a.length; j < l; j++) {
//      newArr.push(key_a[j]);
//      }
//      }
//      }
//      return newArr;
//      }
//      console.log(keyArray(person));

