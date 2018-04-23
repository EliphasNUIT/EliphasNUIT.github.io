import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StratKingComponent } from './strat-king.component';

describe('StratKingComponent', () => {
  let component: StratKingComponent;
  let fixture: ComponentFixture<StratKingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StratKingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StratKingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
