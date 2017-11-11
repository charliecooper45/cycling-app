const moment = require('moment');
const assert = require('assert');
const conversionService = require('../services/conversionService');

describe('conversion service', () => {
  describe('metres to feet conversion', () => {
    it('should convert with no decimals', () => {
      assert.equal(conversionService.metresToFeet(100), 328);
      assert.equal(conversionService.metresToFeet(10.1), 33);
    });

    it('should convert with decimals', () => {
      assert.equal(conversionService.metresToFeet(100, true), 328.08);
      assert.equal(conversionService.metresToFeet(10.9, true), 35.76);
    });
  });

  describe('metres to miles conversion', () => {
    it('should convert with no decimals', () => {
      assert.equal(conversionService.metresToMiles(100), 0);
      assert.equal(conversionService.metresToMiles(5891), 4);
    });

    it('should convert with decimals', () => {
      assert.equal(conversionService.metresToMiles(8998, true), 5.59);
      assert.equal(conversionService.metresToMiles(100, true), 0.06);
    });
  });

  describe('seconds to duration conversion', () => {
    it('should convert', () => {
      const duration = conversionService.secondsToDuration(100);
      assert.equal(duration.minutes(), 1);
      assert.equal(duration.seconds(), 40);
    });
  });

  describe('format', () => {
    it('should format miles', () => {
      assert.equal(conversionService.formatMiles(20000.19), '20,000.19');
    });

    it('should format feet', () => {
      assert.equal(conversionService.formatFeet(20000.1), '20,000');
    });

    it('should format watts per kilo', () => {
      assert.equal(conversionService.formatWattsPerKilo(4.234324), '4.23');
    });

    it('should format date', () => {
      assert.equal(conversionService.formatDate(moment('1989-09-02`', 'YYYY-MM-DD')), '02 September 1989');
    });

    it('should format short date', () => {
      assert.equal(conversionService.formatShortDate(moment('1989-09-02', 'YYYY-MM-DD')), '02/09/89');
    });

    it('should format percentage', () => {
      assert.equal(conversionService.formatPercentage(0.223), '22.3%');
    });
  });
});
