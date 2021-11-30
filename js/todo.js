import { render } from "../js/data.js";

const toDo = (data) => {

    const todoItems = data
        .filter(checked => checked.completed)
        .map(item => `<li>${item.title}</li>`)
        .join("");

    const wrapper = document.querySelector("#wrapper");

    render(wrapper, `
        <div class="wrapper-list">
            <h3>Prenotazioni in attesa</h3>
            <ul>${todoItems}</ul>
        </div>`);
}

export { toDo };
