import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBillsComponent } from './show-bills.component';

describe('ShowBillsComponent', () => {
  let component: ShowBillsComponent;
  let fixture: ComponentFixture<ShowBillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowBillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
