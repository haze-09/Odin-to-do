const project = (function(){
    let projects = [
        {name:'#click'},
        {name:'#the +'},
        {name:'#to add'},
        {name:'#projects'}
    ];

    const create = (name)=>{
        let project = {name};
        projects.push(project);
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
    let id=0;
    let toDoList =[
        {
            title: "Complete project proposal",
            desc: "Draft and submit the project proposal for the new client",
            dueDate: new Date(2024, 7, 15), // August 15, 2024
            priority: "high",
            project: "#the +",
            notes: "Include budget estimates",
            checkList: false,
            checked: false,
            id: id++
        },
        {
            title: "Buy groceries",
            desc: "Pick up items for the week",
            dueDate: new Date(), // Today's date
            priority: "medium",
            project: "#the +",
            notes: "Don't forget milk",
            checkList: false,
            checked: false,
            id: id++
        },
        {
            title: "Gym session",
            desc: "30 minutes cardio, 30 minutes strength training",
            dueDate: new Date(2024, 7, 5), // August 5, 2024
            priority: "low",
            project: "#the +",
            notes: "Remember to bring water bottle",
            checkList: false,
            checked: false,
            id: id++
        },
        {
            title: "Call mom",
            desc: "Weekly check-in call",
            dueDate: new Date(2024, 7, 1), // August 1, 2024 (past date)
            priority: "medium",
            project: "Personal",
            notes: "Ask about her garden",
            checkList: false,
            checked: true,
            id: id++
        },
        {
            title: "Prepare presentation",
            desc: "Create slides for the team meeting",
            dueDate: new Date(2024, 6, 10), // August 6, 2024
            priority: "high",
            project: "Work",
            notes: "Include Q2 results",
            checkList: false,
            checked: false,
            id: id++
        }
    ]

    const create = (title,desc,dueDate,priority,project,notes,checkList,checked)=>{

        let toDo = {title,desc,dueDate,priority,project,notes,checkList,checked,id};
        toDoList.push(toDo);
        id++;         
    };

    const edit = (updates,id)=>{
        let index = toDoList.findIndex(obj => obj.id === parseInt(id));
        
        toDoList[index] = {...toDoList[index], ...updates,
                            notes: toDoList[index].notes, 
                            checkList: toDoList[index].checkList,
                            checked: toDoList[index].checked}

    }

    const remove = (value)=>{
        let index = toDoList.findIndex(obj => obj.id === parseInt(value));
        console.log(index);
        if (index !== -1) {
            toDoList.splice(index, 1);
        };
    };

    const removeProject = (name) =>{
        toDoList = toDoList.filter(toDo => toDo.project !== name);
    };

    const checkbox = (value) =>{
        let index = toDoList.findIndex(obj => obj.id === parseInt(value));
        toDoList[index].checked = !toDoList[index].checked;
        console.log(toDoList[index]);       
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