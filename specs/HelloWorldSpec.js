// HelloWorldSpec
// =============================================================================

/*global describe*/
/*global it*/

import chai from 'chai'

let expect = chai.expect
let should = chai.should

describe('HelloWorld Spec', () => {

	it('should pass simple test, just want to see some green!', (done) => {
		expect(true).to.be.true
		done()
	})

	// don't forget to make this pass so our entire suite doesn't fail
	it('and for good measure, just throw in some failing tests', (done) => {
		expect(true).to.be.false
		done()
	})

})
