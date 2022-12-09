import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  name = "Angular Toggle Show Hide";
  showMyContainer: boolean = false;

  status: boolean = false;
  statusLink: boolean = false;
  arrow = false;

  constructor() { }

  ngOnInit(): void {
  }

  open() {
    this.status = !this.status;
    this.arrow = false;
  }
  close(){
    this.status = !this.status;
    this.arrow = true;
  }

}
