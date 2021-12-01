import { API } from "../js/data.js"
import { mainPage } from "../js/mainPage.js"
import { toDo } from "../js/todo.js"
import { done } from "../js/done.js"
import { add } from "../js/add.js"

document.addEventListener('DOMContentLoaded', mainPage);


// window.onload = function () {

//     const toDoBTN = document.querySelector("#todo-btn");
//     toDoBTN.addEventListener("click", () => {
//         fetch(API)
//             .then((response) => response.json())
//             .then((data) => toDo(data))
//     });
// }


    window.addEventListener('hashchange', () => {
        switch(location.hash) {
            
            case '#todo':
                fetch(API)
                .then((response) => response.json())
                .then ((data) => toDo(data))
            break;

            case '#done':
                fetch(API)
                .then((response) => response.json())
                .then((data) => done(data))
            break;

            case '#add':
                add();
            break;

            case '':
                mainPage();
            break;
        }
    })

