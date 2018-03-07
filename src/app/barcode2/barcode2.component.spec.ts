import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Barcode2Component } from './barcode2.component';

describe('Barcode2Component', () => {
  let component: Barcode2Component;
  let fixture: ComponentFixture<Barcode2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Barcode2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Barcode2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
