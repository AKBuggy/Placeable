import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRecruitersComponent } from './show-recruiters.component';

describe('ShowRecruitersComponent', () => {
  let component: ShowRecruitersComponent;
  let fixture: ComponentFixture<ShowRecruitersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRecruitersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowRecruitersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
