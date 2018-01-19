import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StratSabComponent } from './strat-sab.component';

describe('StratSabComponent', () => {
  let component: StratSabComponent;
  let fixture: ComponentFixture<StratSabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StratSabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StratSabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
