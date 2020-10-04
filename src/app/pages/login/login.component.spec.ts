import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CookieOptionsProvider, CookieService, COOKIE_OPTIONS, COOKIE_WRITER, ICookieWriterService } from 'ngx-cookie';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const cookieWriter: ICookieWriterService = {
    write(name: '', value: ''): string { return name + value; },
    readAllAsString(): string { return ''; }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
      ],
      declarations: [ LoginComponent ],
      providers: [
        CookieService,
        CookieOptionsProvider,
        { provide: COOKIE_OPTIONS, useValue: {} },
        { provide: COOKIE_WRITER, useValue: cookieWriter },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    // Trigger the lifecycle function on our component
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('loginForm invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('username field validity', () => {
    const username = component.loginForm.controls.username;
    expect(username.valid).toBeFalsy();
  });

  it('password field validity', () => {
    const password = component.loginForm.controls.password;
    expect(password.valid).toBeFalsy();
  });

  it('username field requireds', () => {
    let errors: ValidationErrors = {};
    const username = component.loginForm.controls.username;
    errors = username.errors || {};
    expect(errors.required).toBeTruthy();
  });

  it('password field requireds', () => {
    let errors: ValidationErrors = {};
    const password = component.loginForm.controls.password;
    errors = password.errors || {};
    expect(errors.required).toBeTruthy();
  });

  it('loginForm valid when full', () => {
    expect(component.loginForm.valid).toBeFalsy();
    component.loginForm.controls.username.setValue('sergijacas');
    component.loginForm.controls.password.setValue('123456789');
    expect(component.loginForm.valid).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
