var myButton = document.querySelector('.main-btn');
var myInput = document.querySelector('input');
var myList = document.querySelector('ul');
myButton === null || myButton === void 0 ? void 0 : myButton.addEventListener('click', function (e) {
    e.preventDefault();
    var newTask = document.createElement('li');
    var task;
    if (myInput && myInput.value !== null) {
        task = myInput.value;
    }
    else {
        var addTask = prompt('Please add a Task');
        if (addTask) {
            task = addTask;
        }
        else {
            alert('No task was added');
            return;
        }
    }
    var newSpan = document.createElement('span');
    newSpan.textContent = task;
    newTask.append(newSpan);
    var editButton = document.createElement('button');
    editButton.className = 'edit';
    editButton.textContent = 'Edit';
    var deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.textContent = 'Delete';
    var btn = document.createElement('div');
    btn.className = 'other-btn';
    btn.append(editButton);
    btn.append(deleteButton);
    newTask.append(btn);
    myList === null || myList === void 0 ? void 0 : myList.append(newTask);
    if (myInput) {
        myInput.value = '';
    }
});
myList === null || myList === void 0 ? void 0 : myList.addEventListener('click', function (e) {
    var _a;
    var target = e.target;
    var parent = (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
    if (!parent) {
        return;
    }
    if (target.className === 'edit') {
        var spanElement = parent.querySelector('span');
        var editedTask = prompt('Add the edited task');
        if (spanElement && editedTask) {
            spanElement.textContent = editedTask;
        }
        else {
            alert('Task was not edited');
        }
    }
    else if (target.className === 'delete') {
        parent.remove();
    }
});
