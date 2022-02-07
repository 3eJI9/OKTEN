//      1) Cтворити масив з:
//      - з 5 числових значень
//      - з 5 стрічкових значень
//      - з 5 значень стрічкового, числового та булевого типу
//      - та вивести його в консоль

//      let num = [1, 2, 3, 4, 5];
//      let str = ['a', 'b', 'c', 'd', 'e'];
//      let snb = ['3eJI9', true, 55, false, 007];
//
//      console.log(num);
//      console.log(str);
//      console.log(snb);


//      2) Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
//      Вивести в консоль

//      let arr = [];
//      arr[0] = '3eJI9';
//      arr[1] = false;
//      arr[3] = true;
//      arr[4] = 'Banan';
//      arr[5] = 007;
//      arr[6] = 250;
//      arr[7] = 'Mamba';
//      arr[8] = 100000;
//      arr[9] = 'Sunday';
//      arr[10] = 250;
//      console.log(arr);


//      3) - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//      - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//      - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//      - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

//      for (let i = 0; i < 10; i++) {
//      document.write(`<div>3eJI9</div>`)
//      }

//      for (let i = 0; i < 10; i++) {
//      document.write(`<div>${i} 3eJI9</div>`)
//      }

//      let i = 0;
//      while (i < 20) {
//      document.write(`<h1>3eJI9</h1>`);
//      i++;
//      }

//      let i = 0;
//      while (i < 20) {
//      document.write(`<h1>${i} Hello World!</h1>`);
//      i++;
//      }


//      4) Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

//      let num = [33, 190, 25, 14, 590, 16, 007, 12, 5, 92];
//      for (let i = 0; i < num.length; i++) {
//      let numElement = num[i];
//      console.log(numElement);
//     }

//      5) Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.

//      let str = ['Avokado', 'Mango', 'Banan', '3eJI9', 'Home', 'Samuraj', 'Green', 'Glass', 'Kaktus', 'Monkey'];
//      for (let i = 0; i < str.length; i++) {
//      let strElement = str[i];
//      console.log(strElement);
//      }

//      6) Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

//      let arr = ['3eJI9', true, 'Bud', false, 1992, 'Book', 'Free', 1, 123];
//      for (let i = 0; i < arr.length; i++) {
//      let arrElement = arr[i];
//      console.log(arrElement);
//      }

//      7) Створити масив з 10 елементів числового, стрічкового і булевого типу.
//      За допомогою if та typeof вивести тільки булеві елементи

//      let arr = ['3eJI9', true, 'Bud', false, 1992, 'Book', 'Free', 1, 123];
//      for (let i = 0; i < arr.length; i++) {
//      let arrElement = arr[i];
//     if (typeof arrElement === "boolean") {
//      console.log(arrElement);
//      }
//      }

//      8) Створити масив з 10 елементів числового, стрічкового і булевого типу.
//      За допомогою if та typeof вивести тільки числові елементи

//      let arr = ['3eJI9', true, 'Bud', false, 1992, 'Book', 'Free', 1, 123];
//      for (let i = 0; i < arr.length; i++) {
//      let arrElement = arr[i];
//      if (typeof arrElement === "number") {
//      console.log(arrElement);
//      }
//      }

//      9) Створити масив з 10 елементів числового, стрічкового і булевого типу.
//      За допомогою if та typeof вивести тільки рядкові елементи

//      let arr = ['3eJI9', true, 'Bud', false, 1992, 'Book', 'Free', 1, 123];
//      for (let i = 0; i < arr.length; i++) {
//      let arrElement = arr[i];
//      if (typeof arrElement === "string") {
//      console.log(arrElement);
//      }
//      }

//      10) Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
//      Вивести в консоль всі його елементи в циклі.

//      let arr = [];
//
//      arr[0] = '3eJI9';
//      arr[1] = true;
//      arr[3] = 'Bud';
//      arr[2] = 123;
//      arr[5] = false;
//      arr[4] = 1;
//      arr[6] = 'Free';
//      arr[7] = 'Book';
//      arr[8] = 1992;
//      arr[9] = false;
//
//      for (let i = 0; i < arr.length; i++) {
//      let arrElement = arr[i];
//      console.log(arrElement);
//      }

//      11) Створити цикл for на 10  ітерацій з кроком 1.
//      Вивести поточний номер кроку через console.log та document.write

//      for (let i = 0; i < 10; i++) {
//      console.log(i, 'Number Step');
//      document.write(`<h1>${i} Number step</h1>`)
//      }

//      12) Створити цикл for на 100 ітерацій з кроком 1.
//      Вивести поточний номер кроку через console.log та document.write

//      for (let i = 0; i < 100; i++) {
//      console.log(i, 'Number Step');
//      document.write(`<h4>${i} Number step</h4>`)
//      }

//      13) Створити цикл for на 100 ітерацій з кроком 3.
//      Вивести поточний номер кроку через console.log та document.write

//      for (let i = 0; i < 100; i=i+3) {
//      console.log(i, 'Number Step');
//      document.write(`<h4>${i} Number step</h4>`)
//      }

//      14) Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. Через console.log + document.write

//      for (let i = 0; i < 100; i++) {
//      if (i % 2 === 0) {
//      console.log(i, 'Number Step');
//      document.write(`<h4>${i} Number step</h4>`)
//      }
//      }

//      15) Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

//      for (let i = 0; i < 100; i++) {
//      if (i % 2 !== 0) {
//      console.log(i, 'Number Step');
//      document.write(`<h4>${i} Number step</h4>`)
//      }
//      }

