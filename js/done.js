import { render } from "../js/data.js";

const done = (data) => {
    
    const doneItems = data
        .filter(checked => checked.completed === false)
        .map(item => `<li>${item.title} <button class="delete" id="${item.id}"><img src="../img/delete.png" width="35"></button></li>`)  
        .join("");

    const wrapper = document.querySelector("#wrapper");
    wrapper.className = "wrapper-toDo-Done";

    render(wrapper, `
        <div class="banner-list banner-list-done">
        <h3>Visite completate</h3>
        <a href="#todo" class="btn-banner"><img src="./img/todo.png" alt="To do" width="30">Prenotazioni in attesa</a>
        <a href="#" class="btn-banner"><img src="./img/home.png" alt="Home" width="30"> Torna alla Home</a>
        </div>
        <div class="wrapper-list">
            <ul>${doneItems}</ul>
        </div>`);
}

export { done };
