import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHeroTableComponent } from './super-hero-table.component';

describe('SuperHeroTableComponent', () => {
  let component: SuperHeroTableComponent;
  let fixture: ComponentFixture<SuperHeroTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperHeroTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperHeroTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
