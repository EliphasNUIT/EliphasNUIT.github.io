import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StratDhuumComponent } from './strat-dhuum.component';

describe('StratDhuumComponent', () => {
  let component: StratDhuumComponent;
  let fixture: ComponentFixture<StratDhuumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StratDhuumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StratDhuumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
