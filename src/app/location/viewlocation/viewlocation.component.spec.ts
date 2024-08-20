import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlocationComponent } from './viewlocation.component';

describe('ViewlocationComponent', () => {
  let component: ViewlocationComponent;
  let fixture: ComponentFixture<ViewlocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewlocationComponent]
    });
    fixture = TestBed.createComponent(ViewlocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
