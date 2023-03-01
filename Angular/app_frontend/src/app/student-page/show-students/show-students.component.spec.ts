import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStudentsComponent } from './show-students.component';

describe('ShowStudentsComponent', () => {
  let component: ShowStudentsComponent;
  let fixture: ComponentFixture<ShowStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
