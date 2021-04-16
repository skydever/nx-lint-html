import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'my-org-my-lib-c',
  templateUrl: './my-lib-c.component.html',
  styleUrls: ['./my-lib-c.component.scss'],
})
export class MyLibCComponent implements OnInit {
  test$ = of(true);

  constructor() {}

  ngOnInit(): void {}
}
