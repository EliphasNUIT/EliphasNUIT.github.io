import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StratXeraComponent } from './strat-xera.component';

describe('StratXeraComponent', () => {
  let component: StratXeraComponent;
  let fixture: ComponentFixture<StratXeraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StratXeraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StratXeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
