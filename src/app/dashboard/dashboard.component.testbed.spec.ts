import {By} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {DebugElement} from '@angular/core';
import {Http} from '@angular/http';
import {async, inject, tick, ComponentFixture, TestBed} from '@angular/core/testing';
import {Observable} from 'rxjs/Observable';
import {DashboardComponent} from './dashboard.component';
import {DashboardModule} from './dashboard.module';
import {FakeBotDataObservableService} from '../model/bot/testing';
import {BotHttpDataObservableService} from '../model/bot';
import {SOME_FAKE_OBSERVABLE_BOTS} from "../model/bot/testing/fake-bot-data-observable.service";

/**
 * Tests the behaviour of the Dashboard component is as expected.
 *
 * It uses the Angular TestBed and a stubbed FakeBotDataObservableService.
 *
 * I think I prefer the notestbed approach - less code and accessing just the model, i.e. no By.css stuff...
 * But, TestBed useful if you need to test the UI rendering?
 *
 * Based off the main Angular tutorial:
 * https://angular.io/resources/live-examples/testing/ts/app-specs.plnkr.html
 */
let dashboardComponent: DashboardComponent;
let fixture: ComponentFixture<DashboardComponent>;
const BITSTAMP_BOT = 0;

/**
 * Add our custom Jasmine matchers.
 */
beforeEach(addMatchers);

/**
 * Add TestBed providers, compile, and create DashboardComponent.
 */
function compileAndCreate() {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                {provide: BotHttpDataObservableService, useClass: FakeBotDataObservableService},
                {provide: Router, useClass: RouterStub},
                {provide: Http, useValue: {}} // need this because the FakeBotDataObservableService extends
                                              // BotHttpDataObservableService
            ]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(DashboardComponent);
            dashboardComponent = fixture.componentInstance;
        });
    }));
}

/**
 * Test Dashboard by via the bx-dashboard-item directive.
 */
describe('DashboardComponent tests with TestBed (shallow)', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DashboardComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });
    });

    compileAndCreate();
    tests(clickForShallow);

    function clickForShallow() {
        const dashboardItemElement = fixture.debugElement.query(By.css('bx-dashboard-item'));
        // Triggers event to select the first <bx-dashboard-item> DebugElement
        dashboardItemElement.triggerEventHandler('selected', SOME_FAKE_OBSERVABLE_BOTS[BITSTAMP_BOT]);
    }
});

/**
 * Test Dashboard by accessing the div item class directly.
 */
describe('DashboardComponent tests with TestBed (deep)', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [DashboardModule]
        });
    });

    compileAndCreate();
    tests(clickForDeep);

    function clickForDeep() {
        // clicks the first <div class='item'> DebugElement
        const dashboardItem = fixture.debugElement.query(By.css('.item'));
        click(dashboardItem);
    }
});

/**
 * The (almost) same tests for both.
 * Only change: the way that the first Bot is clicked.
 */
function tests(botClick: Function) {

    it('should NOT have Bot items before ngOnInit', () => {
        expect(dashboardComponent.bots).not.toBeDefined('should not have Bots items before ngOnInit called');
    });

    describe('After BotDataService getBots() Observable is subscribed to', () => {

        /*
         * Hack to prevent runtime test error:
         *
         * Failed: Cannot use setInterval from within an async zone test.
         * Error: Cannot use setInterval from within an async zone test.
         *
         * See: https://github.com/angular/angular/issues/10127
         */
        beforeAll(() => {
            // Monkey-patch Observable.debounceTime() since it is using
            // setInterval() internally which not allowed within async zone
            Observable.prototype.debounceTime = function () { return this; };
        });

        // Trigger component so it gets bots and binds to them the UI bits
        beforeEach(async(() => {
            fixture.detectChanges(); // runs ngOnInit + ngAfterViewInit -> getBots()
            fixture.whenStable().then(() => fixture.detectChanges()); // bind to bots
        }));

        it('should have fetched 3 Bot items', (done) => {
            dashboardComponent.ngOnInit();
            dashboardComponent.bots.do((bots) => {

                expect(bots.length).toBe(3, 'should have 3 Bot items after ngAfterViewInit');

                // paranoia!
                expect(bots[0].id).toBe(1);
                expect(bots[1].id).toBe(2);
                expect(bots[2].id).toBe(3);

                done();
            }).toPromise(); // MUST have this for test to work!
            dashboardComponent.ngAfterViewInit();
        });

        it('should display 3 Bot items', () => {
            // Find and examine the displayed bots
            // Look for them in the DOM by css class
            const bots = fixture.debugElement.queryAll(By.css('bx-dashboard-item'));
            expect(bots.length).toBe(3, 'should display 3 Bot items');
        });

        it('should tell Router to navigate when Bot item selected',

            // inject our stubbed Router
            inject([Router], (router: Router) => {

                const spy = spyOn(router, 'navigateByUrl');

                // callback: trigger click on first inner <div class='item'> OR bx-dashboard-item triggerEventHandler
                botClick();

                // args passed to router.navigateByUrl()
                const navArgs = spy.calls.first().args[0];

                // expecting to navigate to id of the component's first Bot
                expect(navArgs).toBe('/bot/' + SOME_FAKE_OBSERVABLE_BOTS[BITSTAMP_BOT].id,
                    'should nav to BotDetailsComponent for first Bot');
            })
        );
    });
}

class RouterStub {
    navigateByUrl(url: string) {
        return url;
    }
}

/**
 * Testing utils below taken from Angular tutorial material:
 * https://angular.io/resources/live-examples/testing/ts/app-specs.plnkr.html
 */
export function addMatchers(): void {
  jasmine.addMatchers({
    toHaveText: toHaveText
  });
}
function toHaveText(): jasmine.CustomMatcher {
  return {
    compare: function (actual: any, expectedText: string, expectationFailOutput?: any): jasmine.CustomMatcherResult {
      const actualText = elementText(actual);
      const pass = actualText.indexOf(expectedText) > -1;
      const message = pass ? '' : composeMessage();
      return {pass, message};

      function composeMessage() {
        const a = (actualText.length < 100 ? actualText : actualText.substr(0, 100) + '...');
        const efo = expectationFailOutput ? ` '${expectationFailOutput}'` : '';
        return `Expected element to have text content '${expectedText}' instead of '${a}'${efo}`;
      }
    }
  };
}
function elementText(n: any): string {
  if (n instanceof Array) {
    return n.map(elementText).join('');
  }

  if (n.nodeType === Node.COMMENT_NODE) {
    return '';
  }

  if (n.nodeType === Node.ELEMENT_NODE && n.hasChildNodes()) {
    return elementText(Array.prototype.slice.call(n.childNodes));
  }

  if (n.nativeElement) {
    n = n.nativeElement;
  }

  return n.textContent;
}

// See https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button
/** Button events to pass to `DebugElement.triggerEventHandler` for RouterLink event handler */
export const ButtonClickEvents = {
  left: {button: 0},
  right: {button: 2}
};
/** Simulate element click. Defaults to mouse left-button click event. */
export function click(el: DebugElement | HTMLElement, eventObj: any = ButtonClickEvents.left): void {
  if (el instanceof HTMLElement) {
    el.click();
  } else {
    el.triggerEventHandler('click', eventObj);
  }
}
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */

