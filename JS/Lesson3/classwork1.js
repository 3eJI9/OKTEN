//      1) Зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
        let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

//      1. Перебрати його циклом while

//      let i = 0;
//      while (i < arr.length) {
//      console.log(arr[i]);
//      i++
//      }


//      2. Перебрати його циклом for

//      for (let i = 0; i < arr.length; i++) {
//      let arrElement = arr[i];
//      console.log(arrElement);
//      }


//      3. Перебрати циклом while та вивести  числа тільки з непарним індексом

//      let i = 0;
//      while (i < arr.length) {
//      if (i % 2 !== 0) {
//      console.log('Number -', arr[i] ,' Index -', i);
//      }
//      i++
//      }


//      4. перебрати циклом for та вивести  числа тільки з непарним індексом

//      for (let i = 0; i < arr.length; i++) {
//      let arrElement = arr[i];
//      if (i % 2 !== 0) {
//      console.log('Number -', arrElement, '  Index -', i);
//      }
//      }


//      5. перебрати циклом while та вивести числа тільки парні значення

//      let i = 0;
//      while (i < arr.length) {
//      if (arr[i] % 2 === 0) {
//      console.log('Number -', arr[i]);
//      }
//      i++
//      }


//      6. перебрати циклом for та вивести числа тільки парні значення

//      for (let i = 0; i < arr.length; i++) {
//      let arrElement = arr[i];
//      if (arrElement % 2 === 0) {
//      console.log('Number -', arrElement);
//      }
//      }


//      7. замінити кожне число кратне 3 на слово "okten"

//      for (let i = 0; i < arr.length; i++) {
//      let arrElement = arr[i];
//      if (arrElement % 3 === 0) {
//      arrElement = 'OKTEN';
//      }
//      console.log(arrElement);
//      }

//      let i = 0;
//      while (i < arr.length) {
//      if (arr[i] % 3 === 0) {
//      arr[i] = 'OKTEN';
//      }
//      console.log(arr[i]);
//      i++
//      }


//      8. Вивести масив в зворотньому порядку.

//      for (let i = arr.length-1; i >= 0; i--) {
//      let arrElement = arr[i];
//      console.log(arrElement);
//      }



//      2) Усі попередні завдання (окрім 8), але у зворотньому циклі (с заду на перед)

//      1. Перебрати його циклом while в зворотньому циклі (с заду на перед)

//      let i = arr.length-1;
//      while (i >=0) {
//      console.log(arr[i]);
//      i--
//      }


//      2. Перебрати його циклом for

//      for (let i = arr.length-1; i >= 0; i--) {
//      let arrElement = arr[i];
//      console.log(arrElement);
//      }


//      3. перебрати циклом while та вивести  числа тільки з непарним індексом

//      let i = arr.length-1;
//      while (i >=0) {
//      if (i % 2 !== 0) {
//      console.log('Number -', arr[i] ,' Index -', i);
//      }
//      i--
//      }


//      4. перебрати циклом for та вивести  числа тільки з непарним індексом

//      for (let i = arr.length-1; i >= 0; i--) {
//      let arrElement = arr[i];
//      if (i % 2 !== 0) {
//      console.log('Number -', arrElement, ' Index -', i);
//      }
//      }


//      5. Перебрати циклом while та вивести числа тільки парні значення

//      let i = arr.length-1;
//      while (i >=0) {
//      if (arr[i] % 2 === 0) {
//      console.log('Number -', arr[i]);
//      }
//      i--
//      }


//      6. Перебрати циклом for та вивести числа тільки парні значення

//      for (let i = arr.length-1; i >= 0; i--) {
//      let arrElement = arr[i];
//      if (arrElement % 2 === 0) {
//      console.log('Number -', arrElement);
//      }
//      }


//      7. Замінити кожне число кратне 3 на слово "okten"

//      for (let i = arr.length-1; i >= 0; i--) {
//      let arrElement = arr[i];
//      if (arrElement % 3 === 0) {
//      arrElement = 'ОКТЕН';
//      }
//      console.log(arrElement);
//      }

//      let i = arr.length-1;
//      while (i >=0) {
//      if (arr[i] % 3 === 0) {
//      arr[i] = 'ОКТЕН';
//      }
//      console.log(arr[i]);
//      i--
//      }