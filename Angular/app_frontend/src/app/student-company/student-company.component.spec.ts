import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCompanyComponent } from './student-company.component';

describe('StudentCompanyComponent', () => {
  let component: StudentCompanyComponent;
  let fixture: ComponentFixture<StudentCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
