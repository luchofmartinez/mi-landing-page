import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeLab } from './theme-lab';

describe('ThemeLab', () => {
  let component: ThemeLab;
  let fixture: ComponentFixture<ThemeLab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeLab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeLab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
