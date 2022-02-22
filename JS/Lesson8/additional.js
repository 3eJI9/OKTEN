        function collect (element) {

        let xxx = [];
        collect(element,xxx);
        function collect (element1) {
        if (element1.classList.length > 0) {
        for (let i = 0; i < element1.classList.length; i++) {
        xxx.push(element1.classList[i]);
        }
        }
        let children = element1.children;
        for (const child of children) {
        collect(child)
        }
        }
        console.log(xxx);
        }

        collect(document.body);


