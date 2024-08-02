const project = (function(){
    let projects = [
        {name:'click'},
        {name:'the +'},
        {name:'to add'},
        {name:'projects'}
    ];

    const create = (name)=>{
        let project = {name};
        projects.push(project);
    }

    const remove = (name,value)=>{
        let index = array.findIndex(obj => obj[name] === value);
        projects.splice(index, 1);
    }

    return{
        create,
        remove,

        get projects(){
            return projects;
        }
    }

})();


const toDo = (function(){
    let id=0;
    let toDoList =[]

    const create = (title,desc,dueDate,priority,project,notes,checkList,checked,missed)=>{

        let toDo = {title,desc,dueDate,priority,project,notes,checkList,checked,missed,id};
        toDoList.push(toDo);
        id++;         
    }

    const remove = (value)=>{
        let index = toDoList.findIndex(obj => obj.id === parseInt(value));
        console.log(index);
        if (index !== -1) {
            toDoList.splice(index, 1);
        }
    }

    return{
        create,
        remove,
        get toDoList(){
            return toDoList;
        }
    }

    
})();




export {project,toDo};