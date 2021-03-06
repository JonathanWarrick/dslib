'use strict';
var should = require('chai').should();
var BloomFilter = require('../index.js').BloomFilter;

describe('BloomFilter', function(){

  var exBF;
  beforeEach(function(){
    exBF = new BloomFilter(18,3);
  });

  it('should be a function', function(){
    (typeof BloomFilter).should.equal('function');
  });

  it('should have an add method', function(){
    (typeof exBF.add).should.equal('function');
  });

  it('should have a test method', function(){
    (typeof exBF.test).should.equal('function');
    exBF.add(1);
    exBF.add(2);
    (exBF.test(1)).should.equal(true);
    (exBF.test(2)).should.equal(true);
    (exBF.test(3)).should.equal(false);
  });

  it('should be able to function with multiple different hash sizes', function(){
    var BF1 = new BloomFilter(15, 3);
    var BF2 = new BloomFilter(15, 3);
    BF1.add(1);
    BF1.add(25);
    (BF1.test(1)).should.equal(true);
    (BF1.test(25)).should.equal(true);
    (BF1.test(3)).should.equal(false);
    BF2.add(1);
    BF2.add(42); 
    (BF2.test(1)).should.equal(true);
    (BF2.test(42)).should.equal(true);
    (BF2.test(3)).should.equal(false);
  });

});