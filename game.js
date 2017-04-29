function TicTacToe(){
  this.players = [];
  this.started = false;
  this.startPlayer = 1;
  this.winner=false;

  this.createEmptyBoard = function(){
    this.board = [];
    var i=0;
    while(i < 9){
      this.board.push(null);
      i++;
    }
  }

  this.startGame = function(){
    this.createEmptyBoard();
    this.started = true;
  }

  this.addPlayer = function( name ){
    if(this.players.length === 2) return false;
    this.players.push(name);

    if(this.players.length === 2) this.startGame();

    return this.players.length;
  }

  this.getPlayerName = function( player ){
    return this.players[player-1];
  }

  this.isGameStarted = function(){
    return this.started;
  }

  this.next = function(){
    var moves = this.board.filter(function(pos){
      return pos !== null;
    }).length;
    if(moves === 0) return this.startPlayer;
    if(moves % 2 === 1) return 2;
    return 1;
  }

  this.play = function(player, position){
    if( this.board[position] !== null ) return false;
    this.board[position] = player;
    return true;
  }
  this.checkBoard=function(){
    for (var i=0; i<9; i++){
      if (this.board[i]==null)  
     return false;

}
    return true;

  }
    this.winner = function(board) {
      switch(this.board[2] == this.board[4] && this.board[2] == this.board[6]) {
          return this.winner = this.board[2];
      }
        case:this.board[0] == this.board[1] && this.board[0] == this.board[2]) {
            return this.winner = this.board[0];
         break;   
        }

        case:this.board[3] == this.board[4] && this.board[0] == this.board[5]) {
            return this.winner = this.board[3];
      break;
        }
        case:this.board[6] == this.board[7] && this.board[6] == this.board[8]) {
            return this.winner = this.board[6];
            break;
        }
        case:this.board[0] == this.board[3] && this.board[6] == this.board[7]) {
            return this.winner = this.board[0];
     break; 
      
        }
        case:this.board[1] == this.board[4] && this.board[1] == this.board[7]) {
            return this.winner = this.board[1];
      break;
        }
        case:this.board[2] == this.board[5] && this.board[2] == this.board[8]) {
            return this.winner = this.board[2];
      break;
        }
        case:this.board[0] == this.board[4] && this.board[0] == this.board[8]) {
            return this.winner = this.board[0];
      break;
        }
      default:return this.winner = false;
        }
    }
}
