import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StratVgComponent } from './strat-vg.component';

describe('StratVgComponent', () => {
  let component: StratVgComponent;
  let fixture: ComponentFixture<StratVgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StratVgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StratVgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
