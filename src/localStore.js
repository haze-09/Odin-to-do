const localStore = (function(){
    const defaultProjects = [
        {name:'#click'},
        {name:'#the +'},
        {name:'#to add'},
        {name:'#projects'}
    ];

    const defaultToDoList = [
        {
            title: "All tasks for the day show up here",
            desc: "The # is the project this task belongs to",
            dueDate: new Date(), 
            priority: "high",
            project: "#projects",
            notes: false,
            checkList: false,
            checked: false,
            id: 0
        },
        {
            title: "The colors beside the title are priorities",
            desc: "green-low , yellow-medium, red-high",
            dueDate: new Date(), 
            priority: "medium",
            project: "#projects",
            notes: false,
            checkList: false,
            checked: false,
            id: 1
        },
        {
            title: "Missed tasks show up here",
            desc: "includes anything unchecked and from the past",
            dueDate: new Date(2024,6,1), 
            priority: "low",
            project: "#projects",
            notes: false,
            checkList: false,
            checked: false,
            id: 2
        },
        {
            title: "Upcoming tasks show up here",
            desc: "includes anything unchecked and from the future",
            dueDate: new Date(2024,7,20), 
            priority: "high",
            project: "#projects",
            notes: false,
            checkList: false,
            checked: false,
            id: 3
        },
        {
            title: "Checked tasks show up here",
            desc: "one done many more to go",
            dueDate: new Date(), 
            priority: "high",
            project: "#projects",
            notes: false,
            checkList: false,
            checked: true,
            id: 4
        },
    ];

    const initializeDefaults = () => {
        if(!localStorage.getItem('projects')){
            localStorage.setItem('projects',JSON.stringify(defaultProjects));
        }
        if (!localStorage.getItem('toDoList')) {
            localStorage.setItem('toDoList', JSON.stringify(defaultToDoList));
        }
        if (!localStorage.getItem('id')) {
            localStorage.setItem('id', defaultToDoList.length.toString());
        }

    }

    return{initializeDefaults};

})();

export default localStore;