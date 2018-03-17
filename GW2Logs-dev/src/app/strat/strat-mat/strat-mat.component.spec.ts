import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StratMatComponent } from './strat-mat.component';

describe('StratMatComponent', () => {
  let component: StratMatComponent;
  let fixture: ComponentFixture<StratMatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StratMatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StratMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
