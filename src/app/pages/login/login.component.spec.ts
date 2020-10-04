import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CookieOptionsProvider, CookieService, COOKIE_OPTIONS, COOKIE_WRITER, ICookieWriterService } from 'ngx-cookie';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const cookie_writer: ICookieWriterService = {
    write(name: '', value: '') { return name + value},
    readAllAsString() { return ''}
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
        { provide: COOKIE_WRITER, useValue: cookie_writer },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
