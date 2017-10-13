import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteslistComponent } from './quoteslist.component';

describe('QuoteslistComponent', () => {
  let component: QuoteslistComponent;
  let fixture: ComponentFixture<QuoteslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
