import {project,toDo} from "./proj&todo";
import {format} from 'date-fns';

const domBuilder = (function(){

    const projectDOM = () => {
        let projects = project.projects;
        let projectContainer = document.querySelector('#myProj>div:nth-child(2)');
        // console.log(projects);
        projectContainer.innerHTML="";

        for(let obj of projects){
            let projectDomElement = document.createElement('button');
            projectDomElement.textContent = '#'+obj.name;
            projectContainer.appendChild(projectDomElement);
        }
    }
    const taskDOM = () =>{
        let tasks = toDo.toDoList;
        const toDoList = document.querySelector('#toDoList');

        toDoList.innerHTML="";

        for(let task of tasks){
            const todoContainer = document.createElement('div');
            todoContainer.classList.add('todo');
            toDoList.appendChild(todoContainer);

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = task.id;
            todoContainer.appendChild(checkbox);

            const datentitle = document.createElement('div');
            datentitle.classList.add('datentitle');
            todoContainer.appendChild(datentitle);

            const title = document.createElement('p');
            title.classList.add('title');
            title.textContent = task.title;
            datentitle.appendChild(title);

            const date = document.createElement('p');
            date.textContent = format(task.dueDate,'MM/dd/yy');
            datentitle.appendChild(date);

            const desc = document.createElement('p');
            desc.classList.add('desc');
            desc.textContent = task.desc;
            todoContainer.appendChild(desc);

            const buttonContainer = document.createElement('div');
            todoContainer.appendChild(buttonContainer);

            const projectButton = document.createElement('button');
            projectButton.value = task.id;
            projectButton.textContent=task.project;
            buttonContainer.appendChild(projectButton);

            const notesButton = document.createElement('button');
            notesButton.value = task.id;
            notesButton.textContent='Notes+';
            buttonContainer.appendChild(notesButton);

            const checkListButton = document.createElement('button');
            checkListButton.value = task.id;
            checkListButton.textContent='Checklist+';
            buttonContainer.appendChild(checkListButton);

            const deleteButton = document.createElement('button');
            deleteButton.value = task.id;
            deleteButton.textContent='Delete';
            buttonContainer.appendChild(deleteButton);          
        }
        
    }
    return{projectDOM,taskDOM}   

})();

export default domBuilder;