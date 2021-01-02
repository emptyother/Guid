import {
	assert,
	expect
} from 'chai';
import { Guid } from './guid';

describe('A uninitialized Guid', () => {
	it('should be an object.', () => {
		expect(new Guid()).to.be.an('object');
	});
	it('should be empty', () => {
		const res = new Guid();
		assert(res.equals(Guid.empty));
	});
	it('should be JSON stringifiable.', () => {
		const a = new Guid();
		const b = JSON.stringify(a);
		expect(b).to.equal('"00000000-0000-0000-0000-000000000000"');
	});
});
describe('A fresh Guid', () => {
	const e = Guid.newGuid();
	it('should be an object', () => {
		expect(e).to.be.an('object');
	})
	it('should be valid', () => {
		assert(Guid.isValid(e.toString()));
	});
	it('should not be empty', () => {
		expect(e).not.to.equal(Guid.empty);
	})
});
