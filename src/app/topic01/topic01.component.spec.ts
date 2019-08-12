import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Topic01Component } from './topic01.component';

describe('Topic01Component', () => {
  let component: Topic01Component;
  let fixture: ComponentFixture<Topic01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Topic01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Topic01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
