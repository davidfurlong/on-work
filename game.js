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
      /* 
        This isn't how switch statements work.
        The structure is almost correct, but the cases match on the value of the argument provided to switch.
        In this case using if is probably easier, because you are not doing cases of a primitive. Each case will likely be checking
        different parts of this.board.
        
        Switch statements are useful with primitive case matching on equality (string, number, ...)
        
        Example:
        
        var color = "red";
        
        switch(color) {
          case "blue":
            // do something
          case "orange:
            // do something
          case "red":
            // do something
          default:
            // do something if it doesn't match any
        }
        
        
        its just a shorter way of writing
        
        var color = "red";
        if(color === "blue")
          // do something
        else if(color === "orange")
          // do something
        else if(color === "red")
          // do something
        else
          // do something if it doesn't match any
          
        But if you dont feel comfortable with switch then just use if statements, they're just as good (and more flexible, for instance
        for what we needed to do here)
              
      */
      // correct case
     /* 
      [ 0 , 1 , 2 ,
        3 , 4 , 5 ,
        6 , 7 , 8 ]
     */
      // correct case (although doesn't work because of the way you used switch/case)
      switch(this.board[2] == this.board[4] && this.board[2] == this.board[6]) {
          return this.winner = this.board[2];
      }
      // correct case
        case:this.board[0] == this.board[1] && this.board[0] == this.board[2]) {
            return this.winner = this.board[0];
         break;   
        }
        // wrong case, look at the board
        case:this.board[3] == this.board[4] && this.board[0] == this.board[5]) {
            return this.winner = this.board[3];
      break;
        }
      // correct case
        case:this.board[6] == this.board[7] && this.board[6] == this.board[8]) {
            return this.winner = this.board[6];
            break;
        }
      // wrong case. Must be comparing exactly 3 squares at any case
        case:this.board[0] == this.board[3] && this.board[6] == this.board[7]) {
            return this.winner = this.board[0];
     break; 
      
        }
      // correct
        case:this.board[1] == this.board[4] && this.board[1] == this.board[7]) {
            return this.winner = this.board[1];
      break;
        }
      // correct
        case:this.board[2] == this.board[5] && this.board[2] == this.board[8]) {
            return this.winner = this.board[2];
      break;
        }
      // correct
        case:this.board[0] == this.board[4] && this.board[0] == this.board[8]) {
            return this.winner = this.board[0];
      break;
        }
      default:return this.winner = false;
        }
    }
}
