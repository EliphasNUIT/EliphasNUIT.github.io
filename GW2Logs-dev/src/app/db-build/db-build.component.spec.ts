import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbBuildComponent } from './db-build.component';

describe('DbBuildComponent', () => {
  let component: DbBuildComponent;
  let fixture: ComponentFixture<DbBuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbBuildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
