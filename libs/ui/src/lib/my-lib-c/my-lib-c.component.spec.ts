import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLibCComponent } from './my-lib-c.component';

describe('MyLibCComponent', () => {
  let component: MyLibCComponent;
  let fixture: ComponentFixture<MyLibCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLibCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLibCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
