import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }
  htmlValue = 100
  cssValue = 60
  TSValue = 70
  ngOnInit(): void {
  }
}
