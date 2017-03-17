/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CloudsComponent } from './clouds.component';

describe('CloudsComponent', () => {
  let component: CloudsComponent;
  let fixture: ComponentFixture<CloudsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
