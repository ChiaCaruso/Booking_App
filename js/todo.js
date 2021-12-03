import { render, API } from "../js/data.js";

/**
 * Render of "Prenotazioni in attesa" section
 */

const toDo = (data) => {

    const todoItems = data
        .filter(checked => checked.completed === false)
        .map(item => `<li>${item.title} <button class="delete change-completed" id="${item.id}"><img src="../img/delete.png" width="35"></button></li>`)
        .join("");

    const wrapper = document.querySelector("#wrapper");
    wrapper.className = "wrapper-hash";

    render(wrapper, `
        <div class="banner-list banner-list-todo">
            <h3>Prenotazioni in attesa</h3>
            <a href="#done" class="btn-banner"><img src="./img/check.png" alt="Done" width="30"> Visite completate</a>
            <a href="#add" class="btn-banner"><img src="./img/add.png" alt="Done" width="30"> Aggiungi prenotazione</a>
            <a href="#" class="btn-banner"><img src="./img/home.png" alt="Home" width="30"> Torna alla Home</a>
        </div>
        <a href="#top" id="btn-up"><img src="./img/button-up.png" alt="Home" width="45"></a>
        <div class="wrapper-list">
            <ul>${todoItems}</ul>
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
     * Function to change value of item and move it in "Visite completate" section.
     * Doesn't work with JSONPlaceholder.
     */

    const btnsChange = [...document.querySelectorAll(".change-completed")];
    btnsChange.forEach(btn => {
        btn.addEventListener("click", (event) => {
            const id = parseInt(event.target.id);

            fetch(`${API}/${id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/JSON"
                },
                body: JSON.stringify({
                    completed: true
                }),
            })
                .then(response => response.json())

        })
    })


}

export { toDo };
