import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Topic02Component } from './topic02.component';

describe('Topic02Component', () => {
  let component: Topic02Component;
  let fixture: ComponentFixture<Topic02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Topic02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Topic02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
