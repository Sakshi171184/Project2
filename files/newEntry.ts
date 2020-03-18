import {p,EmployeeType} from "./newfile"
import { Validatable,validate} from "./validation"
 export class newEntry{
    
    insertingRow(data:any){
       const  user_SelectionofInputElements:NodeListOf<HTMLFormElement>=document.querySelectorAll('.formClass'); 
       let newArrayOfInputElements:any[]= Array.from(user_SelectionofInputElements).map((ew)=>ew.value);  
       if (
         !validate({value:newArrayOfInputElements[0], required:true}) ||
         !validate({value:newArrayOfInputElements[1],required:true}) ||
         !validate({value:newArrayOfInputElements[2],required:true}) ||
         !validate({value:newArrayOfInputElements[3],required:true}) ||
         !validate({value:+newArrayOfInputElements[4],required:true,min:1000000000,max:9999999999}) ||
         !validate({value:newArrayOfInputElements[5],required:true}) ||
         !validate({value:newArrayOfInputElements[6],required:true})
   
         ) {
         alert('Invalid input, please try again!');
       } else {
          let newObject:EmployeeType=new EmployeeType(newArrayOfInputElements[0],
            newArrayOfInputElements[1],
            newArrayOfInputElements[2],
            newArrayOfInputElements[3],        
            newArrayOfInputElements[4],
            newArrayOfInputElements[5],
            newArrayOfInputElements[6]
            );
            p.formDisable(); 
           data.rowformation(newObject);
           p.RecordArray.push(newArrayOfInputElements);                                                                                
        }  	      

     }        
 }
 export let  newEntryObject=new newEntry();
