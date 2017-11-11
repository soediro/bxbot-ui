import {InMemoryDbService} from 'angular-in-memory-web-api';

/**
 * An in-memory data store for testing the app without the 'real' REST backend.
 *
 * The 'botId' attribute is only used for testing with the InMemory data model - it's a hack for testing.
 * The objects returned in the responses from the real backend (bxbot-ui-server) will not include a 'botId' attribute.
 *
 * @author gazbert
 */
export class InMemoryDataService implements InMemoryDbService {

    createDb() {

        /**
         * The Bot statuses.
         */
        const status = [
            {
                id: 'bitstamp-1',
                displayName: 'Bitstamp Bot',
                status: 'Running'
            },
            {
                id: 'gdax-1',
                displayName: 'GDAX Bot',
                status: 'Running'
            },
            {
                id: 'gemini-1',
                displayName: 'Gemini Bot',
                status: 'Stopped'
            },
            {
                id: 'itbit-1',
                displayName: 'ItBit Bot',
                status: 'Running'
            },
            {
                id: 'huobi-1',
                displayName: 'Huobi Bot',
                status: 'Running'
            },
            {
                id: 'okcoin-1',
                displayName: 'OKCoin Bot',
                status: 'Running'
            },
            {
                id: 'bitfinex-1',
                displayName: 'Bitfinex Bot',
                status: 'Stopped'
            },
            {
                id: 'kraken-1',
                displayName: 'Kraken Bot',
                status: 'Running'
            }
        ];

        /**
         * The Trading Engines.
         *
         * The botId and the id attributes must have the same value.
         * This is hack to use the InMemory data store API with multiple bots.
         */
        const engines = [
            {
                botId: 'bitstamp-1',
                id: 'bitstamp-1',
                botName: 'Bitstamp',
                tradeCycleInterval: 30,
                emergencyStopCurrency: 'BTC',
                emergencyStopBalance: 0.5
            },
            {
                botId: 'gdax-1',
                id: 'gdax-1',
                botName: 'GDAX',
                tradeCycleInterval: 10,
                emergencyStopCurrency: 'BTC',
                emergencyStopBalance: 0.8
            },
            {
                botId: 'gemini-1',
                id: 'gemini-1',
                botName: 'Gemini',
                tradeCycleInterval: 30,
                emergencyStopCurrency: 'ETH',
                emergencyStopBalance: 10.5
            },
            {
                botId: 'itbit-1',
                id: 'itbit-1',
                botName: 'ItBit',
                tradeCycleInterval: 10,
                emergencyStopCurrency: 'XBT',
                emergencyStopBalance: 3.1
            },
            {
                botId: 'huobi-1',
                id: 'huobi-1',
                botName: 'Huobi',
                tradeCycleInterval: 120,
                emergencyStopCurrency: 'BTC',
                emergencyStopBalance: 0.9
            },
            {
                botId: 'okcoin-1',
                id: 'okcoin-1',
                botName: 'OKCoin',
                tradeCycleInterval: 60,
                emergencyStopCurrency: 'BTC',
                emergencyStopBalance: 2.1
            },
            {
                botId: 'bitfinex-1',
                id: 'bitfinex-1',
                botName: 'Bitfinex',
                tradeCycleInterval: 3600,
                emergencyStopCurrency: 'BTC',
                emergencyStopBalance: 5.5
            },
            {
                botId: 'kraken-1',
                id: 'kraken-1',
                botName: 'Kraken',
                tradeCycleInterval: 360,
                emergencyStopCurrency: 'XBT',
                emergencyStopBalance: 7.5
            }
        ];

        /**
         * The Exchanges.
         *
         * The botId and the id attributes must have the same value.
         * This is hack to use the InMemory data store API with multiple bots.
         */
        const exchanges = [
            {
                botId: 'bitstamp-1',
                id: 'bitstamp-1',
                name: 'Bitstamp',
                className: 'com.gazbert.bxbot.exchanges.BitstampExchangeAdapter',
                networkConfig: {
                    connectionTimeout: 60,
                    nonFatalErrorHttpStatusCodes: [
                        503,
                        522
                    ],
                    nonFatalErrorMessages: [
                        'Connection reset',
                        'Connection refused'
                    ]
                },
                optionalConfig: {
                    configItems: []
                }
            },
            {
                botId: 'gdax-1',
                id: 'gdax-1',
                name: 'GDAX',
                className: 'com.gazbert.bxbot.exchanges.GdaxExchangeAdapter',
                networkConfig: {
                    connectionTimeout: 120,
                    nonFatalErrorHttpStatusCodes: [
                        503,
                        522
                    ],
                    nonFatalErrorMessages: [
                        'Connection reset',
                        'Connection refused'
                    ]
                },
                optionalConfig: {
                    configItems: [
                        {
                            name: 'buy-fee',
                            value: '0.25'
                        },
                        {
                            name: 'sell-fee',
                            value: '0.25'
                        }
                    ]
                }
            },
            {
                botId: 'gemini-1',
                id: 'gemini-1',
                name: 'Gemini',
                className: 'com.gazbert.bxbot.exchanges.GeminiExchangeAdapter',
                networkConfig: {
                    connectionTimeout: 90,
                    nonFatalErrorHttpStatusCodes: [
                        503,
                        504
                    ],
                    nonFatalErrorMessages: [
                        'Connection reset',
                        'Remote host closed connection during handshake'
                    ]
                },
                optionalConfig: {
                    configItems: [
                        {
                            name: 'buy-fee',
                            value: '0.25'
                        },
                        {
                            name: 'sell-fee',
                            value: '0.25'
                        }
                    ]
                }
            },
            {
                botId: 'itbit-1',
                id: 'itbit-1',
                name: 'ItBit',
                className: 'com.gazbert.bxbot.exchanges.ItBitExchangeAdapter',
                networkConfig: {
                    connectionTimeout: 30,
                    nonFatalErrorHttpStatusCodes: [
                        503,
                        522
                    ],
                    nonFatalErrorMessages: [
                        'Connection reset',
                        'Connection refused'
                    ]
                },
                optionalConfig: {
                    configItems: [
                        {
                            name: 'buy-fee',
                            value: '0.2'
                        },
                        {
                            name: 'sell-fee',
                            value: '0.2'
                        }
                    ]
                }
            },
            {
                botId: 'huobi-1',
                id: 'huobi-1',
                name: 'Huobi',
                className: 'com.gazbert.bxbot.exchanges.HuobiExchangeAdapter',
                networkConfig: {
                    connectionTimeout: 45,
                    nonFatalErrorHttpStatusCodes: [
                        504,
                        522
                    ],
                    nonFatalErrorMessages: [
                        'Connection reset',
                        'Remote host closed connection during handshake'
                    ]
                },
                optionalConfig: {
                    configItems: [
                        {
                            name: 'buy-fee',
                            value: '0.2'
                        },
                        {
                            name: 'sell-fee',
                            value: '0.2'
                        }
                    ]
                }
            },
            {
                botId: 'okcoin-1',
                id: 'okcoin-1',
                name: 'OKCoin',
                className: 'com.gazbert.bxbot.exchanges.OkCoinExchangeAdapter',
                networkConfig: {
                    connectionTimeout: 50,
                    nonFatalErrorHttpStatusCodes: [
                        503,
                        504
                    ],
                    nonFatalErrorMessages: [
                        'Connection reset',
                        'Connection refused'
                    ]
                },
                optionalConfig: {
                    configItems: [
                        {
                            name: 'buy-fee',
                            value: '0.25'
                        },
                        {
                            name: 'sell-fee',
                            value: '0.25'
                        }
                    ]
                }
            },
            {
                botId: 'bitfinex-1',
                id: 'bitfinex-1',
                name: 'Bitfinex',
                className: 'com.gazbert.bxbot.exchanges.BitfinexExchangeAdapter',
                networkConfig: {
                    connectionTimeout: 20,
                    nonFatalErrorHttpStatusCodes: [
                        504,
                        522
                    ],
                    nonFatalErrorMessages: [
                        'Connection reset',
                        'Remote host closed connection during handshake'
                    ]
                },
                optionalConfig: {
                    configItems: []
                }
            },
            {
                botId: 'kraken-1',
                id: 'kraken-1',
                name: 'Kraken',
                className: 'com.gazbert.bxbot.exchanges.KrakenExchangeAdapter',
                networkConfig: {
                    connectionTimeout: 60,
                    nonFatalErrorHttpStatusCodes: [
                        504,
                        522
                    ],
                    nonFatalErrorMessages: [
                        'Remote host closed connection during handshake'
                    ]
                },
                optionalConfig: {
                    configItems: [
                        {
                            name: 'buy-fee',
                            value: '0.26'
                        },
                        {
                            name: 'sell-fee',
                            value: '0.26'
                        }
                    ]
                }
            }
        ];

        /**
         * The Markets being trading on.
         *
         * The botId and the id attributes must have the same value.
         * This is hack to use the InMemory data store API with multiple bots.
         */
        const markets = [
            {
                botId: 'bitstamp-1',
                id: 'bitstamp_btc_usd',
                marketId: 'btcusd',
                name: 'BTC/USD',
                enabled: false,
                baseCurrency: 'BTC',
                counterCurrency: 'USD',
                strategy: {
                    id: 'bitstamp_ema',
                    exchangeId: 'bitstamp',
                    name: 'EMA Indicator',
                    description: 'EMA Indicator algo for deciding when to enter and exit trades.',
                    className: 'com.gazbert.bxbot.strategies.EmaStrategy',
                    optionalConfig: {
                        configItems: [
                            {
                                name: 'ema-short-interval',
                                value: '10'
                            },
                            {
                                name: 'ema-long-interval',
                                value: '20'
                            }
                        ]
                    }
                }
            },
            {
                botId: 'gdax-1',
                id: 'gdax_btc_usd',
                marketId: 'BTC-USD',
                name: 'BTC/USD',
                enabled: false,
                baseCurrency: 'BTC',
                counterCurrency: 'USD',
                strategy: {
                    id: 'gdax_ema',
                    exchangeId: 'gdax',
                    name: 'EMA Indicator',
                    description: 'EMA Indicator algo for deciding when to enter and exit trades.',
                    className: 'com.gazbert.bxbot.strategies.EmaStrategy',
                    optionalConfig: {
                        configItems: [
                            {
                                name: 'ema-short-interval',
                                value: '5'
                            },
                            {
                                name: 'ema-long-interval',
                                value: '20'
                            }
                        ]
                    }
                }
            },
            {
                botId: 'gdax-1',
                id: 'gdax_btc_gbp',
                marketId: 'BTC-GBP',
                name: 'BTC/GBP',
                enabled: true,
                baseCurrency: 'BTC',
                counterCurrency: 'GBP',
                strategy: {
                    id: 'gdax_long-scalper',
                    exchangeId: 'gdax',
                    name: 'Long Scalper',
                    description: 'Scalping strategy that buys low and sells high.',
                    className: 'com.gazbert.bxbot.strategies.LongScalperStrategy',
                    optionalConfig: {
                        configItems: [
                            {
                                name: 'min-percentage-gain',
                                value: '1.0'
                            }
                        ]
                    }
                }
            },
            {
                botId: 'gemini-1',
                id: 'gemini_eth_btc',
                marketId: 'ethbtc',
                name: 'ETH/BTC',
                enabled: false,
                baseCurrency: 'ETH',
                counterCurrency: 'BTC',
                strategy: {
                    id: 'gemini_macd',
                    exchangeId: 'gemini',
                    name: 'MACD Indicator',
                    description: 'MACD Indicator algo for deciding when to enter and exit trades.',
                    className: 'com.gazbert.bxbot.strategies.MacdStrategy',
                    optionalConfig: {
                        configItems: [
                            {
                                name: 'ema-short-interval',
                                value: '12'
                            },
                            {
                                name: 'ema-long-interval',
                                value: '26'
                            },
                            {
                                name: 'signal-line',
                                value: '9'
                            }
                        ]
                    }
                }
            },
            {
                botId: 'itbit-1',
                id: 'itbit_xbt_usd',
                marketId: 'XBTUSD',
                name: 'XBT/USD',
                enabled: false,
                baseCurrency: 'XBT',
                counterCurrency: 'USD',
                strategy: {
                    id: 'itbit_macd',
                    exchangeId: 'itbit',
                    name: 'MACD Indicator',
                    description: 'MACD Indicator algo for deciding when to enter and exit trades.',
                    className: 'com.gazbert.bxbot.strategies.MacdStrategy',
                    optionalConfig: {
                        configItems: [
                            {
                                name: 'ema-short-interval',
                                value: '12'
                            },
                            {
                                name: 'ema-long-interval',
                                value: '26'
                            },
                            {
                                name: 'signal-line',
                                value: '9'
                            }
                        ]
                    }
                }
            },
            {
                botId: 'huobi-1',
                id: 'huobi_btc_usd',
                marketId: 'BTC-USD',
                name: 'BTC/USD',
                enabled: false,
                baseCurrency: 'BTC',
                counterCurrency: 'USD',
                strategy: {
                    id: 'huobi_macd',
                    exchangeId: 'huobi',
                    name: 'MACD Indicator',
                    description: 'MACD Indicator algo for deciding when to enter and exit trades.',
                    className: 'com.gazbert.bxbot.strategies.MacdStrategy',
                    optionalConfig: {
                        configItems: [
                            {
                                name: 'ema-short-interval',
                                value: '12'
                            },
                            {
                                name: 'ema-long-interval',
                                value: '26'
                            },
                            {
                                name: 'signal-line',
                                value: '9'
                            }
                        ]
                    }
                }
            },
            {
                botId: 'huobi-1',
                id: 'huobi_ltc_usd',
                marketId: 'BTC-LTC',
                name: 'LTC/USD',
                enabled: true,
                baseCurrency: 'LTC',
                counterCurrency: 'USD',
                strategy: {
                    id: 'huobi_long-scalper',
                    exchangeId: 'huobi',
                    name: 'Long Scalper',
                    description: 'Scalping strategy that buys low and sells high.',
                    className: 'com.gazbert.bxbot.strategies.LongScalperStrategy',
                    optionalConfig: {
                        configItems: [
                            {
                                name: 'min-percentage-gain',
                                value: '0.5'
                            }
                        ]
                    }
                }
            },
            {
                botId: 'okcoin-1',
                id: 'okcoin_btc_usd',
                marketId: 'okcoin_btc_usd',
                name: 'BTC/USD',
                enabled: false,
                baseCurrency: 'BTC',
                counterCurrency: 'USD',
                strategy: {
                    id: 'okcoin_ema',
                    exchangeId: 'okcoin',
                    name: 'MACD Indicator',
                    description: 'EMA Indicator algo for deciding when to enter and exit trades.',
                    className: 'com.gazbert.bxbot.strategies.EmaStrategy',
                    optionalConfig: {
                        configItems: [
                            {
                                name: 'ema-short-interval',
                                value: '10'
                            },
                            {
                                name: 'ema-long-interval',
                                value: '20'
                            }
                        ]
                    }
                }
            },
            {
                botId: 'bitfinex-1',
                id: 'bitfinex_btc_usd',
                marketId: 'btcusd',
                name: 'BTC/USD',
                enabled: false,
                baseCurrency: 'BTC',
                counterCurrency: 'USD',
                strategy: {
                    id: 'bitfinex_long-scalper',
                    exchangeId: 'bitfinex',
                    name: 'Long Scalper',
                    description: 'Scalping strategy that buys low and sells high.',
                    className: 'com.gazbert.bxbot.strategies.LongScalperStrategy',
                    optionalConfig: {
                        configItems: [
                            {
                                name: 'min-percentage-gain',
                                value: '1.75'
                            }
                        ]
                    }
                }
            },
            {
                botId: 'kraken-1',
                id: 'kraken_xbt_usd',
                marketId: 'XBTUSD',
                name: 'XBT/USD',
                enabled: false,
                baseCurrency: 'XXBT',
                counterCurrency: 'ZUSD',
                strategy: {
                    id: 'kraken_ema',
                    exchangeId: 'kraken',
                    name: 'EMA Indicator',
                    description: 'EMA Indicator algo for deciding when to enter and exit trades.',
                    className: 'com.gazbert.bxbot.strategies.EmaStrategy',
                    optionalConfig: {
                        configItems: [
                            {
                                name: 'ema-short-interval',
                                value: '10'
                            },
                            {
                                name: 'ema-long-interval',
                                value: '20'
                            }
                        ]
                    }
                }
            }
        ];

        /**
         * The Trading Strategies being executed.
         *
         * The botId and the id attributes must have the same value.
         * This is hack to use the InMemory data store API with multiple bots.
         */
        const strategies = [
            {
                botId: 'huobi-1',
                id: 'huobi_macd',
                name: 'MACD Indicator',
                description: 'MACD Indicator algo for deciding when to enter and exit trades.',
                className: 'com.gazbert.bxbot.strategies.MacdStrategy',
                optionalConfig: {
                    configItems: [
                        {
                            name: 'ema-short-interval',
                            value: '12'
                        },
                        {
                            name: 'ema-long-interval',
                            value: '26'
                        },
                        {
                            name: 'signal-line',
                            value: '9'
                        }
                    ]
                }
            },
            {
                botId: 'huobi-1',
                id: 'huobi_long-scalper',
                name: 'Long Scalper',
                description: 'Scalping strategy that buys low and sells high.',
                className: 'com.gazbert.bxbot.strategies.LongScalperStrategy',
                optionalConfig: {
                    configItems: [
                        {
                            name: 'min-percentage-gain',
                            value: '0.5'
                        }
                    ]
                }
            },
            {
                botId: 'huobi-1',
                id: 'huobi_short-scalper',
                name: 'Short Scalper',
                description: 'Scalping strategy that sells and buys back more units at lower price.',
                className: 'com.gazbert.bxbot.strategies.ShortScalperStrategy',
                optionalConfig: {
                    configItems: [
                        {
                            name: 'min-percentage-gain',
                            value: '0.5'
                        }
                    ]
                }
            },
            {
                id: 'gdax_long-scalper',
                botId: 'gdax-1',
                name: 'Long Scalper',
                description: 'Scalping strategy that buys low and sells high.',
                className: 'com.gazbert.bxbot.strategies.LongScalperStrategy',
                optionalConfig: {
                    configItems: [
                        {
                            name: 'min-percentage-gain',
                            value: '1.0'
                        }
                    ]
                }
            },
            {
                botId: 'gdax-1',
                id: 'gdax_ema',
                name: 'EMA Indicator',
                description: 'EMA Indicator algo for deciding when to enter and exit trades.',
                className: 'com.gazbert.bxbot.strategies.EmaStrategy',
                optionalConfig: {
                    configItems: [
                        {
                            name: 'ema-short-interval',
                            value: '5'
                        },
                        {
                            name: 'ema-long-interval',
                            value: '20'
                        }
                    ]
                }
            },
            {
                botId: 'bitstamp-1',
                id: 'bitstamp_ema',
                name: 'EMA Indicator',
                description: 'EMA Indicator algo for deciding when to enter and exit trades.',
                className: 'com.gazbert.bxbot.strategies.EmaStrategy',
                optionalConfig: {
                    configItems: [
                        {
                            name: 'ema-short-interval',
                            value: '10'
                        },
                        {
                            name: 'ema-long-interval',
                            value: '20'
                        }
                    ]
                }
            },
            {
                botId: 'gemini-1',
                id: 'gemini_macd',
                name: 'MACD Indicator',
                description: 'MACD Indicator algo for deciding when to enter and exit trades.',
                className: 'com.gazbert.bxbot.strategies.MacdStrategy',
                optionalConfig: {
                    configItems: [
                        {
                            name: 'ema-short-interval',
                            value: '12'
                        },
                        {
                            name: 'ema-long-interval',
                            value: '26'
                        },
                        {
                            name: 'signal-line',
                            value: '9'
                        }
                    ]
                }
            },
            {
                botId: 'gemini-1',
                id: 'gemini_long-scalper',
                name: 'Long Scalper',
                description: 'Scalping strategy that buys low and sells high.',
                className: 'com.gazbert.bxbot.strategies.LongScalperStrategy',
                optionalConfig: {
                    configItems: [
                        {
                            name: 'min-percentage-gain',
                            value: '0.75'
                        }
                    ]
                }
            },
            {
                botId: 'okcoin-1',
                id: 'okcoin_ema',
                name: 'MACD Indicator',
                description: 'EMA Indicator algo for deciding when to enter and exit trades.',
                className: 'com.gazbert.bxbot.strategies.EmaStrategy',
                optionalConfig: {
                    configItems: [
                        {
                            name: 'ema-short-interval',
                            value: '10'
                        },
                        {
                            name: 'ema-long-interval',
                            value: '20'
                        }
                    ]
                }
            },
            {
                botId: 'bitfinex-1',
                id: 'bitfinex_long-scalper',
                name: 'Long Scalper',
                description: 'Scalping strategy that buys low and sells high.',
                className: 'com.gazbert.bxbot.strategies.LongScalperStrategy',
                optionalConfig: {
                    configItems: [
                        {
                            name: 'min-percentage-gain',
                            value: '1.75'
                        }
                    ]
                }
            },
            {
                botId: 'kraken-1',
                id: 'kraken_ema',
                name: 'EMA Indicator',
                description: 'EMA Indicator algo for deciding when to enter and exit trades.',
                className: 'com.gazbert.bxbot.strategies.EmaStrategy',
                optionalConfig: {
                    configItems: [
                        {
                            name: 'ema-short-interval',
                            value: '10'
                        },
                        {
                            name: 'ema-long-interval',
                            value: '20'
                        }
                    ]
                }
            },
            {
                botId: 'itbit-1',
                id: 'itbit_long-scalper',
                name: 'Long Scalper',
                description: 'Scalping strategy that buys low and sells high.',
                className: 'com.gazbert.bxbot.strategies.LongScalperStrategy',
                optionalConfig: {
                    configItems: [
                        {
                            name: 'min-percentage-gain',
                            value: '1.0'
                        }
                    ]
                }
            },
            {
                botId: 'itbit-1',
                id: 'itbit_macd',
                name: 'MACD Indicator',
                description: 'MACD Indicator algo for deciding when to enter and exit trades.',
                className: 'com.gazbert.bxbot.strategies.MacdStrategy',
                optionalConfig: {
                    configItems: [
                        {
                            name: 'ema-short-interval',
                            value: '12'
                        },
                        {
                            name: 'ema-long-interval',
                            value: '26'
                        },
                        {
                            name: 'signal-line',
                            value: '9'
                        }
                    ]
                }
            },
        ];

        /**
         * The Email Alerts config for bots to send alert messages.
         *
         * The botId and the id attributes must have the same value.
         * This is hack to use the InMemory data store API with multiple bots.
         */
        const email_alerts = [
            {
                botId: 'bitstamp-1',
                id: 'bitstamp-1',
                enabled: false,
                smtpConfig: {
                    smtpHost: 'smtp.gmail.com',
                    smtpPort: 587,
                    accountUsername: 'bobfett',
                    accountPassword: 'iLoveHoth',
                    toAddress: 'jabba@tatooine.space',
                    fromAddress: 'boba.fett@hoth.space'
                }
            },
            {
                botId: 'gdax-1',
                id: 'gdax-1',
                enabled: true,
                smtpConfig: {
                    smtpHost: 'smtp.gmail.com',
                    smtpPort: 587,
                    accountUsername: 'solo',
                    accountPassword: 'NeverTellMeTheOdds_',
                    toAddress: 'lando@cloudcity.space',
                    fromAddress: 'han.solo@falcon.space'
                }
            },
            {
                botId: 'gemini-1',
                id: 'gemini-1',
                enabled: true,
                smtpConfig: {
                    smtpHost: 'smtp.gmail.com',
                    smtpPort: 587,
                    accountUsername: 'c3po',
                    accountPassword: 'ohMy',
                    toAddress: 'bb-8@jakku.space',
                    fromAddress: 'c-3p0@naboo.space'
                }
            },
            {
                botId: 'itbit-1',
                id: 'itbit-1',
                enabled: true,
                smtpConfig: {
                    smtpHost: 'smtp.gmail.com',
                    smtpPort: 587,
                    accountUsername: 'gold5',
                    accountPassword: 'stayOnTarget',
                    toAddress: 'chewy@kashyyyk.space',
                    fromAddress: 'gold5@x-wing.space'
                }
            },
            {
                botId: 'huobi-1',
                id: 'huobi-1',
                enabled: false,
                smtpConfig: {
                    smtpHost: 'smtp.gmail.com',
                    smtpPort: 587,
                    accountUsername: 'ackbar-1',
                    accountPassword: 'ItsATrap#',
                    toAddress: 'leia@alderaan.space',
                    fromAddress: 'admiral.ackbar@some-one.space'
                }
            },
            {
                botId: 'okcoin-1',
                id: 'okcoin-1',
                enabled: true,
                smtpConfig: {
                    smtpHost: 'smtp.gmail.com',
                    smtpPort: 587,
                    accountUsername: 'yoda',
                    accountPassword: 'DoOrDoNotThereIsNoTry£',
                    toAddress: 'r2d2@naboo.space',
                    fromAddress: 'master.yoda@dagobah.space'
                }
            },
            {
                botId: 'bitfinex-1',
                id: 'bitfinex-1',
                enabled: true,
                smtpConfig: {
                    smtpHost: 'smtp.gmail.com',
                    smtpPort: 587,
                    accountUsername: 'obiwan',
                    accountPassword: '@UseTheForceLuke',
                    toAddress: 'luke.skywalker@tatooine.space',
                    fromAddress: 'Obi.Wan@coruscant.space'
                }
            },
            {
                botId: 'kraken-1',
                id: 'kraken-1',
                enabled: true,
                smtpConfig: {
                    smtpHost: 'smtp.gmail.com',
                    smtpPort: 587,
                    accountUsername: 'darthvader',
                    accountPassword: 'TheForceIsStrongWithThisOne',
                    toAddress: 'boba.fett@hoth.space',
                    fromAddress: 'darth@deathstar.space'
                }
            }
        ];

        return {status, engines, exchanges, markets, strategies, email_alerts};
    }
}
