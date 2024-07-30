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
            projectForm.reset();
            projectDialog.close();
        })
    }

    const batchFunnel = () => {
        projectFunnel();
        
    }

    return{batchFunnel}
    

})();

export {buttonMagic};
