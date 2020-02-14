"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const newfile_1 = require("./newfile");
const validation_1 = require("./validation");
class newEntry {
    insertingRow(data) {
        const user_SelectionofInputElements = document.querySelectorAll('.formClass');
        let newArrayOfInputElements = Array.from(user_SelectionofInputElements).map((ew) => ew.value);
        if (!validation_1.validate({ value: newArrayOfInputElements[0], required: true }) ||
            !validation_1.validate({ value: newArrayOfInputElements[1], required: true }) ||
            !validation_1.validate({ value: newArrayOfInputElements[2], required: true }) ||
            !validation_1.validate({ value: newArrayOfInputElements[3], required: true }) ||
            !validation_1.validate({ value: +newArrayOfInputElements[4], required: true, min: 1000000000, max: 9999999999 }) ||
            !validation_1.validate({ value: newArrayOfInputElements[5], required: true }) ||
            !validation_1.validate({ value: newArrayOfInputElements[6], required: true })) {
            alert('Invalid input, please try again!');
        }
        else {
            let newObject = new newfile_1.EmployeeType(newArrayOfInputElements[0], newArrayOfInputElements[1], newArrayOfInputElements[2], newArrayOfInputElements[3], newArrayOfInputElements[4], newArrayOfInputElements[5], newArrayOfInputElements[6]);
            newfile_1.p.formDisable();
            data.rowformation(newObject);
            newfile_1.p.RecordArray.push(newArrayOfInputElements);
        }
    }
}
exports.newEntry = newEntry;
exports.newEntryObject = new newEntry();
