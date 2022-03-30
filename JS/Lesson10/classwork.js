//      - Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться
//      на консоль інформація з цих 2х форм.
//      Кнопка повинна лежати за межами форм (Щоб вимкнути  перезавантаження сторінки)
//      Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

//        let block = document.createElement('div')
//        block.innerHTML = `
//                <form action = "" name = "Form1">
//        <input type = "Text" name = "input1">
//        <input type = "Text" name = "input2">
//        </form>
//                <form action = "" name = "Form2">
//        <input type = "Text" name = "input1form2">
//        <input type = "Text" name = "input2form2">
//        </form>
//       <button> Click me plz </button> `
//        document.body.append(block)
//        let input1 = document.forms.Form1.input1
//        let input2 = document.forms.Form1.input2
//        let input1form2 = document.forms.Form2.input1form2
//        let input2form2 = document.forms.Form2.input2form2
//        const button = document.getElementsByTagName('Button')
//        button[0].onclick = () =>
//        {
//       console.log(input1.value, input2.value, input1form2.value, input2form2.value)
//        }


//      2) Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//      При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//      (Додатковачастина для завдання)
//const input1 = document.createElement('input');
//let input2 = document.createElement('input')
// let input3 = document.createElement('input')
/// let button = document.createElement('button')
// input1.type = 'number'
// input2.type = 'number'
 //button.innerText = 'push me'
// document.body.append(input1, input2, input3, button)
// button.onclick = () => createTable(input1.value, input2.value, input3.value)
//
// function createTable(tr, td, text) {
//     let table = document.createElement('table')
//     table.style.border = '1px solid black'
 //    for (let i = 0; i < tr; i++) {
 //    let tr = document.createElement('tr')
  //       tr.style.border = '1px solid black'
  //       for (let i = 0; i < td; i++) {
   //          let td = document.createElement('td')
  //           td.style.border = '1px solid black'
  //           td.innerText = text
  //          tr.append(td)
   //      }
  //       table.append(tr)
 //   }
//     document.body.append(table)
// }

        const input1 = document.createElement('input')
        let input2 = document.createElement('input')
        let input3 = document.createElement('input')
        let button = document.createElement('button')
        input1.type = 'number'
        input2.type = 'number'
        button.innerText = 'Click me plz'
        document.body.append(input1, input2, input3, button)
        button.onclick = () => createTable(input1.value, input2.value, input3.value)

        function createTable(tr,td, text) {
        let table = document.createElement('table')
                table.style.border = '2px solid red'
                for (let i = 0; i < tr; i++) {
                        let tr = document.createElement('tr')
                        tr.style.border = '2px solid red'
                        for ( let i = 0; i < td; i++) {
                                let td = document.createElement('td')
                               td.style.border = '2px solid red'
                               td.innerText = text
                               tr.append(td)
                       }
                       table.append(tr)
                }
                document.body.append(table)
        }