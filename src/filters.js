import {toDo} from "./proj&todo";
import { isToday, isFuture, isPast } from "date-fns";

const filter = (function(){
    let toDoList = toDo.toDoList;

    const today = ()=>{
        let today = [];
        for(let toDo of toDoList){
            if(isToday(toDo.dueDate)){
                today.push(toDo);
            }
        }
        return today;        
    }

    const upcoming = ()=>{
        let upcoming = [];
        for(let toDo of toDoList){
            if(isFuture(toDo.dueDate)){
                upcoming.push(toDo);
            }
        }
        return upcoming;
    }

    const missed = ()=>{
        let missed = [];
        for(let toDo of toDoList){
            if(isPast(toDo.dueDate) && toDo.checked === false){
                missed.push(toDo);
            }
        }
        return missed;    
    }

    const cleared = ()=>{
        let cleared = [];
        for(let toDo of toDoList){
            if(toDo.checked === true){
                cleared.push(toDo);
            }
        }
        return cleared;

    }

    return {today,upcoming,missed,cleared};
})();

export default filter;

