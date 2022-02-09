//      1) Створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

//      function min(a,b,c) {
//      if (a<b && a<c) {
//      return a;
//      } else if (b<a && b<c){
//      return b;
//      } else if (c<a && c<b) {
//      return c;
//      }
//      }

//      console.log(min(101,100,99));


//      2) Створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

//      function max(a,b,c) {
//      if (a>b && a>c) {
//      return a;
//      } else if (b>a && b>c){
//      return b;
//      } else if (c>a && c>b) {
//      return c;
//      }
//      }
//
//      console.log(min(33,66,99));


//      3) Створити функцію яка повертає найбільше число з масиву

//      let mas = [1, 2, 50, -30, 10000, 500, 301, 22];
//
//      function max(arr) {
//      let maxNumber = arr[0];
//      for (const arrElement of arr) {
//      if (maxNumber < arrElement) {
//      maxNumber = arrElement;
//      }
//      }
//      return maxNumber;
//      }

//      console.log(max(mas));


//      4) Створити функцію яка повертає найменьше число з масиву

//      let mas = [1, 2, 50, -30, 999, 500, 301, 22];
//
//      function min(arr) {
//      let minNumber = arr[0];
//      for (const arrElement of arr) {
//      if (minNumber > arrElement) {
//      minNumber = arrElement;
//      }
//      }
//      return minNumber;
//      }
//
//      console.log(min(mas));


//      5) Створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

//      let mas = [1, 2, 50, -30, 999, 500, 301, 22];

//      function sum(arr) {
//      sumArr = 0;
//      for (const arrElement of arr) {
//      sumArr = sumArr + arrElement;
//      }
//      return sumArr;
//      }

//      console.log(sum(mas));


//      6) Створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

//      let mas = [1, 2, 50, -30, 999, 500, 301, 22];
//
//      function sum(arr) {
//      sumArr = 0;
//      for (const arrElement of arr) {
//      sumArr = sumArr + arrElement;
//      }
//      ser = sumArr / arr.length;
//      return ser;
//      }
//
//      console.log(sum(mas));


//      7) Створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
//      а виводить найбільше (Math використовувати заборонено);

//      function calc(...arr) {
//      let min = arguments[0];
//      let max = arguments[0];
//      for (let mas of arr) {
//      if (mas < min) {
//      min = mas;
//      }
//      if (mas > max) {
//      max = mas;
//      }
//      }
//      console.log('Maximum -', max);
//      return min;
//      }
//
//      console.log('Minimum - ', calc(1, 100, 77, 8, 21, 9, 55, -20));

//      8) Створити функцію яка заповнює масив рендом числами
//      (цей код генерує рендом числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

//      function randomMas(xxx) {
//      let arr = [];
//      for (let i = 0; i < xxx; i++) {
//      arr[i] = Math.round(Math.random()*100);
//      }
//      console.log(arr);
//      }
//
//      randomMas(300);


//      9) Створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
//      який характеризує кінцеве значення діапазону.

//      function randomMas(xxx, limit) {
//      let arr = [];
//      for (let i = 0; i < xxx; i++) {
//      arr[i] = Math.round(Math.random()*limit);
//      }
//      console.log(arr);
//      }

//      randomMas(30, 30);


//      10) Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

//      let mas = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//
//      function reverseArray(arr) {
//      const newArr = [];
//      for (let i = 0; i < arr.length; i++) {
//      newArr[i] = arr[arr.length - i - 1];
//      }
//      return newArr;
//      }
//
//      console.log(reverseArray(mas));