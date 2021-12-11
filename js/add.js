import { render, todos } from "../js/data.js";

/**
 * Render of "Aggiungi prenotazione" section
 */

const add = () => {

    const wrapper = document.querySelector("#wrapper");
    wrapper.className = "wrapper-hash";

    render(wrapper, `
        <div class="banner-list banner-list-add">
            <h3>Nuova prenotazione</h3>
            <a href="#todo" class="btn-banner"><img src="./img/todo.png" alt="To do" width="30">Prenotazioni in attesa</a>
            <a href="#done" class="btn-banner"><img src="./img/check.png" alt="Done" width="30"> Visite completate</a>
            <a href="#" class="btn-banner"><img src="./img/home.png" alt="Home" width="30"> Torna alla Home</a>
        </div>
            <div id="wrapper-form">
                <form id="patient">
                    <div class="row">
                        <label for="id">ID paziente:</label>
                        <input type="text" id="id" name="id" placeholder="ID" required>
                     </div>

                    <div class="row">
                        <label for="title">Esami diagnostici:</label>
                        <textarea id="title" name="title" placeholder="Esami" required></textarea>
                    </div> 

                    <button id="btn-add" class="btn" type="submit">Salva</button> 
                </form>
            </div>`);

    const form = document.querySelector("#patient");
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const newPatient = {
            userId: 1,
            id: parseInt(event.target.id.value),
            title: event.target.title.value,
            completed: false
        };

        todos.unshift(newPatient);

        const modale = document.querySelector(".modale");
        const modaleText = document.querySelector(".modale-text");
        modale.classList.toggle("modale-on");
        modaleText.textContent = "Prenotazione aggiunta correttamente!";
        setTimeout(() => {
            modale.classList.toggle("modale-on");
            form.reset();
        }, 2000);

    });
}
console.log(todos)

export { add };