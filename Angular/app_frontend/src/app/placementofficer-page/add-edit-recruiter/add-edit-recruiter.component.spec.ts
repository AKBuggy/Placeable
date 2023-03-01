import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditRecruiterComponent } from './add-edit-recruiter.component';

describe('AddEditRecruiterComponent', () => {
  let component: AddEditRecruiterComponent;
  let fixture: ComponentFixture<AddEditRecruiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditRecruiterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditRecruiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
