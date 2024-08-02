import {project,toDo} from "./proj&todo";
import domBuilder from "./domBuilder";

const buttonMagic = (function(){
    let page = 'today';

    function attachlistener (open,dialog,close){
        open.addEventListener('click',()=>{
            dialog.showModal();
        })
        
        close.addEventListener('click',()=>{
            console.log('meow');
            dialog.close();
        })     

    }

    function projectFunnel(){
        const projectDialogOpen = document.querySelector('#openProjectAdder');
        const projectDialog = document.querySelector("#project");
        const projectClose = document.querySelector("#projectClose");
        const projectForm = document.querySelector("#project>form");

        attachlistener(projectDialogOpen,projectDialog,projectClose);

        projectForm.addEventListener('submit',(e)=>{
            e.preventDefault();
            const formData = new FormData(projectForm);
            let name = formData.get('projectName');
            project.create(name);
            domBuilder.projectDOM();
            domBuilder.taskDialogProjects();
            projectForm.reset();
            projectDialog.close();
        })
    }

    function taskFunnel() {
        const taskDialogOpen = document.querySelector('#taskDialogOpen');
        const taskDialog = document.querySelector("#task");
        const taskClose = document.querySelector("#taskClose");
        const taskForm = document.querySelector("#task>form");

        attachlistener(taskDialogOpen, taskDialog, taskClose);

        taskForm.addEventListener('submit',(e)=>{
            e.preventDefault();
            const formData = new FormData(taskForm);
            let name = formData.get('taskName');
            let desc = formData.get('desc');
            let dateInput = formData.get('date');
            let date = new Date(dateInput);
            let priority = formData.get('priority');
            let project = formData.get('project');
            toDo.create(name,desc,date,priority,project,false,false,false,false);
            console.log(toDo.toDoList);
            domBuilder.taskDOMPageSwitcher(page);            
            
            // domBuilder.projectDOM();
            taskForm.reset();
            taskDialog.close();
        })

        
    }

    const pageSwitcher = ()=>{
        let today = document.querySelector('#today');
        let upcoming = document.querySelector('#upcoming');
        let missed = document.querySelector('#missed');
        let cleared = document.querySelector('#cleared');
        let title = document.querySelector('#title');

        today.addEventListener('click',()=>{
            title.textContent = 'Today';
            page = 'today';
            domBuilder.taskDOMPageSwitcher(page);
        })
        upcoming.addEventListener('click',()=>{
            title.textContent = 'Upcoming';
            page = 'upcoming';
            domBuilder.taskDOMPageSwitcher(page);
        })
        missed.addEventListener('click',()=>{
            title.textContent = 'Missed';
            page = 'missed';
            domBuilder.taskDOMPageSwitcher(page);
        })
        cleared.addEventListener('click',()=>{
            title.textContent = 'Cleared';
            page = 'cleared';
            domBuilder.taskDOMPageSwitcher(page);
        })

    }

    const batchFunnel = () => {
        projectFunnel();
        taskFunnel();
        
    }

    return{
        batchFunnel,
        pageSwitcher,
        get page(){
            return page;
        }
    }
    

})();

export {buttonMagic};
