//   1) Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phoneстворити пустий масив,
//   ' +
//   ' наповнити його 10 об'єктами new User(....)


//    function User(id, name, surname, email, phone) {
//    this['id'] = id;
//    this['name'] = name;
//    this['surname'] = surname;
//    this['email'] = email;
//    this['phone'] = phone;
//    }
//    let newUser = [
//    new User(1, 'Andrii', 'Dzelinskyi', 'dzelua92@gmai.com', '739510107'),
//    new User(2, 'Lala', 'Mana', 'manalala@gmail.com', '8326643832'),
//    new User(3, 'Edgar', 'Po', 'edgar_po@icloud.com', '3253764524'),
//    new User(4, 'Yuval', 'Harari', 'harari@gmail.com', '4367344225'),
//    new User(5, 'Rob', 'Hoskins', 'Hoskins@hbam.com', '1356344343'),
//    new User(6, 'Joshua', 'Bairn', 'Bairn@hbam.com', '3256242465'),
//    new User(7, 'Helen', 'Russel', 'Russel@gmail.com', '609490949'),
//    new User(8, 'Charles', 'Duchigg', 'Duchigg@gmail.com', '83242544'),
//    new User(9, 'Leif', 'Babin', 'Babin@gmail.com', '135634493'),
//    new User(10, 'Rayan', 'Holiday', 'Holiday@gmail.com', '436734234'),
//    ]
//    console.log(newUser);

//      2)Взяти масив з User[] з попереднього завдання, та відфільтрувати, залишивши тільки об'єкти з парними id (filter)

//      let filter = newUser.filter(function(x) {
//      return x.id % 2 === 0;
//      })
//      console.log(filter);


//      3) Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

//      let sort = newUser.sort(function sort (a,b)
//      {
//      return a.id - b.id;
//      })
//
//      console.log(sort)





//      3) Створити класс для об'єктів Client з полями id, name, surname , email, phone, order
//      (поле є масивом зі списком товарів)

//       class Client {
//            constructor (id, name, surname , email, phone, order) {
//            this._id = id;
//            this._name = name;
//            this._surname = surname;
//            this._email = email;
//            this._phone = phone;
//            this._order = order;

//       4) Створити пустий масив, наповнити його 10 об'єктами Client


//        let clientArr = []


//        clientArr [0] = ['Never give up','Never give up','Never give up','Never give up'];
//        clientArr [1] = ['qqqqqq'];
//        clientArr [2] = ['Never give up', 2, 3];
//        clientArr [3] = ['Never give up','Never give up'];
//        clientArr [4] = ['Never give up','Never give up','Never give up',];
//        clientArr [5] = ['Never give up','Never give up','Never give up','Never give up','Never give up'];
//        clientArr [6] = ['Never give up','Never give up','Never give up','Never give up'];
//        clientArr [7] = ['Never give up','Never give up'];
//        clientArr [8] = ['Never give up','Never give up','Never give up',];
//        clientArr [9] = ['Never give up','Never give up',];

//        console.log(clientArr);

//        5) Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості
//        товарів в полі order по зростанню. (sort)

//        let sort = clientArr.sort((a,b)=>a.order.length - b.order.length)
//        console.log(sort);
