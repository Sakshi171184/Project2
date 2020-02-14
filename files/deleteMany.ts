import {p} from "./newfile"
export class deleteMany{
   deleteMany(){
     const userSelectionOfInputElements:NodeListOf<HTMLInputElement>=document.querySelectorAll('.checkBoxFunction');                                    
     let newArrayOfChecks:Boolean[]= Array.from(userSelectionOfInputElements).map((ew)=> ew.checked);                       
     let checkBoxes:HTMLInputElement[]=Array.from(userSelectionOfInputElements);
     for(let i=0;i<newArrayOfChecks.length;i++){
        if(newArrayOfChecks[i]==true){                                                                   
           let rowToDelete:HTMLTableRowElement=((checkBoxes[i]!as HTMLInputElement).parentNode as HTMLTableCellElement).parentNode as HTMLTableRowElement;
            p.RecordArray.splice(rowToDelete.rowIndex-1,1);  
            (rowToDelete.parentNode as HTMLTableElement).removeChild(rowToDelete);

         }
      }
   } 
}
export let  deleteManyObject=new deleteMany();