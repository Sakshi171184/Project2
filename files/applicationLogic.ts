import {role,CRUD,EmployeeType,p} from "./newfile"
export class applicationLogic implements CRUD<EmployeeType>{

   fetchData(data:Array<EmployeeType>){
     
      document.getElementById('take')!.innerHTML=`
      ${this.tableStart}
      ${this.tableEnd}`;
      data.map(this.rowformation).join("");
      p.RecordArray=data.map(obj => Object.values(obj));
      
    }

   editFunctionallity():void{
    let tableRow=((((event!.target)! as HTMLInputElement).parentNode)as HTMLTableCellElement).parentNode as HTMLTableRowElement;                                                                                                                                       
    for(let i=1;i<10;i++)  {      
        if(i==8){
          tableRow.cells[i].innerHTML=`<input  type="button" value="Save" class="buttonproperty"  >`	;	 
          tableRow.cells[i].onclick=p.saveData;
        }
       else if(i==9){
        tableRow.cells[i].innerHTML=`<input type="button" value="Cancel"  class="buttonproperty">`;
        tableRow.cells[i].onclick=p.DeleteData;
       }
       else if(i==6){
        tableRow.cells[i].innerHTML= `<select id="role">
        <option value="0">Developer</option>
        <option value="1">Devops</option>
        <option value="2">QA</option>
         </select>`
         
       }
       else
       tableRow.cells[i].innerHTML=`<input value="${p.RecordArray[tableRow.rowIndex-1][i-1]}">`;	                    
        }
  
    };
   appendData():void{

     let hostElement:HTMLButtonElement=document.getElementById("mainButton")as HTMLButtonElement;
     if(hostElement.value=="LOAD DATA"){
        hostElement.value="REFRESH DATA";
        document.getElementById('NEWENTRYBUTTON')!.style.display="block";
     }
    else{
      document.getElementById('take')!.innerHTML="";                
     }
   };

  deleteData():void{
   
     let tableRow=((((event!.target)! as HTMLInputElement).parentNode)as HTMLTableCellElement).parentNode as HTMLTableRowElement;                                                            
      p.RecordArray.splice(tableRow.rowIndex-1,1);                                                    
      (tableRow.parentNode as HTMLTableElement).removeChild(tableRow);                                                                       

   };
 
  tableStart=`
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

   tableEnd=`
     </table> `;
 
  rowformation(data:EmployeeType) {   
    let lengthOfTable:number=(document.getElementById('New-Table')! as HTMLTableElement).rows.length; 
    let row:HTMLTableRowElement=(document.getElementById('New-Table')!as HTMLTableElement).insertRow(lengthOfTable); 
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
     cell1.innerHTML=`<input type="Checkbox"  value="checkbox" class="checkBoxFunction" >`;
     cell2.innerHTML=data.Firstname;
     cell3.innerHTML = data.Middlename;
     cell4.innerHTML = data.Lastname;
     cell5.innerHTML = data.email;
     cell6.innerHTML =((data.phonenumber).toString());
     cell7.innerHTML = role[data.role];
     cell8.innerHTML = data.address;
     cell9.innerHTML=`<input type="button" value="Edit" class="buttonProperty">`;
     cell10.innerHTML=`<input type="button" value="Delete" class="buttonProperty">`;
     cell9.onclick=p.editFunctionallity;
     cell10.onclick=p.deleteData;
  }  

}
export let  applicationObject=new applicationLogic();