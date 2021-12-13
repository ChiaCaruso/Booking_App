import { render, todos } from "../js/data.js";

/**
 * Render of "Visite completate" section
 */

const done = (data) => {

    const doneItems = data
        .filter(checked => checked.completed)
        .map(item => `<li>${item.title} <button class="delete delete-item" id="${item.id}" onclick="return confirm('Vuoi eliminare la visita?');"></button></li>`)
        .join("");

    const wrapper = document.querySelector("#wrapper");
    wrapper.className = "wrapper-hash";

    render(wrapper, `
        <div class="banner-list banner-list-done">
            <h3>Visite completate</h3>
            <a href="#todo" class="btn-banner"><img src="./img/todo.png" alt="To do" width="30">Prenotazioni in attesa</a>
            <a href="#add" class="btn-banner"><img src="./img/add.png" alt="Done" width="30"> Aggiungi prenotazione</a>
            <a href="#" class="btn-banner"><img src="./img/home.png" alt="Home" width="30"> Torna alla Home</a>
        </div>
        <a href="#top" id="btn-up"><img src="./img/button-up.png" alt="Home" width="45"></a>
        <div class="wrapper-list">
            <ul>${doneItems}</ul>
        </div>`);

    /**
     * Scroll to the top of the document
     */

    const buttonUp = document.querySelector("#btn-up");
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            buttonUp.style.display = "block";
        } else {
            buttonUp.style.display = "none";
        }
    }

    /**
     * Function to remove item.
     * Doesn't work with JSONPlaceholder.
     */

    const btnsDelete = [...document.querySelectorAll(".delete-item")];
    btnsDelete.forEach(btn => {
        btn.addEventListener("click", (event) => {
            const id = parseInt(event.target.id);

            if (confirm){
                const filtered = todos.filter((item) => item.id !== id);
                return done(filtered);
            }           


        }, { once: true })
    })

}

export { done };
