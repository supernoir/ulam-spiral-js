var expect = require('chai').expect;


describe('Mocha', function() {
   it('should run our tests using npm', function() {
   expect(true).to.be.ok;
    });
});

describe('Canvas', function() {
    it('should be able to access the canvas', function(){
        var app = require('../app.js');
        expect(app.getCanvas()).to.be.ok;
    });
});