//      Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!

//      1) Напишіть код,  котрий :
//      -- отримує текст з параграфа з id "content"

        let byIdContent = document.getElementById('content');
        console.log(byIdContent.innerText);

//      2) отримує текст з блоку з id "rules"

        let byIdRules = document.getElementById('rules');
        console.log(byIdRules.innerText);

//      3) Замініть текст параграфа з id 'content' на будь-який інший

        let replacementContent = byIdContent.innerText = '3eJI9man!'
        console.log(replacementContent);

//      4) замініть текст параграфа з id 'rules' на будь-який інший

        let replacementRules = byIdRules.innerText = 'Через 20 років ви будете розчаровані тими речами, ' +
            'які ви не робили, ніж тими, які ви зробили. Так відступайте від тихої пристані. Відчуйте попутний ' +
            'вітер у вашому вітрилі. Рухайтесь уперед, дійте, відкривайте!\n'
        console.log(replacementRules);

//      5) змініть кожному елементу колір фону на червоний

        let elements = document.body.children;
        for (const bgRed of elements) {
        bgRed.style.backgroundColor = 'red';
        }

//      6) Змініть кожному елементу колір тексту на зелений

        for (const cBlue of elements) {
        cBlue.style.color = 'green'
        }

//      7) Отримати весь список класів елемента з id=rules і вивести їх в console.log

        console.log(byIdRules);

//      8) поміняти колір тексту у всіх елементів fc_rules на червоний

        let fcRules = document.getElementsByClassName('fc_rules');
        for (const fcRule of fcRules) {
        fcRule.style.color = 'blue';
        }