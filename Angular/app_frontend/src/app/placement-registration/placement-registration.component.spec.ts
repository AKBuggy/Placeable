import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementRegistrationComponent } from './placement-registration.component';

describe('PlacementRegistrationComponent', () => {
  let component: PlacementRegistrationComponent;
  let fixture: ComponentFixture<PlacementRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacementRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
