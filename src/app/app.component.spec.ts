import { DebugElement } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BaseRequestOptions, Response, ResponseOptions, Http } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { SebmGoogleMapMarker, SebmGoogleMapInfoWindow, GoogleMapsAPIWrapper, MarkerManager, MapsAPILoader } from 'angular2-google-maps/core';
import { ResponsiveJsService } from './responsive-js/responsive-js.service';
import { HttpModule, Http } from '@angular/http';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed, async, fakeAsync, tick, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MockExchanges } from '..//mocks/exchanges.data.mock';
import { HttpService } from './http/http.service';

//note: createComponent calls have to be in the "it" blocks, not the beforeEach as in the tutorial
//      createComponent calls in the beforeEach will fail
describe('AppComponent', () => {

    let httpService: HttpService;
    let de: DebugElement;
    let el: HTMLElement;
    let spy: jasmine.Spy;
    const testQuote = 'Test Quote';




    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent],
            imports: [HttpModule],
            providers: [HttpService, GoogleMapsAPIWrapper, MapsAPILoader, ResponsiveJsService, MockBackend, BaseRequestOptions,
                {
                    provide: Http,
                    useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                    },
                    deps: [MockBackend, BaseRequestOptions],

                },
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });
        // TestBed.compileComponents();


    });

    it('should create a service', inject([HttpService], (service: HttpService) => {
        expect(service).toBeTruthy();
    }));

    it('should return exchanges', inject([HttpService, MockBackend], (service: HttpService, backend: MockBackend) => {
        let response = new ResponseOptions({
            body: JSON.stringify(MockExchanges)
        });

        const baseResponse = new Response(response);

        backend.connections.subscribe(
            (c: MockConnection) => c.mockRespond(baseResponse)
        );

        return service.getFurtherData().subscribe(data => {
            expect(data).toEqual(MockExchanges);
        });

    }));


    /*
        it('should not show quote before OnInit', () => {
            let fixture = TestBed.createComponent(AppComponent);
            const app = fixture.debugElement.componentInstance;
            httpService = fixture.debugElement.injector.get(HttpService);
       
            spy = spyOn(httpService, 'getFurtherData')
               .and.returnValue(Promise.resolve(testQuote));
            fixture.detectChanges();
            expect(app.stocks).toEqual(testQuote);
           // expect(spy.calls.any()).toBe(false, 'getQuote not yet called');
    
        });
      
            it('should still not show quote after component initialized', () => {
                const fixture = TestBed.createComponent(TwainComponent);
                const app = fixture.debugElement.componentInstance;
                twainService = fixture.debugElement.injector.get(TwainService);
                de = fixture.debugElement.query(By.css('.twain'));
                el = de.nativeElement;
                spy = spyOn(twainService, 'getQuote')
                    .and.returnValue(Promise.resolve(testQuote));
        
                fixture.detectChanges();
                // getQuote service is async => still has not returned with quote
                expect(el.textContent).toBe('...', 'no quote yet');
                expect(spy.calls.any()).toBe(true, 'getQuote called');
            });
        
        
            it('should show quote after getQuote promise (async)', async(() => {
                const fixture = TestBed.createComponent(TwainComponent);
                const app = fixture.debugElement.componentInstance;
                twainService = fixture.debugElement.injector.get(TwainService);
                de = fixture.debugElement.query(By.css('.twain'));
                el = de.nativeElement;
                spy = spyOn(twainService, 'getQuote')
                    .and.returnValue(Promise.resolve(testQuote));
        
                fixture.detectChanges();
                fixture.whenStable().then(() => { // wait for async getQuote
                    fixture.detectChanges();        // update view with quote
                    expect(el.textContent).toBe(testQuote);
                });
            }));
        
            it('should show quote after getQuote promise (fakeAsync)', fakeAsync(() => {
                const fixture = TestBed.createComponent(TwainComponent);
                const app = fixture.debugElement.componentInstance;
                twainService = fixture.debugElement.injector.get(TwainService);
                de = fixture.debugElement.query(By.css('.twain'));
                el = de.nativeElement;
                spy = spyOn(twainService, 'getQuote')
                    .and.returnValue(Promise.resolve(testQuote));
        
                fixture.detectChanges();
                tick();                  // wait for async getQuote
                fixture.detectChanges(); // update view with quote
                expect(el.textContent).toBe(testQuote);
            }));
        
        */

});