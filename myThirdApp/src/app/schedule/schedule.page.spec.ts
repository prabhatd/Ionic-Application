import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Schedule1Page } from './schedule.page';

describe('SchedulePage', () => {
  let component: Schedule1Page;
  let fixture: ComponentFixture<Schedule1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Schedule1Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Schedule1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
