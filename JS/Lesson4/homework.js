//      1) Створити функцію яка обчислює та повертає площу прямокутника сторонами а і б

//      function area (a, b) {
//      res = a * b;
//      return res;
//      }

//      console.log('Rectangle -', area (5, 7));


//      2) Створити функцію яка обчислює та повертає площу кола з радіусом r

//      function areaCircle(r) {
//      const PI = 3.14;
//      res = PI * r * r;
//      return res;
//      }

// console.log('Area -', areaCircle(15));


//      3) Створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r

//      function area_cylinder(h, r) { //2pRH H- HEIGHT
//      const PI = 3.14;
//      res = (2 * PI) * r * h;
//      return res;
//      }
//
//      let result = area_cylinder(2, 2);
//      console.log('Area -', result);

//      4) Створити функцію яка приймає масив та виводить кожен його елемент

//      let mas = [1, 12, 1992, true, 'Banana', 900, false, '3eJI9'];
//      function displayArr(arr) {
//      for (const arrElement of arr) {
//      console.log(arrElement);
//      }
//      }
//
//      displayArr(mas);


//      5) Створити функцію яка створює параграф з текстом. Текст задати через аргумент

//        function paragraph(p) {
//        document.write(`<p1>${p}</p1>`);
//        }

//        paragraph('3eJI9, 3eJI9, 3eJI9, 3eJI9, 3eJI9, 3eJI9, 3eJI9, 3eJI9, 3eJI9')


//      6) Створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий


//      function ul(aaa) {
//      document.write(`<ul>`);
//      document.write(`<li>${aaa}</li>`);
//      document.write(`<li>${aaa}</li>`);
//      document.write(`<li>${aaa}</li>`);
//      document.write(`</ul>`);
//      }

//      ul('Item');

//      7) Створити функцію яка створює ul з трьома елементами li.
//      Текст li задати через аргумент всім однаковий.
//      Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

//        function ul(a, b) {
//        document.write(`<ul>`);
//        for (let i = 0; i < b; i++) {
//        document.write(`<li><p1>${a}</p1></li>`);
//        }
//        document.write(`</ul>`);
//        }

//        ul('3eJI9', 33);

//      8) Створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

//      function ul(arr) {
//      document.write(`<ul>`);
//      for (const arrElement of arr) {
//      document.write(`<li>${arrElement}</li>`);
//      }
//      document.write(`</ul>`);
//      }

//      ul([1, 12, 1992, true, 'Banana', 900, false, '3eJI9']);


//      function ul(arr) {
//      document.write(`<ul>`);
//      for (const arrElement of arr) {
//      document.write(`<li>${arrElement}</li>`);
//      }
//      document.write(`</ul>`);
//      }

//      let mas = [1, 12, 1992, 212121, true, 'Banana', 900, false, '3eJI9'];
//      ul(mas);


//      10) Створити функцію яка приймає масив об'єктів з наступними полями id, name, age, та виводить їх в документ.
//      Для кожного об'єкту окремий блок.

//      let animal = [
//      {id: 1, name: 'Мавпа ', age: 10},
//      {id: 2, name: 'Собака ', age: 8},
//      {id: 3, name: 'Кіт' , age: 28}
//      ]

//      function div(xxx) {
//      document.write(`<div><h1>${arr.id} ${arr.name} ${arr.age}</h1></div>`);
//      }
//      }

//     div(animal);