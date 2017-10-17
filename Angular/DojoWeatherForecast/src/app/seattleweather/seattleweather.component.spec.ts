import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeattleweatherComponent } from './seattleweather.component';

describe('SeattleweatherComponent', () => {
  let component: SeattleweatherComponent;
  let fixture: ComponentFixture<SeattleweatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeattleweatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeattleweatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
