import 'rxjs/add/operator/toPromise';
import {Exchange} from '../exchange.model';

/**
 * The Exchange Data Service provides operations to update Exchange configuration.
 * It demonstrates use of Promises in the operation responses.
 *
 * @author gazbert
 */
export interface ExchangeDataPromiseService {

    getExchangeByBotId(id: string): Promise<Exchange>;

    updateExchange(botId: string, exchange: Exchange): Promise<Exchange>;
}
