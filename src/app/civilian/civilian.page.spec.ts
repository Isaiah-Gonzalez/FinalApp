import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilianPage } from './civilian.page';

describe('CivilianPage', () => {
  let component: CivilianPage;
  let fixture: ComponentFixture<CivilianPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivilianPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilianPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
