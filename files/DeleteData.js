"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const newfile_1 = require("./newfile");
class cancel {
    DeleteData() {
        let tableRow = ((event.target).parentNode).parentNode;
        for (var i = 1; i < 10; i++) {
            if (i == 8) {
                tableRow.cells[i].innerHTML = `<input  type="button" value="Edit"   class="buttonproperty">`;
                tableRow.cells[i].onclick = newfile_1.p.editFunctionallity;
            }
            else if (i == 9) {
                tableRow.cells[i].innerHTML = `<input type="button" value="Delete" onclick="deleteData()"  class="buttonproperty">`;
                tableRow.cells[i].onclick = newfile_1.p.deleteData;
            }
            else if (i == 6) {
                tableRow.cells[i].innerHTML = `${newfile_1.role[newfile_1.p.RecordArray[tableRow.rowIndex - 1][i - 1]]}`;
            }
            else
                tableRow.cells[i].innerHTML = `${newfile_1.p.RecordArray[tableRow.rowIndex - 1][i - 1]}`;
        }
    }
}
exports.cancel = cancel;
exports.cancelDataObject = new cancel();
