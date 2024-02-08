import { Component, OnInit } from '@angular/core';

import { UsersService } from '../services/users.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent implements OnInit {
 
  
  data: any;

  constructor(private dataService: UsersService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.dataService.getData().subscribe(
      (result) => {
        this.data = result;
        console.log(result);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

}
