import { render } from "../js/data.js";

const mainPage = () => {

    const wrapper = document.querySelector("#wrapper");
    wrapper.className = "wrapper-mainPage";

    render(wrapper, `
        <div class="container">
        <img src="./img/todo.png" alt="To do" width="60">
        <h3>Prenotazioni in attesa</h3>
        <a href="#todo"><button id="todo-btn" class="btn">VAI</button></a>
        </div>

        <div class="container">
        <img src="./img/check.png" alt="Done" width="60">
        <h3>Visite completate</h3>
        <a href="#done"><button id="done-btn" class="btn">VAI</button></a>
        </div>

        <div class="container">
        <img src="./img/add.png" alt="Aggiungi" width="60">
        <h3>Aggiungi prenotazione</h3>
        <a href="#add"><button id="done-btn" class="btn">VAI</button></a>
        </div>`);
};

export { mainPage }