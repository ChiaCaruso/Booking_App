import { API } from "../js/data.js"
import { toDo } from "../js/todo.js"

document.addEventListener('DOMContentLoaded', () => {

    fetch (API)
        .then ((response) => response.json())
        .then ((data) => toDo(data))

    window.addEventListener('hashchange', () => {
        switch(location.hash) {
            case '#todo':
                toDo();
            break;
        }
    })

})