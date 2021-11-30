import { render } from "../js/data.js";

const done = (data) => {
    
    const doneItems = data
        .filter(checked => checked.completed === false)
        .map(item => `<li>${item.title}</li>`)  
        .join("");

    const wrapper = document.querySelector("#wrapper");

    render(wrapper, `
        <div class="wrapper-list">
            <h3>Visite completate</h3>
            <ul>${doneItems}</ul>
        </div>`);
}

export { done };
