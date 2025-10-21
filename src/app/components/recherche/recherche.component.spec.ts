import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RechercheComponent } from './recherche.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('RechercheComponent', () => {
  let component: RechercheComponent;
  let fixture: ComponentFixture<RechercheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RechercheComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: { get: () => 'test' } },
            params: of({ id: '123' }),        // mock pour subscribe()
            queryParams: of({ search: 'abc' }) // mock si queryParams utilisé
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
