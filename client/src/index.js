import "./styles.css";
const app = {
  addLogRow: (tableID) => {
      let tableRef = document.getElementById('my-table');
      let newRow = tableRef.insertRow(-1);

      let dayCell = newRow.insertCell(0);
      let noteCell = newRow.insertCell(1);
      let urlCell = newRow.insertCell(2);

      let addLogInput_day = document.getElementById("input-date").value;
      let addLogInput_note = document.getElementById("input-log").value;
      let addLogInput_url = document.getElementById("input-url").value;

      dayCell.innerHTML = addLogInput_day;
      noteCell.innerHTML = addLogInput_note;
      urlCell.innerHTML = addLogInput_url;
  },
  removeLogRow: (tableID) => {
      dayCell.innterHTML = '';
      noteCell.innterHTML = '';
      urlCell.innterHTML = '';
  }
};
const handlers = {
    addLog: () => {
        app.addLogRow('#my-table');
    },
    removeLog: () => {
      let elementIsClicked = false; 
        () => { 
          elementIsClicked = true;
        }
      let removeButton = document.getElementById('remove-entry');
      if(elementIsClicked === true){
        app.removeLogRow('#my-table')
      } else {
       console.log('log not removed');
    }
  } 
}
const view = {
  createEventListeners: () => {
    const btn = document.getElementById("input-btn");
    btn.addEventListener("click", function () {
      console.log("Click Detected");
      handlers.addLog();
    });
  },
  removeLastItem: () => {
    var element = document.getElementById('remove-entry'); 
    element.addEventListener('click', handlers.removeLog);
  }
};
view.createEventListeners();
view.removeLastItem();