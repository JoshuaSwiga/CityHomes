import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewueachserComponent } from './viewueachser.component';

describe('ViewueachserComponent', () => {
  let component: ViewueachserComponent;
  let fixture: ComponentFixture<ViewueachserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewueachserComponent]
    });
    fixture = TestBed.createComponent(ViewueachserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
