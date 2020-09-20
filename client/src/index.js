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
};
const handlers = {
    addLog: () => {
        app.addLogRow('#my-table');
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
};

view.createEventListeners();