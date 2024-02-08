import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regsucess',
  standalone: true,
  imports: [],
  templateUrl: './regsucess.component.html',
  styleUrl: './regsucess.component.css'
})
export class RegsucessComponent implements OnInit {
data:any;
ngOnInit() {
  this.data=history.state.data;
}
}
