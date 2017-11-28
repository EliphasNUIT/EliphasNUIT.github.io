import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBuildComponent } from './display-build.component';

describe('DisplayBuildComponent', () => {
  let component: DisplayBuildComponent;
  let fixture: ComponentFixture<DisplayBuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayBuildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
