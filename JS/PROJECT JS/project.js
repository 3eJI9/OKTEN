
        const wrapUser = document.getElementsByClassName('wrapUser')[0]
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
        users.map(item => {
            const userItem = document.createElement('div')
            userItem.classList.add('userItem')
            userItem.innerHTML += `
            <h2> user ID:${item.id}<br> name: ${item.name}</h2>
            `
            let btn = document.createElement('button')
            btn.innerText = 'user-details'
            btn.onclick = () => {
                location.href=`user-details.html?Use_Id=${item.id}`
            }
            userItem.appendChild(btn)
            wrapUser.appendChild(userItem)
        })

        })
