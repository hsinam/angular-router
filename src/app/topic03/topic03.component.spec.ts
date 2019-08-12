import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Topic03Component } from './topic03.component';

describe('Topic03Component', () => {
  let component: Topic03Component;
  let fixture: ComponentFixture<Topic03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Topic03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Topic03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
