"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const newfile_1 = require("./newfile");
class Save {
    SaveData() {
        let Data = [];
        let tableRow = ((event.target).parentNode).parentNode;
        for (let i = 1; i < 10; i++) {
            if (i == 8) {
                tableRow.cells[i].innerHTML = `<input  type="button" value="Edit"  class="buttonproperty">`;
                tableRow.cells[i].onclick = newfile_1.p.editFunctionallity;
            }
            else if (i == 9) {
                tableRow.cells[i].innerHTML = `<input type="button" value="Delete"   class="buttonproperty">`;
                tableRow.cells[i].onclick = newfile_1.p.deleteData;
            }
            else if (i == 6) {
                let inputElement = ((document.getElementById('New-Table')).rows[tableRow.rowIndex].cells[i].childNodes[0]).value;
                tableRow.cells[i].innerHTML = newfile_1.role[+inputElement];
                Data.push(+inputElement);
            }
            else {
                let inputElement = ((document.getElementById('New-Table')).rows[tableRow.rowIndex].cells[i].childNodes[0]).value;
                tableRow.cells[i].innerHTML = inputElement;
                Data.push(inputElement);
            }
        }
        newfile_1.p.RecordArray.splice(tableRow.rowIndex - 1, 1, Data);
    }
}
exports.Save = Save;
exports.saveDataObject = new Save();
