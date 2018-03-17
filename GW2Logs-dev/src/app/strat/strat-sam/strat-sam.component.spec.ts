import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StratSamComponent } from './strat-sam.component';

describe('StratSamComponent', () => {
  let component: StratSamComponent;
  let fixture: ComponentFixture<StratSamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StratSamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StratSamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
