const input = document.querySelector('.input');
const addTask = document.querySelector('.addTask');
const tasks = document.querySelector('.tasks');

// Limpa o campo de input e foca novamente
function limpaInput() {
    input.value = '';
    input.focus();
}

// Função que anima e remove a tarefa
function delTask(li) {
    li.classList.add('fade-out'); // Anima
    setTimeout(() => {
        li.remove(); // Remove após animação
    }, 300);
}

function saveTasks(){
    const liTasks = tasks.querySelector('li');
    const taskLists = [];

    for (let task of liTasks) {
        
    }
 } 

// Cria uma nova tarefa na lista
function criaTarefa(inputText) {
    const li = document.createElement('li');
    li.classList.add('task-item');

    const span = document.createElement('span');
    span.textContent = inputText;

    // Ao clicar na tarefa → risca e remove com animação
    span.addEventListener('click', function () {
        span.classList.add('completed'); // Adiciona estilo riscado
        delTask(li); // Remove com animação
    });

    salvarTarefa(){

    }

    li.appendChild(span);
    tasks.appendChild(li);
    limpaInput();
}

// Adiciona tarefa ao clicar no botão
addTask.addEventListener('click', function () {
    if (!input.value) return;
    criaTarefa(input.value);
});

// Adiciona tarefa ao apertar Enter
input.addEventListener('keypress', function (e) {
    if ( e.keyCode === 13) {
        if (!input.value) return;
        criaTarefa(input.value);
    }
});
