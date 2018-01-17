import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StratGorseComponent } from './strat-gorse.component';

describe('StratGorseComponent', () => {
  let component: StratGorseComponent;
  let fixture: ComponentFixture<StratGorseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StratGorseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StratGorseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
