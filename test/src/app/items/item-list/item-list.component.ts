import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/service/api.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items: [];
  totlaCount: number;
  //https://github.com/angular-university/angular-material-course/tree/2-data-table-finished
  displayedColumns = ['id', 'email', 'first_name'];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    //calling mock api from https://reqres.in/
    this.apiService.get('https://reqres.in/api/users')
    .subscribe((resopnse) => {
      if (resopnse) {
        this.items = resopnse['data'];
        this.totlaCount = resopnse['total']
      }
    });
  }

}
