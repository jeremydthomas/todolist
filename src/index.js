//selectors
const addToDoButton = document.getElementById('addToDo');
const inputField = document.getElementById('inputField');
const toDoList = document.getElementById('toDoContainer');

//event listeners
addToDoButton.addEventListener('click', addToDo);
toDoList.addEventListener('click', deleteButton);
//functions
function addToDo(event) {
	//ToDO DIV
	const todoDiv = document.createElement('div');
	todoDiv.classList.add('todo');
	//create li
	const list = document.createElement('li');
	list.innerText = inputField.value;
	list.classList.add('todo-item');
	todoDiv.appendChild(list);
	//check mark button
	const completedButton = document.createElement('button');
	completedButton.innerText = 'Complete';
	completedButton.classList.add('complete-btn');
	todoDiv.appendChild(completedButton);
	// delete button
	const deleteButton = document.createElement('button');
	deleteButton.innerText = 'Delete';
	deleteButton.classList.add('delete-btn');
	todoDiv.appendChild(deleteButton);
	//append to list
	toDoList.append(todoDiv);
	//clear todo input value
	inputField.value = '';
}

function deleteButton(e) {
	const item = e.target;
	//delete todo
	if (item.classList.contains('delete-btn')) {
		const todo = item.parentElement;
		todo.remove();
	}
	//clear list
	if (item.classList.contains('complete-btn')) {
		const todo = item.parentElement;
		todo.classList.toggle('completed');
	}
}
