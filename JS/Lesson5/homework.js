//      1) Створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

//      let areaRectangle = (a, b) => a * b;
//      console.log('Area Rectangle  -', areaRectangle(8, 5));


//      2) Створити функцію яка обчислює та повертає площу кола з радіусом r

//      let areaCircle = (r) => {
//      const PI = 3.14;
//      return PI * r * r;
//      }
//      console.log('Area Circle -',areaCircle(5));


//      3) Створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r

//      let areaCylinder = (h, r) => {
//      const PI = 3.14;
//      let res;
//      res = (2 * PI) * r * h;
//      return res;
//      }
//      console.log('Area Cylinder -', areaCylinder(5, 8));


//      4) Створити функцію яка приймає масив та виводить кожен його елемент

//      let displayArr= (arr) => {
//      for (const arrElement of arr) {
//      console.log(arrElement);
//      }
//      }
//      displayArr(['3eJI9, false, 1992, 'Banana', 5]);


//      5) Створити функцію яка створює параграф з текстом. Текст задати через аргумент

//      let par = (p) => document.write(`<p>${p}</p>`);
//      par ('3eJI9');


//      6) Створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

//      let ul = (a) => {
//      document.write(`<ul>`);
//      document.write(`<li>${a}</li>`);
//      document.write(`<li>${a}</li>`);
//      document.write(`<li>${a}</li>`);
//      document.write(`</ul>`);
//      }
//      ul('3eJI9');


//      7) Створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//      Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

//      let ul = (text, quantity) => {
//      document.write(`<ul>`);
//      for (let i = 0; i < quantity; i++) {
//      document.write(`<li><h1>${text}</h1></li>`);
//      }
//      document.write(`</ul>`);
//      }
//      ul('3eJI9', 5);


//      8) Створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список.

//      let ul = (arr) => {
//      document.write(`<ul>`);
//      for (const arrElement of arr) {
//      document.write(`<li>${arrElement}</li>`);
//      }
//      document.write(`</ul>`);
//      }
//      ul(['3eJI9, false, 1992, 'Banana', 5]);


//      9) Створити функцію яка приймає масив об'єктів з наступними полями id, name, age, та виводить їх в документ.
//      Для кожного об'єкту окремий блок.

//      let person = [
//      {id: 1, name: '3eJI9', age: 29},
//      {id: 2, name: 'Mamba', age: 44},
//      {id: 3, name: 'Kristina', age: 12}
//      ]
//
//      let div = (arrFirst) => {
//      for (const arr of arrFirst) {
//      document.write(`<div>${arr.id} ${arr.name} ${arr.age}</div>`);
//      }
//      }
//      div(person);