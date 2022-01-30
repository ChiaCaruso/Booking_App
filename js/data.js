/**
 * Project rest API endpoint
 */

const todos = [];
const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const dataAPI = await response.json();
    const getTodos = dataAPI.map((item) => {
        todos.push(item)
    });
};

document.addEventListener("DOMContentLoaded", getData);

/**
 * Main function to rendering the page with each section
 */

const render = (wrapper, elements) => { wrapper.innerHTML = elements };


export { todos, render };

