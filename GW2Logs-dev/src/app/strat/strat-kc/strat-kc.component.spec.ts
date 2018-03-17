import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StratKcComponent } from './strat-kc.component';

describe('StratKcComponent', () => {
  let component: StratKcComponent;
  let fixture: ComponentFixture<StratKcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StratKcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StratKcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
