//        1) Знайти та вивести довижину настyпних стрінгових значень
//        'hello world', 'lorem ipsum', 'javascript is cool'
//        let worldOne = 'hello world';
//        console.log(worldOne.length);

//        let worldTwo = 'lorem ipsum';
//        console.log(worldTwo.length);

//        let worldThree = 'javascript is cool';
//        console.log(worldThree.length);


//        2) Перевести до великого регістру наступні стрінгові значення
//        'hello world', 'lorem ipsum', 'javascript is cool'

//           const sentenceFirst = 'hello world';
//           console.log(sentenceFirst.toUpperCase());

//           const sentenceSekond = 'lorem ipsum';
//           console.log(sentenceSekond.toUpperCase());

//           const sentenceThird = 'javascript is cool';
//           console.log(sentenceThird.toUpperCase());


//        3) Перевести до нижнього регістру наступні стрінгові значення
//        'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

//           const sentenceFirst = 'hello world';
//           console.log(sentenceFirst.toLowerCase());

//           const sentenceSekond = 'lorem ipsum';
//           console.log(sentenceSekond.toLowerCase());

//           const sentenceThird = 'javascript is cool';
//           console.log(sentenceThird.toLowerCase());

//        4) Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

//              const Dirty = ' Dirty string   ';
//              console.log(Dirty.trim());

//        5) Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//                let str = 'Каждый охотник желает знать';
//                let arr = stringToarray(str);
//                document.writeln(arr);

//                let stringToarray = (str) => {
//                return str.split (' ');
//                }
//                let str = 'Каждый охотник желает знать';
//                let arr = stringToarray(str);
//                console.log(arr);
//                document.writeln(arr);

//        6)  Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.\
//        При цьому всі символи рядка необхідно перевести у верхній регістр.
//        let str = "HTML JavaScript PHP";
//
//        document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
//          let insert_dash = (str) => {
//              return str.split(' ').join('-').toUpperCase();
//                      }
//        let string = "HTML JavaScript PHP";
//        console.log(insert_dash(string));
//        document.write(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

//        7) Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу
//        рядка з нижнього регістру у верхній.

//         let str = 'каждый охотник желает знать';

//         let strNew = (str) => {
//         return str[0].toUpperCase()+str.slice(1);

//         }

//         document.write(strNew(str));
//         debugger


//         8)Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

//         let str = 'каждый охотник желает знать';

//        function titleCase(str) {
//        let splitStr = str.toLowerCase().split(' ');
//        for (let i = 0; i < splitStr.length; i++) {
//        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1);
//        }
//        return splitStr.join(' ');
//        }
//        document.write(titleCase(str));
        debugger