import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyjourneyComponent } from './myjourney.component';

describe('MyjourneyComponent', () => {
  let component: MyjourneyComponent;
  let fixture: ComponentFixture<MyjourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyjourneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyjourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
