//      1) Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
//      Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
//      {
//      id: 1,
//      name: 'Leanne Graham',
//      username: 'Bret',
//      email: 'Sincere@april.biz',
//      address: {
//      street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//      }
//      },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//      }
//      }


      class Person {
      constructor (id, name, username, email, street, suite, city, zipcode, lat, lng, phone,
      website, name1, catchPhrase, bs) {
         this.id = id;
         this.name = name;
         this.username = username;
         this.email = email;
         this.address = {
             street,
             suite,
             city,
             zipcode,
             geo: {
                 lat,
                 lng,
             }
         }
         this.phone = phone;
         this.website = website;
         this.company = {
             name: name1,
             catchPhrase,
             bs,
         }
     }
 }

      let newPerson = new Person(1, 'Andrii Dzelisnkiy', '3eJI9', 'dzelua92@gmail.com', 'Park avenue',
      'Apt. 556', 'New York', '212, 718, 917, 347, 646', '-37.3159', '81.1496', '1-770-736-8031 x56442',
      '3eJI9corp@gmail.com', 'Akuna MATATA', 'Multi-layered client-server neural-net', 'harness real-time e-markets');

      console.log(newPerson);
