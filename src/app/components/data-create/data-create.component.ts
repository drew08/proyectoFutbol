import { Component, OnInit } from '@angular/core';
import { MyDataService } from 'src/app/services/my-data.service';

@Component({
  selector: 'app-data-create',
  templateUrl: './data-create.component.html',
  styleUrls: ['./data-create.component.scss']
})
export class DataCreateComponent implements OnInit {

  
  constructor( private myDataService: MyDataService) { }

  ngOnInit(): void {
    debugger;
    this.doLogin();
  }

  createData(data: {nombre: string,  estadio: string, sitioWeb: string, nacionalidad: string, fundacion: string, entrenador: string, capacidad: string, valor: string}){
    this.myDataService.createData(data).subscribe((result:any)=>
    {
      debugger;
      var dataDetails = result.content;
      //console.log(this.dataDetails);
      debugger;

    });
  }

  doLogin(){
    debugger;
    const user = { Usuario: '', Password: '' };
    this.myDataService.login(user).subscribe(
      response => {
          if(response) {
            debugger;
          } else {
            debugger;
          }
      } 
  );
  }

}
