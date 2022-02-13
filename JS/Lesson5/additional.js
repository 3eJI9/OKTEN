//          1)Дано натуральне число n. Введіть вси числа від 1 до n.


//            let num = (n) => {
//            if (n<=33) {
//            for (let i = 1; i <= n; i++) {
//            console.log(i);
//            }
//            } else {
//            console.log('Number nt natural')
//            }
//            }
//            num(33);

//           2)Дано два цілих числа A і В. Виведіть усі числа від A до B включно,
//           в порядку зростання, якщо A < B, або в порядку за зменшенням в іншому випадку.

//            let xxx = (a, b) => {
//                    if (a < b){
//            for (let i = a; i <= b; i++) {
//                console.log(i);
//            }
//            } else  if (a > b) {
//            for (let i = a; i >= b; i--){
//                console.log(i)
//            }
//            } else if (a === b) {
//                console.log('The numbers are the same');
//            }
//            }
//            xxx(15, 30);


//           3) Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//           EXAMPLE:

//          foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//          foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//          foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

//            let foo = (arr, index) => {
//            for (let i = 0; i < arr.length; i++) {
//                if (i === index) {
//                    [arr [i], arr [i+1]] = [arr[i+1], arr[i]];
//                }
//                }
//            console.log(arr);
//                }
//            foo ([9,8,0,4], 0);
//            foo ([9,8,0,4], 1);
//            foo ([9,8,0,4], 2);



//          4)Створити функцію яка буде переносити елементи зі значенням 0 у кінець масиву.
//          Зберігаючи при цьому порядок не нульових значень.
//          Довжина масиву від 2 до 100
//          EXAMPLE:

//          [1,0,6,0,3] => [1,6,3,0,0]
//          [0,1,2,3,4] => [1,2,3,4,0]
//          [0,0,1,0]   => [1,0,0,0]

          let mas = (arr) => {
          let arrNew = [];
          let arrNewA = [];

          for (let i = 0; i < arr.length; i++) {
          if (arr[i] > 0) {
          arrNew.push(arr[i]);
          } else if (arr[i] === 0) {
              arrNewA.push(arr[i])
          }
          }
          arr = arrNew.concat(arrNewA);
          console.log(arr);
          }
          mas ([1,0,6,0,3]);
          mas ([0,1,2,3,4]);
          mas ([0,0,1,0]);

