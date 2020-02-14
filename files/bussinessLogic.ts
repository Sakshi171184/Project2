 export class bussinessLogic{
   
  async fetchData(){
    let fetchedResponse=await fetch('files/Project1.json');                                                                        // This will fetch data from json file
    let dataFetched=await fetchedResponse.json();

    return  dataFetched;
  }
}

export let bussinessObject=new bussinessLogic();
