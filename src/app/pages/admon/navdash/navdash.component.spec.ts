import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavdashComponent } from './navdash.component';

describe('NavdashComponent', () => {
  let component: NavdashComponent;
  let fixture: ComponentFixture<NavdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavdashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
