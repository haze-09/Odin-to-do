const project = (function(){
    let projects = JSON.parse(localStorage.getItem('projects'));

    const saveProjects = ()=>{
        localStorage.setItem('projects',JSON.stringify(projects));
    }

    const create = (name)=>{
        let project = {name};
        projects.push(project);
        saveProjects();
    }

    const remove = (value)=>{
        let index = projects.findIndex(obj => obj.name === value);
        projects.splice(index, 1);
    }

    const checkDuplicate = (name)=>{
        return projects.some(project => project.name === name);
    }

    return{
        create,
        remove,
        checkDuplicate,

        get projects(){
            return projects;
        }
    }

})();


const toDo = (function(){
    let id = JSON.parse(localStorage.getItem('id'));
    let toDoList = JSON.parse(localStorage.getItem('toDoList'));

    const saveToDoList = () => {
        localStorage.setItem('toDoList', JSON.stringify(toDoList));
        localStorage.setItem('id', id.toString());
    };

    const create = (title,desc,dueDate,priority,project,notes,checkList,checked)=>{

        let toDo = {title,desc,dueDate,priority,project,notes,checkList,checked,id};
        toDoList.push(toDo);
        id++; 
        saveToDoList();        
    };

    const edit = (updates,id)=>{
        let index = toDoList.findIndex(obj => obj.id === parseInt(id));
        
        toDoList[index] = {...toDoList[index], ...updates,
                            notes: toDoList[index].notes, 
                            checkList: toDoList[index].checkList,
                            checked: toDoList[index].checked}

        saveToDoList();

    }

    const remove = (value)=>{
        let index = toDoList.findIndex(obj => obj.id === parseInt(value));
        console.log(index);
        if (index !== -1) {
            toDoList.splice(index, 1);
        };
        saveToDoList();
    };

    const removeProject = (name) =>{
        toDoList = toDoList.filter(toDo => toDo.project !== name);
        saveToDoList();
    };

    const checkbox = (value) =>{
        let index = toDoList.findIndex(obj => obj.id === parseInt(value));
        toDoList[index].checked = !toDoList[index].checked;
        console.log(toDoList[index]); 
        saveToDoList();      
    };

    return{
        create,
        edit,
        remove,
        removeProject,
        checkbox,
        get toDoList(){
            return toDoList;
        }
    }

    
})();




export {project,toDo};