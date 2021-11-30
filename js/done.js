import { render } from "../js/data.js";

const done = (data) => {
    
    const doneItems = data
        .filter(checked => checked.completed === false)
        .map(item => `<li>${item.title}</li>`)  
        .join("");

    const wrapper = document.querySelector("#wrapper");
    wrapper.className = "wrapper-toDo-Done";

    render(wrapper, `
        <div class="banner-list">
        <h3>Visite completate</h3>
        </div>
        <div class="wrapper-list">
            <ul>${doneItems}</ul>
        </div>`);
}

export { done };
