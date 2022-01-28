import BotaoConclui from './Componentes/concluiTarefa.js';
import BotaoDeleta from './Componentes/deletaTarefa.js';

const criarTarefa = (evento) => {
    evento.preventDefault();

    const lista = document.querySelector ("[data-list]");
    const input = document.querySelector ("[data-form-input]");
    const valor = input.value;

    const tarefa = document.createElement("li");
    tarefa.classList.add("nova_tarefa");
    const conteudo = `<p class="conteudo">${valor}</p>`;

    tarefa.innerHTML = conteudo;
    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeleta());
    lista.appendChild(tarefa);
    input.value = " ";
}

const novaTarefa = document.querySelector("[data-form-button]");

novaTarefa.addEventListener("click", criarTarefa);