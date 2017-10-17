import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurbankweatherComponent } from './burbankweather.component';

describe('BurbankweatherComponent', () => {
  let component: BurbankweatherComponent;
  let fixture: ComponentFixture<BurbankweatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurbankweatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurbankweatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
