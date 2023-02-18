import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementofficerPageComponent } from './placementofficer-page.component';

describe('PlacementofficerPageComponent', () => {
  let component: PlacementofficerPageComponent;
  let fixture: ComponentFixture<PlacementofficerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementofficerPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacementofficerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
