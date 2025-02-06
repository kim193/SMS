function addStudent() {
    let name = document.getElementById('name').value;
    let roll = document.getElementById('roll').value;
    if(name === "" || roll === "") {
        alert("Please enter both name and roll number");
        return;
    }
    
    let table = document.getElementById("studentList");
    let row = table.insertRow();
    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = roll;
    let actionCell = row.insertCell(2);
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.style.backgroundColor = "#dc3545";
    deleteBtn.style.color = "white";
    deleteBtn.onclick = function() { table.deleteRow(row.rowIndex - 1); };
    actionCell.appendChild(deleteBtn);
    
    document.getElementById('name').value = "";
    document.getElementById('roll').value = "";
}