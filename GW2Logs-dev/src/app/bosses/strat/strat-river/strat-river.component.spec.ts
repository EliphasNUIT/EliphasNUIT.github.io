import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StratRiverComponent } from './strat-river.component';

describe('StratRiverComponent', () => {
  let component: StratRiverComponent;
  let fixture: ComponentFixture<StratRiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StratRiverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StratRiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
