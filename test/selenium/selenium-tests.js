/*jslint node: true, plusplus: true*/

'use strict';

var chai = require('chai');
var ChessUtils = require('../../js/chessboard.js').ChessUtils;
var expect = chai.expect;
var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');
var driver;
 
test.describe('ChessBoard', function () {
	
	test.before(function () {
		driver = new webdriver.Builder()
			 .withCapabilities(webdriver.Capabilities.chrome())
			 .build();
		
		webdriver.promise.controlFlow().on('uncaughtException', function (e) {
			console.error('Unhandled error: ' + e);
		});
	});

	test.describe('start', function () {
		
		test.beforeEach(function () {
			driver.get('http://localhost:8080/test/selenium/test.html');
			driver.executeScript('board.clear()');
			
		});
		
		test.it('should setup board to opening position', function () {
			var i;
			
			driver.executeScript('board.setPosition(ChessUtils.FEN.startId)');
			driver.executeScript('return board.getPosition(ChessUtils.FEN.id)')
				.then(function (position) {
					expect(position).to.be.a('string');
					expect(position).to.equal(ChessUtils.FEN.positions.start);
				});
			
		});
	});
	
	test.after(function () {
		driver.quit();
	});
	
});