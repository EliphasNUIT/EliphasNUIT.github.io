import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StratSsComponent } from './strat-ss.component';

describe('StratSsComponent', () => {
  let component: StratSsComponent;
  let fixture: ComponentFixture<StratSsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StratSsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StratSsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
