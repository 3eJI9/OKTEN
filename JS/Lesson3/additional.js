//      1. Створити пустий масив та :

          let arr = [];

//      a. заповнити його 50 парними числами за допомоги циклу.

//      let numberA = 100;
//      for (let i = 0; i < 50; i++) {
//      if (numberA % 2 === 0) {
//      arr[i] = numberA;
//      numberA = numberA + 2;
//      }
//      }


// b. заповнити його 50 непарними числами за допомоги циклу.

//      let numberB = 99;
//      for (let i = arr.length; i < 100; i++) {
//      if (numberB % 2 !== 0) {
//      arr[i] = numberB;
//      numberB = numberB + 2;
//      }
//      }


//      c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

//      for (let i = arr.length; i < 20; i++) {
//      arr[i] = Math.floor(Math.random() * 100);
//      }
//      console.log(arr);


//      d. Заповнити масив 20ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)

//      for  (let i = arr.length; i < 140; i++) {
//      arr[i] = Math.floor(Math.random() * 724) + 8;
//      }
//      console.log(arr);
//      for.push([i])

//      2. Вивести за допомогою console.log кожен третій елемент

//      for (let i = 0; i < arr.length; i++) {
//      if (i % 3 === 0) {
//      console.log('Number element -', i, ', element -',arr[i]);
//      }
//      }


//      3. Вивести за допомогою console.log кожен третій елемент тільки якщо цей елемент є парним.

//      for (let i = 0; i < arr.length; i++) {
//      if (i % 3 === 0) {
//      if (arr[i]%2 === 0){
//      console.log('Number element -', i, ', element -',arr[i]);
//      }
//      }
//      }


//      4. Вивести за допомогою console.log кожен третій елемент тільки якщо цей елемент є парним та записати їх в новий масив

//      let xxx = [];
//      for (let i = 0; i < arr.length; i++) {
//      if (i % 3 === 0) {
//      if (arr[i] % 2 === 0) {
//      xxx.push(arr[i]);
//      console.log('Number element -', i, ', element -',arr[i]);
//      }
//      }
//      }
//      console.log(xxx);


//      5. Вивести кожен елемент масиву, сусід справа якого є парним
//      EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

//      for (let i = 0; i < arr.length; i++) {
//      if (arr[i+1] % 2 === 0) {
//      console.log('Number - ',arr[i], 'Friend -',arr[i+1]);
//      }
//      }


//      6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки.
//      Обрахувати середній чек.

//      let check = [100,250,50,168,120,345,188];
//      let sum = 0;
//      let checkBeer;
//      for (let i = 0; i < check.length; i++) {
//      sum = sum + check[i];
//      }
//      checkBeer = sum / check.length;
//      console.log(checkBeer);


//      7. Створити масив з рендомним значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

//      let mas = [5, 15, 35, -5, 257, 32, 10, 3, -5];
//      let arrNewMas = [];
//
//      for (let i = 0; i < mas.length; i++) {
//      arrNewMas[i] = mas[i]*5;
//      }
//      console.log(arrNewMas);


//      8. Створити масив з будь-якими значеннями (стрінги, числа, і тд...). пройтись по ньому,
//      і якщо елемент є числом - додати його в інший масив.

//      let mas = ['Bananas', '3eJI9', true, 1992, 'Barcelona', false, -300, 55, 'BOOK'];
//      let arrNewMas = [];

//      for (let i = 0; i < mas.length; i++) {
//      if (typeof mas[i] === 'number') {
//      arrNewMas.push(mas[i]);
//      }
//      }
//      console.log(arrNewMas);


//      - Дано 2 масиви з рівною кількістю об'єктів.
//      Масиви:

//      let usersWithId = [
//      {id: 1, name: 'mamba', age: 31, status: false},
//      {id: 2, name: 'petya', age: 30, status: true},
//      {id: 3, name: 'kolya', age: 29, status: true},
//      {id: 4, name: 'mark', age: 28, status: false}
//      ];
//
//
//      let citiesWithId = [
//      {user_id: 3, country: 'USA', city: 'Portland'},
//      {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//      {user_id: 2, country: 'Poland', city: 'Krakow'},
//      {user_id: 4, country: 'USA', city: 'Miami'}
//      ];


//      З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id".
//      Записати цей об'єкт в новий масив


//      let usersWithCities = [];
//      for (let user of usersWithId) {
//      for (let city of citiesWithId) {
//      if  (user.id === city.user_id)  {
//             user.address = city;
//             usersWithCities.push(user);
//      }
//      }
//      }
//      console.log(usersWithCities);



//      - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

//      let masNum = [4, 14, 44, 33, 15, 16, 89, 18, 19, 20, 944, 861, 1888];
//      for (let i = 0; i < masNum.length; i++) {
//      if (masNum[i] % 2 === 0) {
//      console.log(masNum[i]);
//      }
//      }

//      - Взяти масив з 10 чисел або створити його. Створити 2-й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

//      let masNum = [4, 14, 44, 33, 15, 16, 89, 18, 19, 20, 944, 861, 1888];
//      let masFirst = [];
//      for (let i = 0; i < masNum.length; i++) {
//      masFirst[i] = masNum[i];
//      }
//      console.log(masNum);

//       let numArray = [4, 14, 44, 33, 15, 16, 89, 18, 19, 20, 944, 861, 1888];
//       let newArray = numArray.slice();



//      - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

//      let abc = [ 'a', 'b', 'c'];
//      let string = '';
//      for (let i = 0; i < abc.length; i++) {
//      string = string + abc[i];
//      }
//      console.log(string)


//      - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

//      let abc = ['a', 'b', 'c'];
//      let string = '';
//      let i = 0;
//
//      while (i < abc.length) {
//      string = string + abc[i];
//      i++;
//      }
//      console.log(string);

//      - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

//      let abc = ['a', 'b', 'c'];
//      let string = '';
//
//      for (let stringElement of abc) {
//      string = string + stringElement;
//      }
//      console.log(string);