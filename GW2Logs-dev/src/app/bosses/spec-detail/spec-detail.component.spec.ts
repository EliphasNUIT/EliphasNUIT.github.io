import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecDetailComponent } from './spec-detail.component';

describe('SpecDetailComponent', () => {
  let component: SpecDetailComponent;
  let fixture: ComponentFixture<SpecDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
