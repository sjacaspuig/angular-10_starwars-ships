import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FlashModule } from './components/flash/flash.module';
import { MenuModule } from './components/menu/menu.module';
import { PaginatorModule } from './components/paginator/paginator.module';
import { StarshipModule } from './components/starship/starship.module';
import { StarshipsListModule } from './components/starships-list/starships-list.module';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FlashModule,
        MenuModule,
        PaginatorModule,
        StarshipModule,
        StarshipsListModule,
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

});
