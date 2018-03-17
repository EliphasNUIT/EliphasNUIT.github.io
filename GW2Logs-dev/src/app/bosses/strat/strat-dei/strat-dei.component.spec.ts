import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StratDeiComponent } from './strat-dei.component';

describe('StratDeiComponent', () => {
  let component: StratDeiComponent;
  let fixture: ComponentFixture<StratDeiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StratDeiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StratDeiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
