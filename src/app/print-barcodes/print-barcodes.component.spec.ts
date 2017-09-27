import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintBarcodesComponent } from './print-barcodes.component';

describe('PrintBarcodesComponent', () => {
  let component: PrintBarcodesComponent;
  let fixture: ComponentFixture<PrintBarcodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintBarcodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintBarcodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
