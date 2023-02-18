import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterPageComponent } from './recruiter-page.component';

describe('RecruiterPageComponent', () => {
  let component: RecruiterPageComponent;
  let fixture: ComponentFixture<RecruiterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruiterPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruiterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
