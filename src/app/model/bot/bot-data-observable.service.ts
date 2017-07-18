import "rxjs/add/operator/toPromise";
import {Observable} from "rxjs";
import {Bot} from "./bot.model";

/**
 * The Bot Data Service provides operations to update Bot configuration.
 * It demonstrates use of Observables in the operation responses.
 *
 * @author gazbert
 */
export interface BotDataObservableService {

    getBots(): Observable<Bot[]>;
    getBot(id: number): Observable<Bot>;
    getBotByName(name: string): Observable<Bot[]>;
    update(exchange: Bot): Observable<Bot>;
}
