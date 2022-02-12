
//    1) Створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//    let min = (a,b,c)=>{
//    if (a<b && a<c){
//        return a;
//    }   else if (b<a && b<c){
//        return b;
//    }   else if (c<a && c<b) {
//        return c;
//        }
//    }
//    console.log(min(10,7,5))

//    2) Створити функцію яка повертає найменьше число з масиву

//    let mas = [5, 10, 50, -30, 777, 500, 301, -33];
//    let min = (arr) =>{
//        let minNumber = arr[0];
//        for (const arrElement of arr) {
//            if (minNumber > arrElement) {
//                minNumber = arrElement
//            }
//        }
//        return minNumber;
//    }
//    console.log(min(mas));

//     3) Створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//     Приклад [1,2,10]->13


//        let mas = [5, 10, 50, -30, 777, 500, 301, -33];
//        let sum = (arr) =>{
//            let sumArr = 0;
//            for (const arrElement of arr) {
//                sumArr = sumArr + arrElement;
//            }
//            return sumArr
//            }
//        console.log(sum(mas));


//        4) Створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

//        let mas = [5, 10, 50, -30, 777, 500, 301, -33];

//        let sum = (arr) => {
//        let sumArr = 0;
//        let average;
//        for (const arrElements of arr) {
//                sumArr = sumArr + arrElements;
//        }
//        average = sumArr / arr.length;
//        return average;
//        }
//        console.log(sum(mas))

//      5) Створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);


//        let cal = (...arr) =>{
//        let min = arr[0];
//        let max = arr[0];
//        for (let mas of arr) {
//                if (mas < min) {
//                        min = mas;
//                }
//                if (mas > max) {
//                        max = mas;
//               }
//                }
//        console.log('Maximum -', max)
//        return min;
//                }
//        console.log('Minimum -', cal(3, 3, 6, 7, 9, 99));

//       6) Створити функцію яка заповнює масив рандомними числами
//       (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

//              let randomMas = (banana) => {
//              let arr = [];
//              for (let i = 0; i < banana; i++) {
//              arr[i] = Math.round(Math.random()*100);
//              }
//              console.log(arr);
//              }
//              randomMas(33);

//        7) створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,

//        let randomMas = (banana, limit) => {
//        let arr = [];
//        for (let i = 0; i < banana; i++){
//                arr[i] = Math.round(Math.random()*limit);
//        }
//        console.log(arr);
//        }
//        randomMas(33, 12)

//        8) Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

//        let mas = [5, 10, 50, -30, 777, 500, 301, -33];
//        function reverseArray(arr) {
//               for (let i = 0; i < arr.length; i++) {
//                        newArr [i] = arr [arr.length - i - 1];
//              }
//                return newArr;
//              }
//              console.log(reverseArray(mas));