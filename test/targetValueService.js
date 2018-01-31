const { stub, mock, assert } = require('sinon');
const { fetchTotal } = require('../services/targetValueService');
const moment = require('moment');
const athletesService = require('../services/athletesService');
const Target = require('../models/Target');

describe('fetch total', () => {
  let findAthleteStats;
  let targetMock;

  beforeEach(() => {
    findAthleteStats = stub(athletesService, 'findAthleteStats');
    targetMock = mock(Target);
  });

  afterEach(() => {
    findAthleteStats.restore();
    targetMock.restore();
  });

  it('should handle no target', () => {
    targetMock.expects('findOne').withExactArgs({ year: 2018 }).returns(false);

    fetchTotal();

    targetMock.verify();
    assert.notCalled(athletesService.findAthleteStats);
  });

  it('should handle value for January', async () => {
    moment.now = () => 1517077811000;
    findAthleteStats.withArgs().callsFake(() => ({ ytd_ride_totals: { distance: 724205 } }));
    const values = [0];
    targetMock.expects('findOne').withExactArgs({ year: 2018 }).returns({ values });
    targetMock.expects('findOneAndUpdate').withExactArgs({ year: 2018 }, { values: [...values, 449] });

    await fetchTotal();

    targetMock.verify();
  });

  it('should handle value for November', async () => {
    moment.now = () => 1543521215000;
    findAthleteStats.withArgs().callsFake(() => ({ ytd_ride_totals: { distance: 7724961 } }));
    const values = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    targetMock.expects('findOne').withExactArgs({ year: 2018 }).returns({ values });
    targetMock.expects('findOneAndUpdate').withExactArgs({ year: 2018 }, { values: [...values, 4800] });

    await fetchTotal();

    targetMock.verify();
  });
});
