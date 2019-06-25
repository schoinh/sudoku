import { Row } from './../src/backend-code.js';

describe ('RowChecker', function (){

  it('should store 9 numbers as an array', function(){
    var row = new Row([1,2,3,4,5,6,7,8,9])
    expect(row.numbers).toEqual([1,2,3,4,5,6,7,8,9])
  });


  it('should check that 9 numbers are stored', function(){
    var row = new Row([1,2,3,8,5,6,7,8,9])
    row.checkLegal();
    expect(row.legal).toEqual(true)

    var notRow = new Row([1,2,3,4,5])
    notRow.checkLegal();
    expect(notRow.legal).toEqual(false)
  });
























});
