import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibformComponent } from './libform.component';

describe('LibformComponent', () => {
  let component: LibformComponent;
  let fixture: ComponentFixture<LibformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
