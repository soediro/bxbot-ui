import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {StrategiesComponent} from './strategies.component';
import {SharedModule} from '../shared/shared.module';

/**
 * Module encapsulates the Strategies config management.
 *
 * @author gazbert
 */
@NgModule({
    imports: [
        BrowserModule, // must have this if we do anything with *ngFor, *ngIf etc
        FormsModule,
        SharedModule
    ],
    exports: [StrategiesComponent],
    declarations: [StrategiesComponent]
})
export class StrategiesModule {
}
