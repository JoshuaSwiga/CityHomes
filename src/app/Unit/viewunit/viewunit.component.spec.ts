import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewunitComponent } from './viewunit.component';

describe('ViewunitComponent', () => {
  let component: ViewunitComponent;
  let fixture: ComponentFixture<ViewunitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewunitComponent]
    });
    fixture = TestBed.createComponent(ViewunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
