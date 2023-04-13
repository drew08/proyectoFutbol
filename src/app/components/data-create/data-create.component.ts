import { Component, OnInit } from '@angular/core';
import { MyDataService } from 'src/app/services/my-data.service';

@Component({
  selector: 'app-data-create',
  templateUrl: './data-create.component.html',
  styleUrls: ['./data-create.component.scss']
})
export class DataCreateComponent implements OnInit {
  sentAlert: boolean  = false;
  sentAlertError: boolean  = false;
  newId: number  = 0;
  
  constructor( private myDataService: MyDataService) { }

  ngOnInit(): void {
    debugger;
    this.doLogin();
  }

  createData(data: {nombre: string,  estadio: string, sitioWeb: string, nacionalidad: string, fundacion: string, entrenador: string, capacidad: string, valor: string}){
    this.myDataService.createData(data).subscribe((result:any)=>
    {
      debugger;
      this.sentAlert = true;
      this.newId= result.id;
      this.sentAlertError = false;
    },
    (error) => {  
      debugger;   //Error callback
      this.sentAlertError = true;
      console.error('error caught in component')

    }
    
    );
  }

  doLogin(){
    debugger;
    let user  = "test";
    let pass  = "test";
    this.myDataService.dologin(user,pass).subscribe((result:any)=>
    {
        debugger; 
        let check = result;
    },
    (error) => {  
      debugger;   //Error callback
      console.error('error login')
    }
    );
  }
 

}
