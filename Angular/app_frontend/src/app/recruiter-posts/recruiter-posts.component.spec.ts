import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterPostsComponent } from './recruiter-posts.component';

describe('RecruiterPostsComponent', () => {
  let component: RecruiterPostsComponent;
  let fixture: ComponentFixture<RecruiterPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruiterPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruiterPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
