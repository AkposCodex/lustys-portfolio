import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from "@angular/animations";

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
  animations: [
    trigger('swing', [
      state('start', style({
        display: 'block',
      })),
      state('stop', style({
        display: 'none',
      })),
      transition('start <=> stop', [
        animate('0.5s 200ms ease-in')
      ]),
    ])
  ],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
