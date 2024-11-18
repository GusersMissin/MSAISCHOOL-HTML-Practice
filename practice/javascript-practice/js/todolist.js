const todo = document.getElementById("todo");
const addButton = document.getElementById("add-button")
const todoList = document.getElementById("todo-list")

addButton.addEventListener('click', ()=>{
    console.log(todo.value)
    if(todo.value === ""){
        alert("할 일을 입력해주세요.")
    }else{
        const div = document.createElement("div")

        const checkBox = document.createElement("input")
        checkBox.setAttribute("type","checkbox")

        const task = document.createElement("span")
        task.textContent = todo.value

        const deleteBox = document.createElement("button")
        deleteBox.setAttribute('id',`${todo}_delete`)
        deleteBox.textContent = "제거하기"

        div.append(checkBox, task, deleteBox)
        todoList.append(div)
    }
})

deleteButton.addEventListener('click', ()=>{

})