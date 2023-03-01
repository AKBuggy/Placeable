import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteStudentsComponent } from './delete-students.component';

describe('DeleteStudentsComponent', () => {
  let component: DeleteStudentsComponent;
  let fixture: ComponentFixture<DeleteStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
