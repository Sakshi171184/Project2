import {p,role} from "./newfile"
export class cancel{

   DeleteData(){   
    let  tableRow=((((event!.target)! as HTMLInputElement).parentNode)as HTMLTableCellElement).parentNode as HTMLTableRowElement;                                                 
    for(var i=1;i<10;i++) {                            
      if(i==8){		
       tableRow.cells[i].innerHTML=`<input  type="button" value="Edit"   class="buttonproperty">`	;	
       tableRow.cells[i].onclick=p.editFunctionallity;
      }
      else if(i==9){
       tableRow.cells[i].innerHTML=`<input type="button" value="Delete" onclick="deleteData()"  class="buttonproperty">`;
       tableRow.cells[i].onclick=p.deleteData;
      }
      else if(i==6){
         tableRow.cells[i].innerHTML=`${role[p.RecordArray[tableRow.rowIndex-1][i-1]]}`;
      }	
      else
         tableRow.cells[i].innerHTML=`${p.RecordArray[tableRow.rowIndex-1][i-1]}`;						   
         } 
    }
}    
export let  cancelDataObject=new cancel();