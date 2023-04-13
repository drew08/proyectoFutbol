
import { Component, OnInit } from '@angular/core';
import { MyDataService } from 'src/app/services/my-data.service';


@Component({
  selector: 'app-product',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class dataListComponent implements OnInit {
 searchKey:string = "";
 page = 1;
 totalData:number = 12;

 dataDetails: any[] = [];
 
 startDate:string = "";
 EndDate:string = "";
 sentAlertError: boolean  = false;
 msgError: String  = 'Error';
 constructor( private myDataService: MyDataService) { }
   public searchTerm : number = 0;
   ngOnInit(): void {
   this.getData();
   this.search();
  }

  // buscar por nombre
  search(){
    this.myDataService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }

  // obtener informacion del api
  getData(){
    this.myDataService.getData(12,this.page + 0).subscribe((result:any)=>
    {
      debugger;
      this.totalData =  result.totalPages;
      this.dataDetails = result.content;
    });
  }

  // eliminar llamdo  api
  deleteData(id:number){
    this.myDataService.deleteData(id).subscribe((result:any)=>
    {
      debugger;
      let status =  result;
      this.removeItem(id);
      this.sentAlertError = false;
    },
    (error) => {  
      debugger;   //Error callback
      this.sentAlertError = true;
      this.msgError = "Error: no es posible Eliminar.";
      console.error('error caught in component')
    } 
    );
  }

  // remover elemento del array
  removeItem(id:number){
    debugger;
    this.dataDetails.map((a:any, index:any)=>{
      if(id === a.id){
        this.dataDetails.splice(index,1);
      }
    })
  }

  // obtener elemento por parametro id
  getDataById(){
    debugger;
    this.myDataService.getDataByID(this.searchTerm).subscribe((result:any)=>
    {
      this.totalData = 1;
      this.dataDetails = [];
      this.dataDetails.push(result);
      this.sentAlertError = false;
    },
    (error) => {  
      debugger;   //Error callback
      this.sentAlertError = true;
      this.msgError = "Error: El elemento no existe";
      console.error('error caught in component')
    }    
    );
  }

  // obtener elemento por rango de fecha
  getDataByDate(){
    debugger;
    this.myDataService.getDataByDate(this.startDate,this.EndDate).subscribe((result:any)=>
    {
      this.totalData = 1;
      this.dataDetails = [];
      this.dataDetails = result;
      this.sentAlertError = false;
    },
    (error) => {  
      debugger;   //Error callback
      this.sentAlertError = true;
      this.msgError = "Error: El elemento no existe";
      console.error('error caught in component')
    } 
    );
  }

}
