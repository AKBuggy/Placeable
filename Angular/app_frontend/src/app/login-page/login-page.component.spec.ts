import { ComponentFixture, TestBed } from '@angular/core/testing';

import { login } from './login-page.component';

describe('LoginPageComponent', () => {
  let component: login;
  let fixture: ComponentFixture<login>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ login ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(login);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
