import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StateManagement } from './state-management';

describe('StateManagement', () => {
  let component: StateManagement;
  let fixture: ComponentFixture<StateManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StateManagement],
    }).compileComponents();

    fixture = TestBed.createComponent(StateManagement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
