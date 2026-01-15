const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");

const TODOS_KEY = "todos"
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  }

function deleteToDo(event) {
    const li = event.target.parentElement;
    console.log(li.id);
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
  }



function paintToDo(newTodo) { // newTodo는 이제 {text: "...", id: 123} 객체입니다.
    const li = document.createElement("li");
    li.id = newTodo.id; // 이제 id가 정상적으로 들어갑니다.
    const span = document.createElement("span");
    span.innerText = newTodo.text; // .text를 붙여줘야 글자가 나옵/니다.

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);    
}
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj); // [수정] 단순 텍스트가 아닌 '객체'를 넣습니다.
    paintToDo(newTodoObj);  // [수정] '객체'를 넘겨야 id가 생성됩니다.
    saveToDos(); 
}

toDoForm.addEventListener("submit", handleToDoSubmit);



const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; 
    
    // 이 부분이 핵심입니다!
    // 예전에는 parsedToDos가 ["a", "b"] 였지만, 
    // 이제는 [{text:"a", id:123}, {text:"b", id:456}] 형태입니다.
    parsedToDos.forEach(paintToDo); 
}