import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StratMoComponent } from './strat-mo.component';

describe('StratMoComponent', () => {
  let component: StratMoComponent;
  let fixture: ComponentFixture<StratMoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StratMoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StratMoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
