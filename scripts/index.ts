let myButton = document.querySelector('.main-btn');
let myInput= document.querySelector('input');
let myList = document.querySelector('ul');

myButton?.addEventListener('click',(e) => {
    e.preventDefault();
    let newTask = document.createElement('li')
    let task: string;

    if (myInput && myInput.value !== null) {
        task = myInput.value;
    } else{
        let addTask = prompt('Please add a Task');

        if (addTask){
            task = addTask;
        }else{
            alert('No task was added');
            return;
        }
    }

    let newSpan = document.createElement('span');
    newSpan.textContent = task;
    newTask.append(newSpan);

    let editButton = document.createElement('button');
    editButton.className = 'edit';
    editButton.textContent = 'Edit'

    let deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.textContent = 'Delete'


    let btn = document.createElement('div');
    btn.className = 'other-btn';
    btn.append(editButton);
    btn.append(deleteButton);

    
    newTask.append(btn);
    myList?.append(newTask);
    if (myInput){
        myInput.value = ''
    }
});

myList?.addEventListener('click',(e) => {
    const target = e.target as HTMLElement;
    let parent = target.parentElement?.parentElement;

    if (!parent){
        return;
    }

    if(target.className === 'edit'){
        let spanElement =  parent.querySelector('span');
        let editedTask = prompt('Add the edited task');

        if (spanElement && editedTask){
           spanElement.textContent = editedTask ;
        } else{
            alert('Task was not edited')
        }

    } else if (target.className === 'delete'){
        parent.remove();
    }
});



