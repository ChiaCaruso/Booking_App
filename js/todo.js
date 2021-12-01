import { render } from "../js/data.js";

const toDo = (data) => {

    const todoItems = data
        .filter(checked => checked.completed  === false)
        .map(item => `<li>${item.title} <button class="delete" id="${item.id}"><img src="../img/delete.png" width="35"></button></li>`)
        .join("");

    const wrapper = document.querySelector("#wrapper");
    wrapper.className = "wrapper-hash";

    render(wrapper, `
        <div class="banner-list banner-list-todo">
            <h3>Prenotazioni in attesa</h3>
            <a href="#done" class="btn-banner"><img src="./img/check.png" alt="Done" width="30"> Visite completate</a>
            <a href="#" class="btn-banner"><img src="./img/home.png" alt="Home" width="30"> Torna alla Home</a>
        </div>
        <div class="wrapper-list">
            <ul>${todoItems}</ul>
        </div>`);
}

export { toDo };
