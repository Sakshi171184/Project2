import {p,role} from "./newfile"
export class Save{
    SaveData(){
       let Data:any[]=[];
       let tableRow=((((event!.target)! as HTMLInputElement).parentNode)as HTMLTableCellElement).parentNode as HTMLTableRowElement;                                                                                        
       for(let i=1;i<10;i++) {                                                                                   
         if(i==8){
          tableRow.cells[i].innerHTML=`<input  type="button" value="Edit"  class="buttonproperty">`	;	 
          tableRow.cells[i].onclick=p.editFunctionallity;
         }
         else if(i==9){
          tableRow.cells[i].innerHTML=`<input type="button" value="Delete"   class="buttonproperty">`;	
           tableRow.cells[i].onclick=p.deleteData;
         }
         else if(i==6){
          let inputElement=((((document.getElementById('New-Table')!)as HTMLTableElement).rows[tableRow.rowIndex].cells[i].childNodes[0])as HTMLInputElement).value;  
          tableRow.cells[i].innerHTML=role[+inputElement];
          Data.push(+inputElement); 

         }	
         else{
           let inputElement=((((document.getElementById('New-Table')!)as HTMLTableElement).rows[tableRow.rowIndex].cells[i].childNodes[0])as HTMLInputElement).value;  
           tableRow.cells[i].innerHTML=inputElement;
           Data.push(inputElement);                                                                             
          } 		  					   
        } 
       p.RecordArray.splice(tableRow.rowIndex-1,1,Data);                                                          
    } 
}  
export let saveDataObject=new Save();