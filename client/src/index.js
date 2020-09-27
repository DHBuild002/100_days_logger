import "./styles.css";
import "./modal-styles.css";
import "./modal.js";
import { database } from '../../server/database.js';
import Log from './log.js';

const app = {
  addLogRow: (tableID) => {

      let tableRef = document.getElementById('my-table');
      let newRow = tableRef.insertRow(-1);

      let dayCell = newRow.insertCell(0);
      let noteCell = newRow.insertCell(1);
      let urlCell = newRow.insertCell(2);

      let addLogInput_day = document.getElementById("input-day").value;
      let addLogInput_note = document.getElementById("input-log").value;
      let addLogInput_url = document.getElementById("input-url").value;

      dayCell.innerHTML = addLogInput_day;
      noteCell.innerHTML = addLogInput_note;
      urlCell.innerHTML = addLogInput_url;

      newRow.className = 'log';
  },
  newLog: () => {
    let logEntry = new Log("1", addLogInput_note, addLogInput_url);
      database.insert(logEntry);
      console.log(logEntry);
      
  },
  removeLogRow: (tableID) => {
    let tableRowRemove = document.getElementById("my-table").deleteRow(-1);
    tableRowRemove;
  },
};
const handlers = {
    addLog: () => {
        app.addLogRow('#my-table');
    },
    newLog: () => {
      console.log('New Log added to DB');
      app.newLog();
    },
    removeLog: () => {
      let removeButtonClicked = true;

      if(removeButtonClicked === true){
        app.removeLogRow('#my-table')
      } else {
       console.log('log not removed');
      }
  },
}
const view = {
  createEventListeners: () => {
    const btn = document.getElementById("input-btn");
    btn.addEventListener("click", function () {
      console.log("Click Detected");
      handlers.addLog();
      handlers.newLog();
    });
  },
  removeLastItem: () => {
    let removeLink = document.getElementById('remove-entry'); 
    removeLink.addEventListener('click', handlers.removeLog);
  },
};

view.createEventListeners();
view.removeLastItem();