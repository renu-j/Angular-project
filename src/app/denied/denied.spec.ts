import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Denied } from './denied';

describe('Denied', () => {
  let component: Denied;
  let fixture: ComponentFixture<Denied>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Denied],
    }).compileComponents();

    fixture = TestBed.createComponent(Denied);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});