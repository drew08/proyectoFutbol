
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
 totalData:number = 10;
 model = '';
 filterPost = '';

 dataDetails: any[] = [];
 dataType: any[] = [];
 
 startDate:string = "";
 EndDate:string = "";

constructor( private myDataService: MyDataService) { }
   public searchTerm : number = 0;
   ngOnInit(): void {
   this.getData();
   this.search();
  }

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
      console.log(this.dataDetails);
      debugger;
    });
  }

  deleteData(id:number){
    this.myDataService.deleteData(id).subscribe((result:any)=>
    {
      debugger;
      var status =  result.content;
      debugger;
    });
  }


  getDataById(){
    debugger;
    //this.searchTerm =  Number((event.target as HTMLInputElement).value);
    this.myDataService.getDataByID(this.searchTerm).subscribe((result:any)=>
    {
      debugger;
      this.totalData = 1;
      this.dataDetails = [];
      this.dataDetails.push(result);
      debugger;
    });
  }

  getDataByDate(){
    debugger;
    //this.searchTerm =  Number((event.target as HTMLInputElement).value);
    this.myDataService.getDataByDate(this.startDate,this.EndDate).subscribe((result:any)=>
    {
      debugger;
      this.totalData = 1;
      this.dataDetails = [];
      this.dataDetails = result;
      debugger;
    });
  }


 

}
