class TicTacToe {
    constructor() {
      this.field = [
					[null, null, null],
					[null, null, null],
					[null, null, null]
				   ];
      this.playerSymbol = 'x';
    }

    getCurrentPlayerSymbol() {
      return this.playerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
      if (this.getFieldValue(rowIndex, columnIndex) == null) {
		  
      this.field[rowIndex][columnIndex] = this.playerSymbol;
	  
      this.playerSymbol=this.playerSymbol=='x'?'o':'x';
      }
    }

    isFinished() {
		
		return (this.noMoreTurns()|| this.getWinner() != null);
    
    }

    getWinner() {
		
      if (this.field[0][0] != null && this.field[0][0] === this.field[0][1] && this.field[0][1] === this.field[0][2]) return this.field[0][0];
	  
      if (this.field[1][0] != null && this.field[1][0] === this.field[1][1] && this.field[1][1] === this.field[1][2]) return this.field[1][0];
	  
      if (this.field[2][0] != null && this.field[2][0] === this.field[2][1] && this.field[2][1] === this.field[2][2]) return this.field[2][0];
	  
      if (this.field[0][0] != null && this.field[0][0] === this.field[1][0] && this.field[1][0] === this.field[2][0]) return this.field[0][0];
	  
      if (this.field[0][1] != null && this.field[0][1] === this.field[1][1] && this.field[1][1] === this.field[2][1]) return this.field[0][1];
	  
      if (this.field[0][2] != null && this.field[0][2] === this.field[1][2] && this.field[1][2] === this.field[2][2]) return this.field[0][2];
	  
      if (this.field[0][0] != null && this.field[0][0] === this.field[1][1] && this.field[1][1] === this.field[2][2]) return this.field[0][0];
	  
      if (this.field[2][0] != null && this.field[2][0] === this.field[1][1] && this.field[1][1] === this.field[0][2]) return this.field[0][2];
	  
      return null;
    }

    noMoreTurns() {
		
      for (var i = 0; i < 3; i++) 
		  
        for (var j = 0; j < 3; j++) 
		{
			
			if (this.field[i][j] == null) 
				return false;
			
		}

      return true;
    }

    isDraw() {
		
      return (this.noMoreTurns() && this.getWinner() == null) ;
      
    }

    getFieldValue(rowIndex, colIndex) {
		
      return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
