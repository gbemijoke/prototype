(function() {
  'use strict';

  var jasmine = require('jasmine');
  var myApp = require('../app/library.js');

  describe('Binary Search to traverse an ordered list, effectively', function() {
  describe('Populate the arrays with valid content', function() {
    
    it('should create an array from 1 to 20, with intervals of 1', function() {
      var oneToTwenty = new myApp.Array();
      expect(oneToTwenty.toTwenty()[0]).toBe(1);
      expect(oneToTwenty.toTwenty()[19]).toBe(20);
      expect(oneToTwenty.toTwenty().length).toBe(20);
      for(var i = 0; i < oneToTwenty.toTwenty().length - 1;i++) {
        expect(oneToTwenty.toTwenty()[i + 1] - oneToTwenty.toTwenty()[i]).toBe(1);
      }
    });
    it('should create an array from 2 to 40, with intervals of 2', function() {
      var twoToForty = new myApp.Array();
      expect(twoToForty.toForty()[0]).toBe(2);
      expect(twoToForty.toForty()[19]).toBe(40);
      expect(twoToForty.toForty().length).toBe(20);
      for(var i = 0; i < twoToForty.toForty().length - 1;i++) {
        expect(twoToForty.toForty()[i + 1] - twoToForty.toForty()[i]).toBe(2);
      }
    });
    it('should create an array from 10 to 10000, with intervals of 10', function() {
      var tenToOneThousand = new myApp.Array();
      expect(tenToOneThousand.toOneThousand()[0]).toBe(10);
      expect(tenToOneThousand.toOneThousand()[99]).toBe(1000);
      expect(tenToOneThousand.toOneThousand().length).toBe(100);
      for(var i = 0; i < tenToOneThousand.toOneThousand().length - 1;i++) {
        expect(tenToOneThousand.toOneThousand()[i + 1] - tenToOneThousand.toOneThousand()[i]).toBe(10);
      }
    });
  });
  describe('Get the index of the item with an expected number of loops in array [1, 2 . . . 20]', function() {
    it('should return {count: /* <= 4 */, index: 15} for 16', function() {
      var oneToTwenty = new myApp.Array();
      var search  = oneToTwenty.toTwenty().search(16);
      expect(search.count).toBeLessThan(5);
      expect(search.index).toBe(15);
    });
    it('should return {count: < /* array length */, index: -1} for 33 ', function () {
      var oneToTwenty = new myApp.Array();
      var search = oneToTwenty.toTwenty().search(33);
      expect(search.count).toBeLessThan(search.length);
      expect(search.index).toBe(-1);
    });
  });
  
  it('should not contain any form of `indexOf` in the search function', function() {
    expect(Array.prototype.search.toString().indexOf('indexOf')).toBe(-1);      
  });
  
  describe('Get the index of the item with an expected number of loops in array [2, 4 . . . 40]', function() {
    it('should return {count: /* <= 4 */, index: 15} for 16', function() {
      var twoToForty = new myApp.Array();
      var search  = twoToForty.toForty().search(16);
      expect(search.count).toBeLessThan(5);
      expect(search.index).toBe(7);
    });
    it('should return {count: 0, index: 9} for 20', function() {
      var twoToForty = new myApp.Array();
      var search  = twoToForty.toForty().search(20);
      expect(search.count).toBe(0);
      expect(search.index).toBe(9);
    });
    it('should return {count: 0, index: 19} for 40', function() {
      var twoToForty = new myApp.Array();
      var search  = twoToForty.toForty().search(40);
      expect(search.count).toBe(0);
      expect(search.index).toBe(19);
    });
    it('should return {count: < /* array length */, index: -1} for 33 ', function () {
      var twoToForty = new myApp.Array();
      var search = twoToForty.toForty().search(33);
      expect(search.count).toBeLessThan(search.length);
      expect(search.index).toBe(-1);
    });
  });
  describe('Get the index of the item with an expected number of loops in array [10, 20 . . . 1000]', function() {
    it('should return {count: /* <= 3 */, index: 3} for 40', function() {
      var tenToOneThousand = new myApp.Array();
      var search  = tenToOneThousand.toOneThousand().search(40);
      expect(search.count).toBeLessThan(4);
      expect(search.index).toBe(3);
    });
    it('should return {count: /* <= 5*/, index: 87} for 800', function() {
      var tenToOneThousand = new myApp.Array();
      var search  = tenToOneThousand.toOneThousand().search(880);
      expect(search.count).toBeLessThan(6);
      expect(search.index).toBe(87);
    });
    it('should return {count: < /* array length */, index: -1} for 10000 ', function () {
      var tenToOneThousand = new myApp.Array();
      var search = tenToOneThousand.toOneThousand().search(10000);
      expect(search.count).toBeLessThan(search.length);
      expect(search.index).toBe(-1);
    });
  });
  });
})();