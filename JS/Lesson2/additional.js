//      1) Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
//      Потрібно зробити перевірку якщо кількість елементів у масиві більше або дорівнює 3,
//      то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//      Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

//      let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
//      (friends.length >= 3) ? console.log('Це великий масив, в якому 3 і більше елементи') :
//      (friends.length > 0 && friends.length < 3) ? console.log('Це маленький масив, в якому менше 3-х елементів!') :
//      console.log('Це не являється відповідним значенням');

//      let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
//      if (friends.length >= 3) {
//      console.log('Це великий масив, в якому 3 і більше елементи');
//      }
//      else if (friends.length > 0 && friends.length < 3) {
//      console.log('Це маленький масив, в якому менше 3-х елементів');
//      }
//      else {
//      console.log('Це не являється відповідним значенням');
//      }

//      2) Перепишіть конструкцію if з використанням умовного оператора '?':
//      let result;
//      if (a + b < 4) {
//      result = 'Мало';
//      }
//      else {
//      result = 'Багато';
//      }

//      let a = 1;
//      let b = 2;
//      let result;
//      if (a + b < 4){
//      result = 'Мало';
//      } else {
//      result = 'Багато';
//      }
//      (a + b < 4) ? result = 'Мало' : result = 'Багато';
//      console.log(result);

//      3) Маємо будь яке число від -100,0,+100 потрібно перевірити яким є число: позитивним, негативним або нулем
//      напишіть це тернарним оператором

//      let number = +prompt('Введіть число від -100 до 100');
//      let result;
//
//      result = (number === 0) ? console.log('Number zero') :
//      (number >= -100 && number < 0) ? console.log('Number negative') :
//      (number > 0 && number <= 100) ? console.log('Number positive') :
//      console.log('Number Unknown');


