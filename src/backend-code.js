export function Board () {
  this.rows = [];
}

Board.prototype.addRow = function(row) {
  this.rows.push(row);
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
