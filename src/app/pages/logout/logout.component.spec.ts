import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { LogoutComponent } from './logout.component';

describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;
  let routerStub = {navigateByUrl: jasmine.createSpy('navigateByUrl')};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ LogoutComponent ],
      providers: [ 
        { provide: Router, useValue: routerStub } 
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should navigate to login after user logs out', () => {
    component.logout();
    expect(routerStub.navigateByUrl).toHaveBeenCalledWith('/login');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
