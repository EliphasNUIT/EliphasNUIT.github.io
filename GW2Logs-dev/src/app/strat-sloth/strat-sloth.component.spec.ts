import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StratSlothComponent } from './strat-sloth.component';

describe('StratSlothComponent', () => {
  let component: StratSlothComponent;
  let fixture: ComponentFixture<StratSlothComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StratSlothComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StratSlothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
