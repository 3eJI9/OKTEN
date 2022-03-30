//            1) Створити произвольный елемент с id = text.
//            Використовуючи JavaScript, сделайте так, чтобы при кліку на кнопку пропадав элемент с id="text".
//            let div = document.createElement('div')
//            div.id='text'
//            div.innerText='3eJI9 3eJI9 3eJI9'
//            document.body.appendChild(div)
//            div.onclick = ()=> div.classList.toggle("show-hide");


//            2) Створіть кнопку, при кліку на яку, она буде приховувати сама себе.


//            let button = document.createElement('button')
//            button.innerText = 'push me'
//            button.onclick = () => button.classList.toggle('show-hide')
//            document.body.appendChild(button)


//           3) Створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на
//           кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача

//            let inputAge = document.createElement('Input')
//            inputAge.ariaPlaceholder = 'Enter your age'
//            let button = document.createElement('button')
//            button.innerText = 'Push me plz'
//            let p = document.createElement('p')
//            document.body.appendChild(inputAge)
//            document.body.appendChild(button)
//            document.body.appendChild(p)

//            button.onclick = () => {
//                  let age = inputAge.value
//                  if (age < 18) {
//                        p.innerText = 'Sorry Mikel'
//                  } else {
//                        p.innerText = 'You adult ;-)'
//                  }
//                  console.log(age)
//            }

//          4) Створіть меню, яке розкривається / закривається при натисканні


//            let block = document.createElement('div')
//            let tittle = document.createElement('h2')
//            tittle.innerText = 'menu hide/show'
//            let ul = document.createElement("ul")
//            for (let i = 0; i < 30; i++) {
//                  let li = document.createElement('li')
//                  li.innerText = '3eJI9 - ' +i
//                  ul.appendChild(li)
//            }
//            tittle.onclick = () => ul.classList.toggle('show-hide')
//            block.append(tittle, ul)
//            document.body.appendChild(block)


//          - Створити список коментарів , приклад объекта коментаря -
//                {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//          Добавити кожному коментарю по кнопці для звертання його body
//          const comments = [
//          {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//          {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//          {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//          {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//          {title : 'lorem', body:'lorem ipsum dolo sit ameti'}
//          ]
//          let block = document.createElement('div')
//          document.body.appendChild(block)
//          comments.map((item,index)=>{
//          block.innerHTML +=`
//          <div><h1>${item.title}-${index+1}</h1><p>${item.body}</p> <button>show/hide</button></div>
//     `
//          })
//          let buttons = document.getElementsByTagName('button')
//          for (const button of buttons) {
//          button.onclick= function(e){
//          e.target.previousElementSibling.classList.toggle('show-hide')
//          }
//          }
            const comments = [
                  {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
                  {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
                  {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
                  {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
                  {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
                  {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
                  {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
            ]
            let block = document.createElement('div')
            document.body.appendChild(block)
            comments.map((item, index) =>
            {
            block.innerHTML += `<div><h1>${item.title}-${index + 1}</h1><p>${item.body}</p> <button>show/hide</button></div>`
            })
            let buttons = document.getElementsByTagName('button')
            for (const button of buttons) {
                  button.onclick = function (e) {
                        e.target.previousElementSibling.classList.toggle('show-hide')
                  }
            }
