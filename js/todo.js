const toDoForm = document.querySelector('.to-do-form');
const toDoInput = document.querySelector('.to-do');
const toDoList = document.createElement('ul');
const TODOS_KEY = 'todos';

toDoForm.appendChild(toDoList);

// todo 배열을 JSON 포맷으로 변환
let toDos = JSON.parse(localStorage.getItem(TODOS_KEY)) || [];

const saveToDos = () => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

const deleteToDo = (event) => {
    const li = event.target.parentElement;
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
    saveToDos();
    li.remove();
};

const paintToDo = (todo) => {
    const li = document.createElement('li');
    li.id = todo.id;
    li.innerText = todo.text;

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = '❌';
    deleteBtn.addEventListener('click', deleteToDo);

    li.appendChild(deleteBtn);
    toDoList.appendChild(li);
};

// 새로고침 후 기존 투두 목록 다시 출력
document.addEventListener('DOMContentLoaded', () => {
    toDos.forEach(paintToDo);
});

toDoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const newToDo = toDoInput.value.trim();
    if (newToDo) {
        const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
    toDoInput.value = '';
    }
});
