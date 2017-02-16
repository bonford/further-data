/* tslint:disable:no-unused-variable */
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpService } from './http/http.service';
import  {AbstractMockObservableService } from '../mocks/mock-observable.service';
import {SebmGoogleMapMarker, SebmGoogleMapInfoWindow, GoogleMapsAPIWrapper, MarkerManager, MapsAPILoader} from 'angular2-google-maps/core';
import { ResponsiveJsService } from './responsive-js/responsive-js.service'

class MockService extends AbstractMockObservableService {
  getFurtherData() {
    return this;
  }
}

class MockResponsiveJsService extends ResponsiveJsService {
   makeResponsiveAdjustments(map:any){
     return true;
   }
}

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [GoogleMapsAPIWrapper, MapsAPILoader, ResponsiveJsService, HttpService],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });

     TestBed.overrideComponent(AppComponent, {
    set: {
      providers: [
        { provide: HttpService, useClass: MockService },
        { provide: ResponsiveJsService, useClass: MockResponsiveJsService }
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

  it('should have as title: Further Data -- A new look at the numbers', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Further Data -- A new look at the numbers');
    console.log(app);
  }));
/*
ngOnInit(){
    this._httpService.getFurtherData()
    .subscribe(resFurtherData => this.stocks = resFurtherData);
  }
  */
   it('should call getFurtherData on initialization', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    let service = fixture.debugElement.injector.get(HttpService);
    const app = fixture.debugElement.componentInstance;
    spyOn(service,'getFurtherData');
    app.ngOnInit();
    fixture.detectChanges();
    expect(service.getFurtherData).toHaveBeenCalled();
    
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Further Data -- A new look at the numbers');
  }));
});
