import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'my-org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  test$ = of(true);
  title = 'my-app';

  ngOnInit(): void {}
}
