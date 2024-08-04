import {project,toDo} from "./proj&todo";
import domBuilder from "./domBuilder";
import filter from "./filters";

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

        let error = document.createElement('p');
        error.textContent = 'Project already exists!!';
        error.classList.add('err');

        attachlistener(projectDialogOpen,projectDialog,projectClose);

        projectForm.addEventListener('submit',(e)=>{
            e.preventDefault();
            const formData = new FormData(projectForm);
            let name = '#'+formData.get('projectName');
            if(project.checkDuplicate(name)){
                projectForm.appendChild(error);              
            }
            else{
                error.remove();
                project.create(name);
                domBuilder.projectDOM();
                domBuilder.taskDialogProjects();
                projectForm.reset();
                projectDialog.close();

            }
            
        })
    }

    function taskFunnel() {
        const taskDialogOpen = document.querySelector('#taskDialogOpen');
        const taskDialog = document.querySelector("#task");
        const taskClose = document.querySelector("#taskClose");
        const taskForm = document.querySelector("#task>form");

        let title = document.querySelector('#title');

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
            
            
            if(title.dataset.project === 'true'){
                console.log(title.dataset.project);
                console.log('bye');
                console.log(filter.project(title.textContent));                
                domBuilder.taskDOM(filter.project(title.textContent));
            }
            else{
                console.log(title.dataset.project);
                console.log('hi');                
                domBuilder.taskDOMPageSwitcher(page);     
            }
            // domBuilder.taskDOMPageSwitcher(page);
                   
            
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
            title.dataset.project = false;
            domBuilder.deleteRemover();
            page = 'today';
            domBuilder.taskDOMPageSwitcher(page);
        })
        upcoming.addEventListener('click',()=>{
            title.textContent = 'Upcoming';
            title.dataset.project = false;
            domBuilder.deleteRemover();
            page = 'upcoming';
            domBuilder.taskDOMPageSwitcher(page);
        })
        missed.addEventListener('click',()=>{
            title.textContent = 'Missed';
            title.dataset.project = false;
            domBuilder.deleteRemover();
            page = 'missed';
            domBuilder.taskDOMPageSwitcher(page);
        })
        cleared.addEventListener('click',()=>{
            title.textContent = 'Cleared';
            title.dataset.project = false;
            domBuilder.deleteRemover();
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
        },
        set page(value){
            page = value;
        }
    }
    

})();

export {buttonMagic};
