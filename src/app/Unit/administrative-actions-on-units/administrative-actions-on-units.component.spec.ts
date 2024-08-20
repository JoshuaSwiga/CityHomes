import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativeActionsOnUnitsComponent } from './administrative-actions-on-units.component';

describe('AdministrativeActionsOnUnitsComponent', () => {
  let component: AdministrativeActionsOnUnitsComponent;
  let fixture: ComponentFixture<AdministrativeActionsOnUnitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministrativeActionsOnUnitsComponent]
    });
    fixture = TestBed.createComponent(AdministrativeActionsOnUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
