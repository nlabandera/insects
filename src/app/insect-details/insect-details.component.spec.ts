import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsectDetailsComponent } from './insect-details.component';

describe('InsectDetailsComponent', () => {
  let component: InsectDetailsComponent;
  let fixture: ComponentFixture<InsectDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsectDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
