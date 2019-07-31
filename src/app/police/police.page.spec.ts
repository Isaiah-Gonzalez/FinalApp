import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicePage } from './police.page';

describe('PolicePage', () => {
  let component: PolicePage;
  let fixture: ComponentFixture<PolicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
