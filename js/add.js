import { render, API } from "../js/data.js";

const add = () => {

    const wrapper = document.querySelector("#wrapper");
    wrapper.className = "wrapper-hash";

    render(wrapper, `
        <div class="banner-list banner-list-add">
            <h3>Nuova prenotazione</h3>
            <a href="#todo" class="btn-banner"><img src="./img/todo.png" alt="To do" width="30">Prenotazioni in attesa</a>
            <a href="#" class="btn-banner"><img src="./img/home.png" alt="Home" width="30"> Torna alla Home</a>
        </div>
            <div id="wrapper-form">
                <form id="patient">
                    <div class="row">
                        <label for="id">ID paziente:</label>
                        <input type="text" id="id" name="id" placeholder="ID">
                     </div>

                    <div class="row">
                        <label for="title">Esami diagnostici:</label>
                        <textarea id="title" name="title" placeholder="Esami"></textarea>
                    </div> 

                    <button id="btn-add" class="btn">Salva</button> 
                </form>
            </div>`);

        const form = document.querySelector("#patient");
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const newPatient = {
                userId: 1,
                id: event.target.id.value,
                title: event.target.title.value,
                completed: false
            };
        fetch (API, {
            method: 'POST',
            headers: {
                "Content-Type": "application/JSON"
            },
            body: JSON.stringify(newPatient)
        })
            .then(response => response.json())
            .then(console.log(newPatient))
            .then(() => (location.hash = ""));
        });
}

export { add };