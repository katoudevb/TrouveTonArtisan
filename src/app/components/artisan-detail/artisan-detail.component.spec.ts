import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArtisanDetailComponent } from './artisan-detail.component';
import { ActivatedRoute } from '@angular/router';

describe('ArtisanDetailComponent', () => {
  let component: ArtisanDetailComponent;
  let fixture: ComponentFixture<ArtisanDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisanDetailComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: { get: () => '123' } } // mock simple avec un id factice
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ArtisanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
