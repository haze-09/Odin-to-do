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

    const remove = (value)=>{
        let index = array.findIndex(obj => obj.name === value);
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
    let toDoList =[
        {
            title: "Complete project proposal",
            desc: "Draft and submit the project proposal for the new client",
            dueDate: new Date(2024, 7, 15), // August 15, 2024
            priority: "high",
            project: "Work",
            notes: "Include budget estimates",
            checkList: false,
            checked: false,
            missed: false,
            id: id++
        },
        {
            title: "Buy groceries",
            desc: "Pick up items for the week",
            dueDate: new Date(), // Today's date
            priority: "medium",
            project: "Personal",
            notes: "Don't forget milk",
            checkList: false,
            checked: false,
            missed: false,
            id: id++
        },
        {
            title: "Gym session",
            desc: "30 minutes cardio, 30 minutes strength training",
            dueDate: new Date(2024, 7, 5), // August 5, 2024
            priority: "low",
            project: "Health",
            notes: "Remember to bring water bottle",
            checkList: false,
            checked: false,
            missed: false,
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
            missed: false,
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
            missed: false,
            id: id++
        }
    ]

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