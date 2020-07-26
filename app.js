var list = document.getElementById("list");

function addTodo() {
    var todo_item = document.getElementById("todo-item");


    var check = document.createElement('input')
    check.setAttribute("type", "checkbox")
    check.setAttribute("class", "check1")

    // create li tag with text node
    var li = document.createElement('li')
    li.setAttribute("class", "list1")
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(check)
    li.appendChild(liText)

    // create delete button
    var delBtn = document.createElement("button")
    delBtn.setAttribute("class", "far fa-trash-alt btn space")
    delBtn.setAttribute("onclick", "deleteItem(this)")

    // create edit button
    var editBtn = document.createElement("button");
    editBtn.setAttribute("class", "btn far fa-edit space")
    editBtn.setAttribute("onclick", "editItem(this)")

    li.appendChild(delBtn)
    li.appendChild(editBtn)
    
    list.appendChild(li)


    todo_item.value = ""
}

function deleteItem(e) {
    e.parentNode.remove()
}

function editItem(e) {
     var val = prompt("Enter updated value",e.parentNode.childNodes[1].nodeValue)
     e.parentNode.childNodes[1].nodeValue = val;
    console.log(e.parentNode.childNodes[1].nodeValue)
}

function deleteAll() {
    list.innerHTML = ""
}

