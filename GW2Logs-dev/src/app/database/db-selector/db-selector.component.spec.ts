import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbSelectorComponent } from './db-selector.component';

describe('DbSelectorComponent', () => {
  let component: DbSelectorComponent;
  let fixture: ComponentFixture<DbSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
