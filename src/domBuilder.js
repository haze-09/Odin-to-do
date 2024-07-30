import {project,toDo} from "./proj&todo";

const domBuilder = (function(){

    const projectDOM = () => {
        let projects = project.projects;
        let projectContainer = document.querySelector('#myProj>div:nth-child(2)');
        console.log(projects);
        projectContainer.innerHTML="";

        for(let obj of projects){
            let projectDomElement = document.createElement('button');
            projectDomElement.textContent = '#'+obj.name;
            projectContainer.appendChild(projectDomElement);
        }
    } 
    return{projectDOM}   

})();

export default domBuilder;