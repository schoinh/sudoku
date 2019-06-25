export function Board () {
  this.rows = [];
  this.legal = false;
}

Board.prototype.addRow = function(row) {
  this.rows.push(row);
}

Board.prototype.countRows = function() {
  if (this.rows.length === 9) {
    this.legal = true;
  }
}

Board.prototype.rowLegal = function () {
  for (var i = 0; i < this.rows.length; i++) {
    this.rows[i].checkLegal();
    this.rows[i].checkRepeat();    
    if (this.rows[i].legal !== true) {
      return this.legal = false;
    }
  }
}

export function Row (numbers) {
  this.numbers = numbers;
  this.legal = false
}

Row.prototype.checkLegal = function() {
  if (this.numbers.length !== 9) {
    this.legal = false;
  } else {
    for (var i = 0; i < this.numbers.length; i++) {
      if (this.numbers[i] < 1 || this.numbers[i] > 9) {
        return this.legal = false;
      } else {
        this.legal = true;
      }
    }
  }
}

Row.prototype.checkRepeat = function() {
  for (var i = 0; i < this.numbers.length; i++) {
    if (this.numbers.indexOf(this.numbers[i]) !== this.numbers.lastIndexOf(this.numbers[i])) {
      return this.legal = false;
    }
  }
}
