
//1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor).
//Скласти результат цих чисел в змінній result.

//        let a = Array(10).fill().map(() => Math.round(Math.random() * 10))
//        Array(10) створює масив довжиною в 10 чисел потім ти заповнюєш пусті місця числами.
//        В цьому допомагає метод .fill(). а потім map() це функція, яка бере по черзі кожне пусте місце і кладе туди
//        Math.round(Math.random() * 10 (тобто якесь число згенероване)


//2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
           //let book = {
           //title: 'Thinking, Fast and Slow',
           //page: 512,
           //category: 'psychology'
           //}
//3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
           //let book = {
           //title: 'Atomic Habits',
           //page: 320,
           //genre: 'Psychology',
                    //authors: {
                    //autor: {
                    //name: 'James',
                    //surname: 'Clear',
                    //},
                    //autor2: {
                        //name: 'Simon',
                        //surname: 'Sinek',
                    //}
                    //}
                    //}
        // ЗАВДАННЯ4
        // Cтворити маcив об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори.
        //Вивести кожну книгу як окремий об'єкт



//        let book = []
//
//        book[10] = {
//        title: 'Atomic Habits',
//        page: 320,
//        genre: 'Psychology',
//        authors: {
//        author1: {
//        name: 'Clear',
//        surname: 'James',
//        },
//        author2: {
//        name: 'Sinek',
//        surname: 'Simon',
//        }
//        }
//        }
//        book[15] = {
//        title: 'Deep Work',
//        str: 304,
//        genre: 'Psychology',
//        authors: {
//        author1: {
//        name: 'Cal',
//        surname: 'Newport',
//        }
//        }
//        }
//        book[20] = {
//        title: 'No Rules Rules',
//        str: 320,
//        genre: 'Culture in the workspace',
//        authors: {
//        author1: {
//        name: 'Reed',
//        surname: 'Hastings',
//        },
//        author2: {
//        name: 'Erin',
//        surname: 'Meyer',
//        }
//        }
//        }


//          console.log(book[10]);
//          console.log(book[15]);
//          console.log(book[20]);

//      ЗАВДАННЯ5
//      Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//      Значення площі зберігати в змінній s.

//      let height = 23;
//      let width = 10;
//      let s = height * width;
//      console.log(s);


//      ЗАВДАННЯ6
//      Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
//      результат помістіть у змінну v.

//      let heightC = 10;
//      let dC = 4;
//      const PI = 3.14159265359;
//      let v = Math.pow(dC / 2, 2) * heightC * PI;
//      console.log(v);


//      ЗАВДАННЯ7
//      У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
//      Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь)
//      або оператор зведення в ступінь **).

//      let n = 3;
//      let m = 4;
//      let z = Math.sqrt((Math.pow (n, 2) + Math.pow (m, 2)));
//      console.log(z);

