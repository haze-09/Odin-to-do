import {project,toDo} from "./proj&todo";
import domBuilder from "./domBuilder";

const buttonMagic = (function(){

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
            domBuilder.taskDOM();
            // domBuilder.projectDOM();
            taskForm.reset();
            taskDialog.close();
        })

        
    }

    const batchFunnel = () => {
        projectFunnel();
        taskFunnel();
        
    }

    return{batchFunnel}
    

})();

export {buttonMagic};
