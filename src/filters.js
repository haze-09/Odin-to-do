import {toDo} from "./proj&todo";
import { isToday, isFuture, isPast, startOfDay } from "date-fns";

const filter = (function(){
    let toDoList = toDo.toDoList;

    const today = () => toDoList.filter(toDo => isToday(toDo.dueDate));

    const upcoming = () => toDoList.filter(toDo => isFuture(toDo.dueDate));

    const missed = () => toDoList.filter(toDo => 
        isPast(startOfDay(toDo.dueDate)) && !isToday(toDo.dueDate) && !toDo.checked
    );

    const cleared = () => toDoList.filter(toDo => toDo.checked);

    const project = (project) => toDoList.filter(toDo => toDo.project === project);

    return {today,upcoming,missed,cleared,project};
})();

export default filter;

