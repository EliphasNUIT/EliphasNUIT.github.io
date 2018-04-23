import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StratEaterComponent } from './strat-eater.component';

describe('StratEaterComponent', () => {
  let component: StratEaterComponent;
  let fixture: ComponentFixture<StratEaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StratEaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StratEaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
