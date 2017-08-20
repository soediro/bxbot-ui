import {browser, element, by, protractor} from 'protractor';

/**
 * Trading Strategy screen tests.
 *
 * See: http://www.protractortest.org/#/tutorial
 *
 * TODO - Use by.repeater()/model() instead of by.css() once Angular implement it for lists:
 * https://angular.io/docs/ts/latest/guide/upgrade.html
 * https://github.com/angular/protractor/issues/3205
 *
 * @author gazbert
 */
fdescribe('Trading Strategy Tests', function () {

    beforeEach(function () {
        browser.get('');
    });

    it('should update Trading Strategy fields after Save', function () {

        const dashboardItems = element.all(by.css('app-bxbot-ui-dashboard-item'));
        dashboardItems.get(3).click();
        expect(element(by.css('h2')).getText()).toEqual('ItBit Details');

        const tabLinks = element.all(by.css('li'));
        tabLinks.get(3).click();

        // Strat 1
        expect(element(by.id('tradingStrategyName_0')).getAttribute('value')).toBe('Long Scalper');
        expect(element(by.id('tradingStrategyDescription_0')).getAttribute('value'))
            .toBe('Scalping strategy that buys low and sells high.');
        expect(element(by.id('tradingStrategyClassname_0')).getAttribute('value'))
            .toBe('com.gazbert.bxbot.strategies.LongScalperStrategy');

        // Strat 2
        expect(element(by.id('tradingStrategyName_1')).getAttribute('value')).toBe('MACD Indicator');
        expect(element(by.id('tradingStrategyDescription_1')).getAttribute('value'))
            .toBe('MACD Indicator algo for deciding when to enter and exit trades.');
        expect(element(by.id('tradingStrategyClassname_1')).getAttribute('value'))
            .toBe('com.gazbert.bxbot.strategies.MacdStrategy');

        // Update Strat 1 fields
        const strategyName = element(by.id('tradingStrategyName_0'));
        const newStrategyName = 'EMA Indicator 2';
        strategyName.clear();
        strategyName.sendKeys(newStrategyName);
        expect(strategyName.getAttribute('value')).toBe(newStrategyName);

        const strategyDescription = element(by.id('tradingStrategyDescription_0'));
        const newStrategyDescription = 'EMA Indicator algo for deciding when to enter and exit trades.';
        strategyDescription.clear();
        strategyDescription.sendKeys(newStrategyDescription);
        expect(strategyDescription.getAttribute('value')).toBe(newStrategyDescription);

        const strategyClassName = element(by.id('tradingStrategyClassname_0'));
        const newStrategyClassName = 'com.gazbert.bxbot.strategies2.EmaIndicator2';
        strategyClassName.clear();
        strategyClassName.sendKeys(newStrategyClassName);
        expect(strategyClassName.getAttribute('value')).toBe(newStrategyClassName);

        // Save and check the update worked
        const saveButton = element(by.id('strategySaveButton'));
        saveButton.click();
        dashboardItems.get(3).click();
        tabLinks.get(3).click();

        // Strat 1 updated
        expect(element(by.id('tradingStrategyName_0')).getAttribute('value')).toBe(newStrategyName);
        expect(element(by.id('tradingStrategyDescription_0')).getAttribute('value')).toBe(newStrategyDescription);
        expect(element(by.id('tradingStrategyClassname_0')).getAttribute('value')).toBe(newStrategyClassName);

        // Strat 2 unchanged
        expect(element(by.id('tradingStrategyName_1')).getAttribute('value')).toBe('MACD Indicator');
        expect(element(by.id('tradingStrategyDescription_1')).getAttribute('value'))
            .toBe('MACD Indicator algo for deciding when to enter and exit trades.');
        expect(element(by.id('tradingStrategyClassname_1')).getAttribute('value'))
            .toBe('com.gazbert.bxbot.strategies.MacdStrategy');
    });

    it('should NOT update Trading Strategy fields after Cancel', function () {

        const dashboardItems = element.all(by.css('app-bxbot-ui-dashboard-item'));
        dashboardItems.get(3).click();
        expect(element(by.css('h2')).getText()).toEqual('ItBit Details');

        const tabLinks = element.all(by.css('li'));
        tabLinks.get(3).click();

        // Strat 1
        expect(element(by.id('tradingStrategyName_0')).getAttribute('value')).toBe('Long Scalper');
        expect(element(by.id('tradingStrategyDescription_0')).getAttribute('value'))
            .toBe('Scalping strategy that buys low and sells high.');
        expect(element(by.id('tradingStrategyClassname_0')).getAttribute('value'))
            .toBe('com.gazbert.bxbot.strategies.LongScalperStrategy');

        // Strat 2
        expect(element(by.id('tradingStrategyName_1')).getAttribute('value')).toBe('MACD Indicator');
        expect(element(by.id('tradingStrategyDescription_1')).getAttribute('value'))
            .toBe('MACD Indicator algo for deciding when to enter and exit trades.');
        expect(element(by.id('tradingStrategyClassname_1')).getAttribute('value'))
            .toBe('com.gazbert.bxbot.strategies.MacdStrategy');

        // Update Strat 1 fields
        const strategyName = element(by.id('tradingStrategyName_0'));
        const newStrategyName = 'EMA Indicator';
        strategyName.clear();
        strategyName.sendKeys(newStrategyName);
        expect(strategyName.getAttribute('value')).toBe(newStrategyName);

        const strategyDescription = element(by.id('tradingStrategyDescription_0'));
        const newStrategyDescription = 'EMA Indicator algo for deciding when to enter and exit trades.';
        strategyDescription.clear();
        strategyDescription.sendKeys(newStrategyDescription);
        expect(strategyDescription.getAttribute('value')).toBe(newStrategyDescription);

        const strategyClassName = element(by.id('tradingStrategyClassname_0'));
        const newStrategyClassName = 'com.gazbert.bxbot.strategies.EmaIndicator';
        strategyClassName.clear();
        strategyClassName.sendKeys(newStrategyClassName);
        expect(strategyClassName.getAttribute('value')).toBe(newStrategyClassName);

        // Cancel and check the update did not persist
        const cancelButton = element(by.id('strategyCancelButton'));
        cancelButton.click();
        dashboardItems.get(3).click();
        tabLinks.get(3).click();

        // Strat 1 unchanged
        expect(element(by.id('tradingStrategyName_0')).getAttribute('value')).toBe('Long Scalper');
        expect(element(by.id('tradingStrategyDescription_0')).getAttribute('value'))
            .toBe('Scalping strategy that buys low and sells high.');
        expect(element(by.id('tradingStrategyClassname_0')).getAttribute('value'))
            .toBe('com.gazbert.bxbot.strategies.LongScalperStrategy');

        // Strat 2 unchanged
        expect(element(by.id('tradingStrategyName_1')).getAttribute('value')).toBe('MACD Indicator');
        expect(element(by.id('tradingStrategyDescription_1')).getAttribute('value'))
            .toBe('MACD Indicator algo for deciding when to enter and exit trades.');
        expect(element(by.id('tradingStrategyClassname_1')).getAttribute('value'))
            .toBe('com.gazbert.bxbot.strategies.MacdStrategy');
    });

    it('should add new Trading Strategy and save it', function () {

        const dashboardItems = element.all(by.css('app-bxbot-ui-dashboard-item'));
        dashboardItems.get(3).click();
        expect(element(by.css('h2')).getText()).toEqual('ItBit Details');

        const tabLinks = element.all(by.css('li'));
        tabLinks.get(3).click();

        // Strat 1
        expect(element(by.id('tradingStrategyName_0')).getAttribute('value')).toBe('Long Scalper');
        expect(element(by.id('tradingStrategyDescription_0')).getAttribute('value'))
            .toBe('Scalping strategy that buys low and sells high.');
        expect(element(by.id('tradingStrategyClassname_0')).getAttribute('value'))
            .toBe('com.gazbert.bxbot.strategies.LongScalperStrategy');

        // Strat 2
        expect(element(by.id('tradingStrategyName_1')).getAttribute('value')).toBe('MACD Indicator');
        expect(element(by.id('tradingStrategyDescription_1')).getAttribute('value'))
            .toBe('MACD Indicator algo for deciding when to enter and exit trades.');
        expect(element(by.id('tradingStrategyClassname_1')).getAttribute('value'))
            .toBe('com.gazbert.bxbot.strategies.MacdStrategy');

        // Add new Strat 3
        const addTradingStrategyLink = element(by.id('addTradingStrategyLink'));
        addTradingStrategyLink.click();

        const strategyName = element(by.id('tradingStrategyName_2'));
        const newStrategyName = 'EMA Indicator';
        strategyName.clear();
        strategyName.sendKeys(newStrategyName);
        expect(strategyName.getAttribute('value')).toBe(newStrategyName);

        const strategyDescription = element(by.id('tradingStrategyDescription_2'));
        const newStrategyDescription = 'EMA Indicator algo for deciding when to enter and exit trades.';
        strategyDescription.clear();
        strategyDescription.sendKeys(newStrategyDescription);
        expect(strategyDescription.getAttribute('value')).toBe(newStrategyDescription);

        const strategyClassName = element(by.id('tradingStrategyClassname_2'));
        const newStrategyClassName = 'com.gazbert.bxbot.strategies.EmaIndicator';
        strategyClassName.clear();
        strategyClassName.sendKeys(newStrategyClassName);
        expect(strategyClassName.getAttribute('value')).toBe(newStrategyClassName);

        // Save and check the update worked
        const saveButton = element(by.id('strategySaveButton'));
        saveButton.click();
        dashboardItems.get(3).click();
        tabLinks.get(3).click();

        // Strat 1 unchanged
        expect(element(by.id('tradingStrategyName_0')).getAttribute('value')).toBe('Long Scalper');
        expect(element(by.id('tradingStrategyDescription_0')).getAttribute('value')).toBe(
            'Scalping strategy that buys low and sells high.');
        expect(element(by.id('tradingStrategyClassname_0')).getAttribute('value')).toBe(
            'com.gazbert.bxbot.strategies.LongScalperStrategy');

        // Strat 2 unchanged
        expect(element(by.id('tradingStrategyName_1')).getAttribute('value')).toBe('MACD Indicator');
        expect(element(by.id('tradingStrategyDescription_1')).getAttribute('value'))
            .toBe('MACD Indicator algo for deciding when to enter and exit trades.');
        expect(element(by.id('tradingStrategyClassname_1')).getAttribute('value'))
            .toBe('com.gazbert.bxbot.strategies.MacdStrategy');

        // Hello Strat 3!
        expect(element(by.id('tradingStrategyName_2')).getAttribute('value')).toBe(newStrategyName);
        expect(element(by.id('tradingStrategyDescription_2')).getAttribute('value')).toBe(newStrategyDescription);
        expect(element(by.id('tradingStrategyClassname_2')).getAttribute('value')).toBe(newStrategyClassName);
    });

    it('should delete Trading Strategy and save change', function () {

        const dashboardItems = element.all(by.css('app-bxbot-ui-dashboard-item'));
        dashboardItems.get(3).click();
        expect(element(by.css('h2')).getText()).toEqual('ItBit Details');

        const tabLinks = element.all(by.css('li'));
        tabLinks.get(3).click();

        // Strat 1
        expect(element(by.id('tradingStrategyName_0')).getAttribute('value')).toBe('Long Scalper');
        expect(element(by.id('tradingStrategyDescription_0')).getAttribute('value'))
            .toBe('Scalping strategy that buys low and sells high.');
        expect(element(by.id('tradingStrategyClassname_0')).getAttribute('value'))
            .toBe('com.gazbert.bxbot.strategies.LongScalperStrategy');

        // Strat 2
        expect(element(by.id('tradingStrategyName_1')).getAttribute('value')).toBe('MACD Indicator');
        expect(element(by.id('tradingStrategyDescription_1')).getAttribute('value'))
            .toBe('MACD Indicator algo for deciding when to enter and exit trades.');
        expect(element(by.id('tradingStrategyClassname_1')).getAttribute('value'))
            .toBe('com.gazbert.bxbot.strategies.MacdStrategy');

        // Delete Strat 1
        const deleteTradingStrategyButton = element(by.id('deleteTradingStrategyButton_0'));
        deleteTradingStrategyButton.click();

        // Save and check the update worked
        const saveButton = element(by.id('strategySaveButton'));
        saveButton.click();
        dashboardItems.get(3).click();
        tabLinks.get(3).click();

        // Original Strat 1 'Long Scalper' deleted; new Strat 1 is 'MACD Indicator' (previously Strat 2).
        expect(element(by.id('tradingStrategyName_0')).getAttribute('value')).toBe('MACD Indicator');
        expect(element(by.id('tradingStrategyDescription_0')).getAttribute('value')).toBe(
            'MACD Indicator algo for deciding when to enter and exit trades.');
        expect(element(by.id('tradingStrategyClassname_0')).getAttribute('value')).toBe(
            'com.gazbert.bxbot.strategies.MacdStrategy');

        // Original Strat 2 moved
        expect(element(by.id('tradingStrategyName_1')).isPresent()).toBe(false);
        expect(element(by.id('tradingStrategyDescription_1')).isPresent()).toBe(false);
        expect(element(by.id('tradingStrategyClassname_1')).isPresent()).toBe(false);
    });

    it('should NOT delete Trading Strategy if currently being used by a Market', function () {

        const dashboardItems = element.all(by.css('app-bxbot-ui-dashboard-item'));
        dashboardItems.get(3).click();
        expect(element(by.css('h2')).getText()).toEqual('ItBit Details');

        const tabLinks = element.all(by.css('li'));
        tabLinks.get(3).click();

        // Strat 1
        expect(element(by.id('tradingStrategyName_0')).getAttribute('value')).toBe('Long Scalper');
        expect(element(by.id('tradingStrategyDescription_0')).getAttribute('value'))
            .toBe('Scalping strategy that buys low and sells high.');
        expect(element(by.id('tradingStrategyClassname_0')).getAttribute('value'))
            .toBe('com.gazbert.bxbot.strategies.LongScalperStrategy');

        // Strat 2
        expect(element(by.id('tradingStrategyName_1')).getAttribute('value')).toBe('MACD Indicator');
        expect(element(by.id('tradingStrategyDescription_1')).getAttribute('value'))
            .toBe('MACD Indicator algo for deciding when to enter and exit trades.');
        expect(element(by.id('tradingStrategyClassname_1')).getAttribute('value'))
            .toBe('com.gazbert.bxbot.strategies.MacdStrategy');

        // Delete Strat 2 - will cause error
        const deleteTradingStrategyButton = element(by.id('deleteTradingStrategyButton_1'));
        deleteTradingStrategyButton.click();

        // Expect error modal to pop up to alert user
        expect(element(by.css('.modal-title')).getText()).toBe('Trading Strategy Still In Use');
        expect(element(by.css('.modal-body')).getText()).toContain(
            'You cannot delete this Trading Strategy because it is still being used by a Market on the Exchange.');

        const modalCloseButton = element(by.id('cannotDeleteStrategyModalCloseButton'));
        modalCloseButton.click();

        // Strat 1 unchanged
        expect(element(by.id('tradingStrategyName_0')).getAttribute('value')).toBe('Long Scalper');
        expect(element(by.id('tradingStrategyDescription_0')).getAttribute('value'))
            .toBe('Scalping strategy that buys low and sells high.');
        expect(element(by.id('tradingStrategyClassname_0')).getAttribute('value'))
            .toBe('com.gazbert.bxbot.strategies.LongScalperStrategy');

        // Strat 2 unchanged
        expect(element(by.id('tradingStrategyName_1')).getAttribute('value')).toBe('MACD Indicator');
        expect(element(by.id('tradingStrategyDescription_1')).getAttribute('value'))
            .toBe('MACD Indicator algo for deciding when to enter and exit trades.');
        expect(element(by.id('tradingStrategyClassname_1')).getAttribute('value'))
            .toBe('com.gazbert.bxbot.strategies.MacdStrategy');
    });

    it('should add new Optional Config Item and save it', function () {

        const dashboardItems = element.all(by.css('app-bxbot-ui-dashboard-item'));
        dashboardItems.get(3).click();
        expect(element(by.css('h2')).getText()).toEqual('ItBit Details');

        const tabLinks = element.all(by.css('li'));
        tabLinks.get(3).click();

        // Strat 1
        expect(element(by.id('tradingStrategyName_0')).getAttribute('value')).toBe('Long Scalper');
        expect(element(by.id('tradingStrategyDescription_0')).getAttribute('value'))
            .toBe('Scalping strategy that buys low and sells high.');
        expect(element(by.id('tradingStrategyClassname_0')).getAttribute('value'))
            .toBe('com.gazbert.bxbot.strategies.LongScalperStrategy');

        // Strat 2
        expect(element(by.id('tradingStrategyName_1')).getAttribute('value')).toBe('MACD Indicator');
        expect(element(by.id('tradingStrategyDescription_1')).getAttribute('value'))
            .toBe('MACD Indicator algo for deciding when to enter and exit trades.');
        expect(element(by.id('tradingStrategyClassname_1')).getAttribute('value'))
            .toBe('com.gazbert.bxbot.strategies.MacdStrategy');

        // Add new Config Item to Strat 1
        const optionalStrategyConfigButton = element(by.id('optionalStrategyConfigButton_0'));
        optionalStrategyConfigButton.click();

        // Need to wait for link to become visible...
        const EC = protractor.ExpectedConditions;
        const addConfigItemLink = element(by.id('addNewStrategyConfigItemLink_0'));
        browser.wait(EC.visibilityOf(addConfigItemLink), 5000);
        addConfigItemLink.click();

        // Wait for new item to panel to become visible...
        const strategyConfigItemName = element(by.id('strategyConfigItemName_0_1'));
        browser.wait(EC.visibilityOf(strategyConfigItemName), 5000);

        const newConfigItemName = 'stop-loss-percentage-trigger';
        strategyConfigItemName.clear();
        strategyConfigItemName.sendKeys(newConfigItemName);
        expect(strategyConfigItemName.getAttribute('value')).toBe(newConfigItemName);

        const strategyConfigItemValue = element(by.id('strategyConfigItemValue_0_1'));
        const newConfigItemValue = '8.0';
        strategyConfigItemValue.clear();
        strategyConfigItemValue.sendKeys(newConfigItemValue);
        expect(strategyConfigItemValue.getAttribute('value')).toBe(newConfigItemValue);

        // Save and check the update worked
        const saveButton = element(by.id('strategySaveButton'));
        saveButton.click();
        dashboardItems.get(3).click();
        tabLinks.get(3).click();

        // Strat 1 - the same + 1 new config item
        expect(element(by.id('tradingStrategyName_0')).getAttribute('value')).toBe('Long Scalper');
        expect(element(by.id('tradingStrategyDescription_0')).getAttribute('value'))
            .toBe('Scalping strategy that buys low and sells high.');
        expect(element(by.id('tradingStrategyClassname_0')).getAttribute('value'))
            .toBe('com.gazbert.bxbot.strategies.LongScalperStrategy');
        expect(element(by.id('strategyConfigItemName_0_0')).getAttribute('value')).toBe('min-percentage-gain');
        expect(element(by.id('strategyConfigItemValue_0_0')).getAttribute('value')).toBe('1.0');

        // New Config Item present
        expect(element(by.id('strategyConfigItemName_0_1')).getAttribute('value')).toBe('stop-loss-percentage-trigger');
        expect(element(by.id('strategyConfigItemValue_0_1')).getAttribute('value')).toBe('8.0');

        // Strat 2 - unchanged
        expect(element(by.id('tradingStrategyName_1')).getAttribute('value')).toBe('MACD Indicator');
        expect(element(by.id('tradingStrategyDescription_1')).getAttribute('value'))
            .toBe('MACD Indicator algo for deciding when to enter and exit trades.');
        expect(element(by.id('tradingStrategyClassname_1')).getAttribute('value'))
            .toBe('com.gazbert.bxbot.strategies.MacdStrategy');
        expect(element(by.id('strategyConfigItemName_1_0')).getAttribute('value')).toBe('ema-short-interval');
        expect(element(by.id('strategyConfigItemValue_1_0')).getAttribute('value')).toBe('12');
        expect(element(by.id('strategyConfigItemName_1_1')).getAttribute('value')).toBe('ema-long-interval');
        expect(element(by.id('strategyConfigItemValue_1_1')).getAttribute('value')).toBe('26');
        expect(element(by.id('strategyConfigItemName_1_2')).getAttribute('value')).toBe('signal-line');
        expect(element(by.id('strategyConfigItemValue_1_2')).getAttribute('value')).toBe('9');
    });

    it('should delete Optional Config Item and save change', function () {

        const dashboardItems = element.all(by.css('app-bxbot-ui-dashboard-item'));
        dashboardItems.get(3).click();
        expect(element(by.css('h2')).getText()).toEqual('ItBit Details');

        const tabLinks = element.all(by.css('li'));
        tabLinks.get(3).click();

        // Strat 1
        expect(element(by.id('tradingStrategyName_0')).getAttribute('value')).toBe('Long Scalper');
        expect(element(by.id('tradingStrategyDescription_0')).getAttribute('value'))
            .toBe('Scalping strategy that buys low and sells high.');
        expect(element(by.id('tradingStrategyClassname_0')).getAttribute('value'))
            .toBe('com.gazbert.bxbot.strategies.LongScalperStrategy');

        // Strat 2
        expect(element(by.id('tradingStrategyName_1')).getAttribute('value')).toBe('MACD Indicator');
        expect(element(by.id('tradingStrategyDescription_1')).getAttribute('value'))
            .toBe('MACD Indicator algo for deciding when to enter and exit trades.');
        expect(element(by.id('tradingStrategyClassname_1')).getAttribute('value'))
            .toBe('com.gazbert.bxbot.strategies.MacdStrategy');

        // Access Strat 2 optional config
        const optionalStrategyConfigButton = element(by.id('optionalStrategyConfigButton_1'));
        optionalStrategyConfigButton.click();

        // Delete Config Item 2 from Strat 2
        // Need to wait for link + config items to become visible...
        const EC = protractor.ExpectedConditions;
        const deleteConfigItemButton = element(by.id('deleteConfigItemButton_1_1'));
        browser.wait(EC.visibilityOf(deleteConfigItemButton), 5000);
        deleteConfigItemButton.click();

        // Save and check the update worked
        const saveButton = element(by.id('strategySaveButton'));
        saveButton.click();
        dashboardItems.get(3).click();
        tabLinks.get(3).click();

        // Strat 1 - the same + 1 new config item
        expect(element(by.id('tradingStrategyName_0')).getAttribute('value')).toBe('Long Scalper');
        expect(element(by.id('tradingStrategyDescription_0')).getAttribute('value'))
            .toBe('Scalping strategy that buys low and sells high.');
        expect(element(by.id('tradingStrategyClassname_0')).getAttribute('value'))
            .toBe('com.gazbert.bxbot.strategies.LongScalperStrategy');
        expect(element(by.id('strategyConfigItemName_0_0')).getAttribute('value')).toBe('min-percentage-gain');
        expect(element(by.id('strategyConfigItemValue_0_0')).getAttribute('value')).toBe('1.0');

        // Strat 2 - unchanged
        expect(element(by.id('tradingStrategyName_1')).getAttribute('value')).toBe('MACD Indicator');
        expect(element(by.id('tradingStrategyDescription_1')).getAttribute('value'))
            .toBe('MACD Indicator algo for deciding when to enter and exit trades.');
        expect(element(by.id('tradingStrategyClassname_1')).getAttribute('value'))
            .toBe('com.gazbert.bxbot.strategies.MacdStrategy');

        expect(element(by.id('strategyConfigItemName_1_0')).getAttribute('value')).toBe('ema-short-interval');
        expect(element(by.id('strategyConfigItemValue_1_0')).getAttribute('value')).toBe('12');

        // ema-long-interval deleted

        expect(element(by.id('strategyConfigItemName_1_1')).getAttribute('value')).toBe('signal-line');
        expect(element(by.id('strategyConfigItemValue_1_1')).getAttribute('value')).toBe('9');
    });

    it('should NOT save Trading Strategy fields if there are validation errors', function () {

        const dashboardItems = element.all(by.css('app-bxbot-ui-dashboard-item'));
        dashboardItems.get(3).click();
        expect(element(by.css('h2')).getText()).toEqual('ItBit Details');

        const tabLinks = element.all(by.css('li'));
        tabLinks.get(3).click();

        // Strat 1
        expect(element(by.id('tradingStrategyName_0')).getAttribute('value')).toBe('Long Scalper');
        expect(element(by.id('tradingStrategyDescription_0')).getAttribute('value'))
            .toBe('Scalping strategy that buys low and sells high.');
        expect(element(by.id('tradingStrategyClassname_0')).getAttribute('value'))
            .toBe('com.gazbert.bxbot.strategies.LongScalperStrategy');

        // Strat 2
        expect(element(by.id('tradingStrategyName_1')).getAttribute('value')).toBe('MACD Indicator');
        expect(element(by.id('tradingStrategyDescription_1')).getAttribute('value'))
            .toBe('MACD Indicator algo for deciding when to enter and exit trades.');
        expect(element(by.id('tradingStrategyClassname_1')).getAttribute('value'))
            .toBe('com.gazbert.bxbot.strategies.MacdStrategy');

        // Update Strat 1 fields with some 'bad' values
        const strategyName = element(by.id('tradingStrategyName_0'));
        strategyName.clear();
        const newStrategyName = 'dodgy n@me';
        strategyName.sendKeys(newStrategyName);
        expect(strategyName.getAttribute('value')).toBe(newStrategyName);

        const strategyDescription = element(by.id('tradingStrategyDescription_0'));
        const newStrategyDescription = 'EMA Indicator algo for deciding when to enter and exit trades.';
        strategyDescription.clear();
        strategyDescription.sendKeys(newStrategyDescription);
        expect(strategyDescription.getAttribute('value')).toBe(newStrategyDescription);

        const strategyClassName = element(by.id('tradingStrategyClassname_0'));
        const newStrategyClassName = '123BadClassName';
        strategyClassName.clear();
        strategyClassName.sendKeys(newStrategyClassName);
        expect(strategyClassName.getAttribute('value')).toBe(newStrategyClassName);

        // Add new invalid Config Item to Strat 1
        const optionalStrategyConfigButton = element(by.id('optionalStrategyConfigButton_0'));
        optionalStrategyConfigButton.click();

        // Need to wait for link to become visible...
        const EC = protractor.ExpectedConditions;
        const addConfigItemLink = element(by.id('addNewStrategyConfigItemLink_0'));
        browser.wait(EC.visibilityOf(addConfigItemLink), 5000);
        addConfigItemLink.click();

        // Wait for new item to panel to become visible...
        const strategyConfigItemName = element(by.id('strategyConfigItemName_0_1'));
        browser.wait(EC.visibilityOf(strategyConfigItemName), 5000);

        const newConfigItemName = 'stop-loss-percentage-tr igger'; // space in name
        strategyConfigItemName.clear();
        strategyConfigItemName.sendKeys(newConfigItemName);
        expect(strategyConfigItemName.getAttribute('value')).toBe(newConfigItemName);

        const strategyConfigItemValue = element(by.id('strategyConfigItemValue_0_1'));
        const newConfigItemValue = ''; // left empty
        strategyConfigItemValue.clear();
        strategyConfigItemValue.sendKeys(newConfigItemValue);
        expect(strategyConfigItemValue.getAttribute('value')).toBe(newConfigItemValue);

        // Save and check the update did not persist
        const saveButton = element(by.id('strategySaveButton'));
        saveButton.click();

        // Strat 1 - check for validation errors
        expect(element(by.id('tradingStrategyName_0')).getAttribute('value')).toBe(newStrategyName);
        expect(element(by.id('invalidTradingStrategyName_0')).getText()).toBe(
            'Name must be alphanumeric and can only include the following special characters: _ -');

        expect(element(by.id('tradingStrategyDescription_0')).getAttribute('value')).toBe(newStrategyDescription);

        expect(element(by.id('tradingStrategyClassname_0')).getAttribute('value')).toBe(newStrategyClassName);
        expect(element(by.id('invalidTradingStrategyClassname_0')).getText()).toBe(
            'Class Name must be valid Java class, e.g. com.my.MyTradingStrategyClass');

        expect(element(by.id('strategyConfigItemName_0_1')).getAttribute('value')).toBe('stop-loss-percentage-tr igger');
        expect(element(by.id('invalidStrategyConfigItemName_0_1')).getText()).toContain(
            'Name must be alphanumeric and can only include the following special characters: _ -');

        expect(element(by.id('strategyConfigItemValue_0_1')).getAttribute('value')).toBe('');
        expect(element(by.id('invalidStrategyConfigItemValue_0_1')).getText()).toContain('Value is required');

        // Strat 2 unchanged
        expect(element(by.id('tradingStrategyName_1')).getAttribute('value')).toBe('MACD Indicator');
        expect(element(by.id('tradingStrategyDescription_1')).getAttribute('value'))
            .toBe('MACD Indicator algo for deciding when to enter and exit trades.');
        expect(element(by.id('tradingStrategyClassname_1')).getAttribute('value'))
            .toBe('com.gazbert.bxbot.strategies.MacdStrategy');
    });

    it('should NOT save new Trading Strategy when Strategy Name already in use', function () {

        const dashboardItems = element.all(by.css('app-bxbot-ui-dashboard-item'));
        dashboardItems.get(3).click();
        expect(element(by.css('h2')).getText()).toEqual('ItBit Details');

        const tabLinks = element.all(by.css('li'));
        tabLinks.get(3).click();

        // Strat 1
        expect(element(by.id('tradingStrategyName_0')).getAttribute('value')).toBe('Long Scalper');
        expect(element(by.id('tradingStrategyDescription_0')).getAttribute('value'))
            .toBe('Scalping strategy that buys low and sells high.');
        expect(element(by.id('tradingStrategyClassname_0')).getAttribute('value'))
            .toBe('com.gazbert.bxbot.strategies.LongScalperStrategy');

        // Strat 2
        expect(element(by.id('tradingStrategyName_1')).getAttribute('value')).toBe('MACD Indicator');
        expect(element(by.id('tradingStrategyDescription_1')).getAttribute('value'))
            .toBe('MACD Indicator algo for deciding when to enter and exit trades.');
        expect(element(by.id('tradingStrategyClassname_1')).getAttribute('value'))
            .toBe('com.gazbert.bxbot.strategies.MacdStrategy');

        // Add new Strat 3 with same name as Strat 2
        const addTradingStrategyLink = element(by.id('addTradingStrategyLink'));
        addTradingStrategyLink.click();

        const strategyName = element(by.id('tradingStrategyName_2'));
        const newStrategyName = 'MACD Indicator'; // eek!
        strategyName.clear();
        strategyName.sendKeys(newStrategyName);
        expect(strategyName.getAttribute('value')).toBe(newStrategyName);

        const strategyDescription = element(by.id('tradingStrategyDescription_2'));
        const newStrategyDescription = 'EMA Indicator algo for deciding when to enter and exit trades.';
        strategyDescription.clear();
        strategyDescription.sendKeys(newStrategyDescription);
        expect(strategyDescription.getAttribute('value')).toBe(newStrategyDescription);

        const strategyClassName = element(by.id('tradingStrategyClassname_2'));
        const newStrategyClassName = 'com.gazbert.bxbot.strategies.EmaIndicator';
        strategyClassName.clear();
        strategyClassName.sendKeys(newStrategyClassName);
        expect(strategyClassName.getAttribute('value')).toBe(newStrategyClassName);

        // Save and check the update failed
        const saveButton = element(by.id('strategySaveButton'));
        saveButton.click();

        // Strat 3 - check for validation errors
        expect(element(by.id('tradingStrategyName_2')).getAttribute('value')).toBe(newStrategyName);
        expect(element(by.id('invalidTradingStrategyName_2')).getText()).toBe(
            'Strategy Name already in use on this Exchange. Please choose another.');

        expect(element(by.id('tradingStrategyDescription_2')).getAttribute('value')).toBe(newStrategyDescription);
        expect(element(by.id('tradingStrategyClassname_2')).getAttribute('value')).toBe(newStrategyClassName);

        // Strat 1 unchanged
        expect(element(by.id('tradingStrategyName_0')).getAttribute('value')).toBe('Long Scalper');
        expect(element(by.id('tradingStrategyDescription_0')).getAttribute('value')).toBe(
            'Scalping strategy that buys low and sells high.');
        expect(element(by.id('tradingStrategyClassname_0')).getAttribute('value')).toBe(
            'com.gazbert.bxbot.strategies.LongScalperStrategy');

        // Strat 2 unchanged
        expect(element(by.id('tradingStrategyName_1')).getAttribute('value')).toBe('MACD Indicator');
        expect(element(by.id('tradingStrategyDescription_1')).getAttribute('value'))
            .toBe('MACD Indicator algo for deciding when to enter and exit trades.');
        expect(element(by.id('tradingStrategyClassname_1')).getAttribute('value'))
            .toBe('com.gazbert.bxbot.strategies.MacdStrategy');
    });
});
