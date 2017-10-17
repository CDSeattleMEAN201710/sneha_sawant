import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanjoseweatherComponent } from './sanjoseweather.component';

describe('SanjoseweatherComponent', () => {
  let component: SanjoseweatherComponent;
  let fixture: ComponentFixture<SanjoseweatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanjoseweatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanjoseweatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
