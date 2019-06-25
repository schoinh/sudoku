import { Row, Board } from './../src/backend-code.js';

describe ('RowChecker', function (){

  it('should store 9 numbers as an array', function(){
    var row = new Row([1,2,3,4,5,6,7,8,9])
    expect(row.numbers).toEqual([1,2,3,4,5,6,7,8,9])
  });


  it('should check that 9 numbers are stored', function(){
    var row = new Row([1,2,3,4,5,6,7,8,9])
    row.checkLegal();
    expect(row.legal).toEqual(true)

    var notRow = new Row([1,2,3,4,5])
    notRow.checkLegal();
    expect(notRow.legal).toEqual(false)
  });

  it('should check that numbers are between 1 and 9', function(){
    var row1 = new Row([1,2,3,8,5,6,10,8,9]);
    row1.checkLegal();
    expect(row1.legal).toEqual(false);

    var row2 = new Row([1,2,3,4,5,6,7,8,9]);
    row2.checkLegal();
    expect(row2.legal).toEqual(true);
  });

  it('should check that numbers do not repeat', function(){
    var row1 = new Row([1,2,3,4,5,5,7,8,9]);
    row1.checkLegal();
    row1.checkRepeat();
    expect(row1.legal).toEqual(false);

    var row2 = new Row([1,2,3,4,5,6,7,8,9]);
    row2.checkLegal();
    row2.checkRepeat();
    expect(row2.legal).toEqual(true);
  })

  it('should add additional rows onto a board', function(){
    var board = new Board();
    var row1 = new Row([1,2,3,4,5,6,7,8,9]);
    var row2 = new Row([1,2,4,3,5,6,7,8,9]);
    board.addRow(row1);
    board.addRow(row2);
    expect(board.rows.length).toEqual(2)
  })


});
