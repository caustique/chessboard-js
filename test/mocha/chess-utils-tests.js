/*jslint node: true, plusplus: true*/
/*globals chai, describe,it */
/*globals ChessUtils*/

'use strict';

if (typeof chai === 'undefined') { var chai = require('chai'); }
if (typeof ChessUtils === 'undefined') { var ChessUtils = require('../js/chessboard.js').ChessUtils; }

var expect = chai.expect;
 
describe('ChessUtils', function () {
	
	describe('#repeatString()', function () {
		it('should copy "a" 3 times', function () {
			expect(ChessUtils.repeatString('a', 3)).to.equal('aaa');
		});
		it('should copy "Hong" 2 times', function () {
			expect(ChessUtils.repeatString('Hong', 2)).to.equal('HongHong');
		});
	});
	
	describe('#replaceStringAt()', function () {
		it('should change "Hong" to "Kong"', function () {
			expect(ChessUtils.replaceStringAt('Hong', 0, 'K')).to.equal('Kong');
		});
		it('should change "Hong" to "Hong Kong"', function () {
			expect(ChessUtils.replaceStringAt('Hong', 3, 'g Kong')).to.equal('Hong Kong');
		});
	});
	
	describe('#convertIndexToColumn()', function () {
		
		it('should return column=7 to index=63', function () {
			expect(ChessUtils.convertIndexToColumn(63)).to.equal(7);
		});
		
		it('should return 0 for all indexes below 8', function () {
			var i;
			
			for (i = 0; i < 8; i++) {
				expect(ChessUtils.convertIndexToColumn(i)).to.equal(i);
			}
		});
	});
	
});