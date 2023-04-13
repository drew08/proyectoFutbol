import { Component, OnInit } from '@angular/core';
import { MyDataService } from 'src/app/services/my-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data-update',
  templateUrl: './data-update.component.html',
  styleUrls: ['./data-update.component.scss']
})
export class DataUpdateComponent implements OnInit {
  dataDetails:any;
  dataID:any;
  constructor(private activatedRoute: ActivatedRoute, private myDataService: MyDataService) { }

  ngOnInit(): void {
    this.dataID = this.activatedRoute.snapshot.paramMap.get('id'); 
    this.getData();
  }
  getData(){

    this.myDataService.getDataByID(this.dataID).subscribe((result:any)=>
    {
      debugger;
      this.dataDetails = result;
      debugger;
    });
  }

  updateData(data: {nombre: string,  estadio: string, sitioWeb: string, nacionalidad: string, fundacion: string, entrenador: string, capacidad: string, valor: string}){
    this.myDataService.updateData(this.dataID, data).subscribe((result:any)=>
    {
      debugger;
      var dataDetails = result.content;
      //console.log(this.dataDetails);
      debugger;

    });
  }


}