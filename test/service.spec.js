import axios from 'axios';
import * as service from '../service.mjs';

import {describe, it} from 'mocha';
import {expect} from 'chai';
import sinon from 'sinon';

describe('Tests index', function () {
    it('verifies successful response', async () => {
        const resolved = new Promise((r) => r({ data: 'abcdef' }));
        sinon.stub(axios, 'get').returns(resolved);

        const result = await service.getData('url');
        expect(result).to.be.an('string');
        expect(result).to.be.equal('abcdef');
    });
});