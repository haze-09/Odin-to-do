import {toDo} from "./proj&todo";
import { isToday, isFuture, isPast, startOfDay } from "date-fns";

const filter = (function(){  
    const today = () => toDo.toDoList.filter(toDo => isToday(toDo.dueDate)  && !toDo.checked);

    const upcoming = () => toDo.toDoList.filter(toDo => isFuture(toDo.dueDate));

    const missed = () => toDo.toDoList.filter(toDo => 
        isPast(startOfDay(toDo.dueDate)) && !isToday(toDo.dueDate) && !toDo.checked
    );

    const cleared = () => toDo.toDoList.filter(toDo => toDo.checked);

    const project = (project) => toDo.toDoList.filter(toDo => toDo.project === project);

    return {today,upcoming,missed,cleared,project};
})();

export default filter;

