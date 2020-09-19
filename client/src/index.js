import './styles.css';

const btn = document.getElementById("add-row");

function addRow(tableID){
	let tableRef = document.getElementById(tableID);
	let newRow = tableRef.insertRow(-1);
	let dayCell = newRow.insertCell(0);
	let noteCell = newRow.insertCell(1);
	let urlCell = newRow.insertCell(2);
}

btn.addEventListener("click", function(){
	console.log("Add a Row")
	addRow('my-table');
});
