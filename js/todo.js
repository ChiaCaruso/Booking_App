import { render } from "../js/data.js";

const toDo = (data) => {

    const todoItems = data
        .filter(checked => checked.completed)
        .map(item => `<li>${item.title} <button class="delete" id="${item.id}"><img src="../img/delete.png" width="30"></button></li>`)
        .join("");

    const wrapper = document.querySelector("#wrapper");
    wrapper.className = "wrapper-toDo-Done";

    render(wrapper, `
        <div class="banner-list">
        <h3>Prenotazioni in attesa</h3>
        <a href="#done" class="btn-banner"><img src="./img/check.png" alt="Done" width="30"> Visite completate</a>
        <a href="#" class="btn-banner"><img src="./img/home.png" alt="Home" width="30"> Torna alla Home</a>
        </div>
        <div class="wrapper-list">
            <ul>${todoItems}</ul>
        </div>`);
}

export { toDo };
