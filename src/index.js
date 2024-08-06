import "./style.css";
import { buttonMagic } from "./buttons";
import domBuilder from "./domBuilder";
import {project,toDo} from "./proj&todo";
import filter from "./filters";
import localStore from "./localStore";

localStore.initializeDefaults();

buttonMagic.batchFunnel();
buttonMagic.pageSwitcher();

domBuilder.projectDOM();
domBuilder.taskDOM(filter.today(toDo.toDoList));
domBuilder.taskDialogProjects();



