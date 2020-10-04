import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StarshipsService } from 'src/app/shared/services/starships.service';
import { ShipsComponent } from './ships.component';

describe('ShipsComponent', () => {
  let component: ShipsComponent;
  let fixture: ComponentFixture<ShipsComponent>;
  let starshipsService: StarshipsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ ShipsComponent ],
      providers: [ StarshipsService ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ShipsComponent);
    component = fixture.componentInstance;
    starshipsService = TestBed.inject(StarshipsService);
    fixture.detectChanges();
  });


  it('should get the data of starshipsService without url', (done) => {
    starshipsService.getAllStarshipsByUrl(null).subscribe(() => {
      expect(component.nextPage).toEqual('http://swapi.dev/api/starships/?page=2');
      expect(component.previousPage).toBeNull();
      done();
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
