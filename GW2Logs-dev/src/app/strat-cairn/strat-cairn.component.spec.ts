import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StratCairnComponent } from './strat-cairn.component';

describe('StratCairnComponent', () => {
  let component: StratCairnComponent;
  let fixture: ComponentFixture<StratCairnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StratCairnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StratCairnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
