import "./style.css";
import {project,toDo} from "./proj&todo";

project.create('grocery');
project.create('workout');

toDo.create('order shampoo','great','tuesday','critical','grocery');
toDo.create('apple cider vinegar','wow','tuesday','critical','grocery');



console.log(toDo.toDoList);

// document.getElementById('dateForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevents the form from submitting in the traditional way

//     const dateInput = document.getElementById('dateInput').value;
//     console.log(`Selected date: ${dateInput}`); // Outputs: Selected date: YYYY-MM-DD

//     // Parsing the date string to a Date object
//     const dateObject = new Date(dateInput);
    
//     // Formatting the Date object to a different string format

//     console.log(dateObject); // Outputs: Formatted date: Month DD, YYYY

// });
