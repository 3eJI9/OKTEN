//      1) Дано список імен.
//      let n1 = 'Harry..Potter'
//      let n2 = 'Ron---Whisley'
//      let n3 = 'Hermione__Granger'
//      Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
//      let n1 = 'Harry Potter'
//      let n2 = 'Ron Whisley'
//      let n3 = 'Hermione Granger'

//      let n1 = 'Harry..Potter';
//      let n2 = 'Ron---Whisley';
//      let n3 = 'Hermione__Granger';

//      let normalize = (str) => {
//      let strClear = str
//         .replaceAll('..', ' ')
//         .replaceAll('---', ' ')
//         .replaceAll('__', ' ');
//      console.log(strClear);
//      }

//          normalize(n1);
//          normalize(n2);
//          normalize(n3);


//
//          let normalize = (str) => {
//          let ClearName = str
//          .replaceAll('..', ' ')
//          .replaceAll('---', ' ')
//          .replaceAll('__', ' ');
//          console.log(ClearName);
//          }


//          2) створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

//          let random = (number) => {
//          let Range = [];
//          for (let i = 0; i < number; i++) {
//          Range[i] = Math.round(Math.random() * 100);
//          }
//          console.log(Range);
//          }
//          random(33);
//          debugger


//          3) створити (або згенерувати, за допомоги попередньої функції)
//          масив рандомних цілих числових значень. Відсортувати його за допомоги sort

//          let random = (length) => {
//          let number = [];
//          for (let i = 0; i < length; i++) {
//              number[i] = Math.round(Math.random() * 100);
//          }
//          console.log('Before - ', number);
//              number.sort(function (a, b) {
//          return a - b;
//          });
//          console.log('After - ',number);
//          }
//          random(33);


//          4) створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
//          відфільтрувати його за допомоги filter, залишивши тільки парні числа

//          let random = (length) => {
//          let number = [];
//          for (let i = 0; i < length; i++) {
//          number[i] = Math.round(Math.random() * 100);
//          }
//          console.log('Massive before:', arr);
//          number filter = arr.filter(xxx => xxx % 2 === 0);
//          console.log('Massive plural:', filter);
//          }
//          random(33);


//          5) створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції).
//          за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

//          let random = (length) => {
//          let total = [];
//          for (let i = 0; i < length; i++) {
//          arr[i] = Math.round(Math.random() * 100);
//          }
//          console.log(arr);
//          let TotalStr = arr.map(element => (`${element}`))
//          console.log(TotalStr);
//          }
//          random(33);


//          6) створити функцію sortNums(direction), яка приймає масив чисел, та сортує його від більшого до меншого,
//          або навпаки в залежності від значення аргументу direction.

//          let nums = [11,21,3];
//          sortNums('ascending') // [3,11,21]
//          sortNums('descending') // [21,11,3]

//          let nums = [11, 21, 3];
//          let sortNums = (arr, direction) => {
//          let rez;
//          if (direction === 'ascending') {
//          arr.sort(function (a, b) {
//          return a - b;
//          });
//          console.log(arr);

//          } else if (direction === 'descending') {
//          arr.sort(function (a, b) {
//          return b - a;
//          });
//          console.log(arr);
//          } else console.log('Введена некоректна умова');
//          }
//
//          sortNums(nums, 'descending');


//      7)  є масив
//      let coursesAndDurationArray = [
//      {title: 'JavaScript Complex', monthDuration: 5},
//      {title: 'Java Complex', monthDuration: 6},
//      {title: 'Python Complex', monthDuration: 6},
//      {title: 'QA Complex', monthDuration: 4},
//      {title: 'FullStack', monthDuration: 7},
//      {title: 'Frontend', monthDuration: 4}
//      ];
//      -- відсортувати його за спаданням за monthDuration
//      -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
//      ];
//
//      console.log(coursesAndDurationArray.sort(function (a, b) {
//      return a.monthDuration - b.monthDuration;
//      }));
//
//      console.log(coursesAndDurationArray.filter(function (a) {
//      return a.monthDuration > 5;
//      }))