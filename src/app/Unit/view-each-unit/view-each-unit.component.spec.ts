import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEachUnitComponent } from './view-each-unit.component';

describe('ViewEachUnitComponent', () => {
  let component: ViewEachUnitComponent;
  let fixture: ComponentFixture<ViewEachUnitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewEachUnitComponent]
    });
    fixture = TestBed.createComponent(ViewEachUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
