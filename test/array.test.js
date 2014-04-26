var should = require('should');
var is = require('../index.js')

describe('IS', function() {
    
    describe('array', function() {

        it('should fail with a number type', function(done) {
            is(1, 'array').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a string type', function(done) {
            is('', 'array').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should work with an array type', function(done) {
            is([], 'array').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should fail with an object type', function(done) {
            is({}, 'array').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a boolean type', function(done) {
            is(true, 'array').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a regexp type', function(done) {
            is(new RegExp(''), 'array').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a function type', function(done) {
            is(function () {}, 'array').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a date type', function(done) {
            is(new Date(), 'array').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a NaN type', function(done) {
            is(0 / 0, 'array').should.be.a.Boolean.and.be.false;
            done();
        });

    });
});