import "./style.css";
import { buttonMagic } from "./buttons";
import domBuilder from "./domBuilder";
import {project,toDo} from "./proj&todo";
import filter from "./filters";


buttonMagic.batchFunnel();
buttonMagic.pageSwitcher();
domBuilder.projectDOM();
console.log(filter.today(toDo.toDoList));

domBuilder.taskDOM(filter.today(toDo.toDoList));
domBuilder.taskDialogProjects();







// document.getElementById('dateForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevents the form from submitting in the traditional way

//     const dateInput = document.getElementById('dateInput').value;
//     console.log(`Selected date: ${dateInput}`); // Outputs: Selected date: YYYY-MM-DD

//     // Parsing the date string to a Date object
//     const dateObject = new Date(dateInput);
    
//     // Formatting the Date object to a different string format

//     console.log(dateObject); // Outputs: Formatted date: Month DD, YYYY

// });
