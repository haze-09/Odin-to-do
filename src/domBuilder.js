import {project,toDo} from "./proj&todo";
import { buttonMagic } from "./buttons";
import filter from "./filters";
import {format} from 'date-fns';
import editIcon from './svgs/edit.svg'

const domBuilder = (function(){

    const projectDOM = () => {
        let projects = project.projects;
        let projectContainer = document.querySelector('#myProj>div:nth-child(2)');
        // console.log(projects);
        projectContainer.innerHTML="";

        for(let obj of projects){
            let projectDomElement = document.createElement('button');
            projectDomElement.textContent = obj.name;
            projectDomElement.addEventListener('click',(event)=>{
                // taskDOM(filter.project(event.target.textContent));
                projectPageDOM(event.target.textContent);
            })
            projectContainer.appendChild(projectDomElement);
            
        }
    }

    const deleteRemover = ()=>{
        const oldDelete = document.querySelector('#deleteProj');
        if(oldDelete){
            oldDelete.remove();
        }
    }

    const projectPageDOM = (text)=>{
        let title = document.querySelector('#title');
        title.textContent = text;
        title.dataset.project = 'true';
        deleteRemover();
        let Delete = document.createElement('button');
        Delete.textContent = 'Delete Project';
        Delete.id = 'deleteProj';
        Delete.addEventListener('click',()=>{
            title.textContent = 'Today';
            title.dataset.project = false;
            domBuilder.deleteRemover();
            buttonMagic.page = 'today';
            taskDOMPageSwitcher(buttonMagic.page);

        })
        let brother = document.querySelector('#taskDialogOpen');
        brother.insertAdjacentElement('afterend',Delete);

        
        taskDOM(filter.project(text));    
    }

    function priority(priority,element){
        switch (priority) {
            case 'low':
                element.classList.add('low');                
                break;
            case 'medium':
                element.classList.add('medium');
                break;
            case 'high':
                element.classList.add('high');
                break;        
            default:
                break;
        }
    }

    const taskDOM = (tasks) =>{
        // console.log(tasks);
        let page = buttonMagic.page;
        
        // let tasks = toDo.toDoList;
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

            const priorityContainer = document.createElement('div');
            datentitle.appendChild(priorityContainer);

            const title = document.createElement('p');
            title.classList.add('title');
            title.textContent = task.title;
            priorityContainer.appendChild(title);

            const priorityDiv = document.createElement('div');
            priorityDiv.classList.add('priority');
            priority(task.priority,priorityDiv);
            priorityContainer.appendChild(priorityDiv);

            const edit = document.createElement('img');
            edit.classList.add('edit');
            edit.src = editIcon;
            priorityContainer.appendChild(edit);


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
            deleteButton.addEventListener('click',(event)=>{
                toDo.remove(event.target.value);
                console.log(event.target.value);
                console.log(tasks);
                // taskDOM(tasks);
                taskDOMPageSwitcher(page);
            });          
        }
        
    }
    const taskDOMPageSwitcher = (page)=>{
        switch (page) {
            case 'today':
                taskDOM(filter.today());                    
                break;
            case 'upcoming':
                taskDOM(filter.upcoming());
                break;
            case 'missed':
                console.log(filter.missed());
                
                taskDOM(filter.missed());
                break;
            case 'cleared':
                taskDOM(filter.cleared());
                break;
        
            default:
                break;
        }

    }
    const taskDialogProjects = ()=>{
        const select = document.querySelector('select[name="project"]');
        let projects = project.projects;

        select.innerHTML='';

        for(let obj of projects){
            const option = document.createElement('option');
            option.value = obj.name;
            option.textContent = obj.name;
            select.appendChild(option);
        }

    }
    return{projectDOM,taskDOM,taskDialogProjects,taskDOMPageSwitcher,deleteRemover,projectPageDOM}   

})();

export default domBuilder;