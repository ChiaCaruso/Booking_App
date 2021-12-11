import { todos } from "../js/data.js"
import { mainPage } from "../js/mainPage.js"
import { toDo } from "../js/todo.js"
import { done } from "../js/done.js"
import { add } from "../js/add.js"


document.addEventListener('DOMContentLoaded', mainPage);

/**
 * Statement for change location in the page
 */

window.addEventListener('hashchange', () => {
    switch (location.hash) {

        case '#todo':
            toDo(todos)
            break;

        case '#done':
            done(todos)
            break;

        case '#add':
            add();
            break;

        case '':
            mainPage();
            break;
    }
})




