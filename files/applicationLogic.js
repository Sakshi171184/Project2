"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const newfile_1 = require("./newfile");
class applicationLogic {
    constructor() {
        this.tableStart = `
    <table id='New-Table' width=80%>
      <tr>
       <th><input type="button" value="DeleteMany" class="buttonproperty" id="DeleteMany"></th>
       <th>First Name</th>
       <th>Middle Name</th>
       <th>Last Name</th>
       <th>Email</th>
       <th>Phone Number</th>
       <th>Role</th>
       <th>Address</th>
       <th colspan=2>Buttons</th>
      </tr> `;
        this.tableEnd = `
     </table> `;
    }
    fetchData(data) {
        document.getElementById('take').innerHTML = `
      ${this.tableStart}
      ${this.tableEnd}`;
        data.map(this.rowformation).join("");
        newfile_1.p.RecordArray = data.map(obj => Object.values(obj));
    }
    editFunctionallity() {
        let tableRow = ((event.target).parentNode).parentNode;
        for (let i = 1; i < 10; i++) {
            if (i == 8) {
                tableRow.cells[i].innerHTML = `<input  type="button" value="Save" class="buttonproperty"  >`;
                tableRow.cells[i].onclick = newfile_1.p.saveData;
            }
            else if (i == 9) {
                tableRow.cells[i].innerHTML = `<input type="button" value="Cancel"  class="buttonproperty">`;
                tableRow.cells[i].onclick = newfile_1.p.DeleteData;
            }
            else if (i == 6) {
                tableRow.cells[i].innerHTML = `<select id="role">
        <option value="0">Developer</option>
        <option value="1">Devops</option>
        <option value="2">QA</option>
         </select>`;
            }
            else
                tableRow.cells[i].innerHTML = `<input value="${newfile_1.p.RecordArray[tableRow.rowIndex - 1][i - 1]}">`;
        }
    }
    ;
    appendData() {
        let hostElement = document.getElementById("mainButton");
        if (hostElement.value == "LOAD DATA") {
            hostElement.value = "REFRESH DATA";
            document.getElementById('NEWENTRYBUTTON').style.display = "block";
        }
        else {
            document.getElementById('take').innerHTML = "";
        }
    }
    ;
    deleteData() {
        let tableRow = ((event.target).parentNode).parentNode;
        newfile_1.p.RecordArray.splice(tableRow.rowIndex - 1, 1);
        tableRow.parentNode.removeChild(tableRow);
    }
    ;
    rowformation(data) {
        let lengthOfTable = document.getElementById('New-Table').rows.length;
        let row = document.getElementById('New-Table').insertRow(lengthOfTable);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);
        let cell7 = row.insertCell(6);
        let cell8 = row.insertCell(7);
        let cell9 = row.insertCell(8);
        let cell10 = row.insertCell(9);
        cell1.innerHTML = `<input type="Checkbox"  value="checkbox" class="checkBoxFunction" >`;
        cell2.innerHTML = data.Firstname;
        cell3.innerHTML = data.Middlename;
        cell4.innerHTML = data.Lastname;
        cell5.innerHTML = data.email;
        cell6.innerHTML = ((data.phonenumber).toString());
        cell7.innerHTML = newfile_1.role[data.role];
        cell8.innerHTML = data.address;
        cell9.innerHTML = `<input type="button" value="Edit" class="buttonProperty">`;
        cell10.innerHTML = `<input type="button" value="Delete" class="buttonProperty">`;
        cell9.onclick = newfile_1.p.editFunctionallity;
        cell10.onclick = newfile_1.p.deleteData;
    }
}
exports.applicationLogic = applicationLogic;
exports.applicationObject = new applicationLogic();
