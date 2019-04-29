import * as service from '../service.mjs';
import * as app from '../index.mjs';
import chai from 'chai';
import sinon from 'sinon';

const expect = chai.expect;

describe('Tests index', function () {
    it('verifies successful response', async () => {
        sinon.stub(service, 'getData').returns('abcdef');

        const result = await app.main()
        expect(result).to.be.an('string');
        expect(result).to.be.equal('abcdef');
    });
});