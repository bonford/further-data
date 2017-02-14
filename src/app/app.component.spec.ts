/* tslint:disable:no-unused-variable */
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpService } from './http/http.service';
import  {AbstractMockObservableService } from '../mocks/mock-observable.service';

class MockService extends AbstractMockObservableService {
  getFurtherData() {
    return this;
  }
}

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });

     TestBed.overrideComponent(AppComponent, {
    set: {
      providers: [
        { provide: HttpService, useClass: MockService }
      ]
    }
  }); 
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Further Data -- A new look at the numbers'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Further Data -- A new look at the numbers');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Further Data -- A new look at the numbers');
  }));
});
