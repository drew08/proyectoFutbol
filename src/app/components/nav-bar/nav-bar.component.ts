
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';  // <<<< import it here
import { dataListComponent } from 'src/app/components/data-list/data-list.component';
import { MyDataService } from 'src/app/services/my-data.service';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public searchTerm : string = '';

  constructor (private MyDataService : MyDataService){}
 
  ngOnInit(): void {


  }

  
  search(event:any){

    this.searchTerm = (event.target as HTMLInputElement).value;
    this.MyDataService.search.next (this.searchTerm);
  }

}
